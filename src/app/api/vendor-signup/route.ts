import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SITE } from '@/lib/constants';
import { vendorSignupSchema, type VendorSignupInput } from '@/lib/vendor-signup-schema';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.KOSH_FROM_EMAIL ?? 'KOSH <hello@kosh.ca>';
const TEAM_EMAIL = process.env.KOSH_TEAM_EMAIL ?? 'vendors@kosh.ca';
/** Optional Google Sheet / Notion / Zapier catch-all webhook. */
const LOG_WEBHOOK_URL = process.env.VENDOR_SIGNUP_WEBHOOK_URL;

/** Very small in-memory throttle. Per-instance only — a CDN/WAF rule is the real defence. */
const RATE_LIMIT = { windowMs: 60_000, max: 5 };
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT.windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT.max;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please try again in a minute.' },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = vendorSignupSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Please check the highlighted fields and try again.',
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  // Honeypot filled in → silently accept so bots don't learn anything.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const lead = parsed.data;

  // Email is best-effort: a delivery failure must not lose the lead, so the
  // webhook log and the 200 response are independent of it.
  const results = await Promise.allSettled([sendEmails(lead), logLead(lead, ip)]);

  const emailResult = results[0];
  if (emailResult.status === 'rejected') {
    console.error('[vendor-signup] email delivery failed:', emailResult.reason);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

async function sendEmails(lead: VendorSignupInput) {
  if (!RESEND_API_KEY) {
    console.warn('[vendor-signup] RESEND_API_KEY not set — skipping email delivery.');
    return;
  }

  const resend = new Resend(RESEND_API_KEY);

  await Promise.all([
    // 1. Confirmation to the vendor.
    resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject: "You're on the KOSH vendor list 🎉",
      html: vendorEmailHtml(lead),
      text: vendorEmailText(lead),
    }),
    // 2. Notification to the KOSH team.
    resend.emails.send({
      from: FROM_EMAIL,
      to: TEAM_EMAIL,
      replyTo: lead.email,
      subject: `New vendor lead — ${lead.businessName} (${lead.city})`,
      html: teamEmailHtml(lead),
      text: teamEmailText(lead),
    }),
  ]);
}

async function logLead(lead: VendorSignupInput, ip: string) {
  if (!LOG_WEBHOOK_URL) return;

  const res = await fetch(LOG_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...lead,
      website: undefined,
      submittedAt: new Date().toISOString(),
      source: 'kosh.ca/#vendor-signup',
      ip,
    }),
  });

  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}`);
  }
}

/* ─── email templates ───────────────────────────────────────── */

function vendorEmailHtml(lead: VendorSignupInput) {
  return `
<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:520px;margin:0 auto;color:#0F172A">
  <div style="background:linear-gradient(135deg,#1E3A8A 0%,#1D4ED8 100%);padding:32px 28px;border-radius:16px 16px 0 0">
    <p style="margin:0;font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px">
      K<span style="color:#F97316">O</span>SH
    </p>
    <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,0.75)">Find Local. Buy Local.</p>
  </div>
  <div style="border:1px solid #E2E8F0;border-top:0;border-radius:0 0 16px 16px;padding:28px">
    <h1 style="margin:0 0 12px;font-size:20px">Welcome, ${escapeHtml(lead.fullName)} 👋</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:#475569">
      Thanks for putting <strong>${escapeHtml(lead.businessName)}</strong> on the KOSH vendor list.
      Someone from our Ontario team will reach out within 24 hours to get you set up.
    </p>
    <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#0F172A">What you told us</p>
    <table style="width:100%;font-size:13px;color:#475569;border-collapse:collapse">
      ${row('Business', lead.businessName)}
      ${row('Type', lead.businessType)}
      ${row('City', lead.city)}
      ${row('Phone', lead.phone)}
    </table>
    <p style="margin:20px 0 0;font-size:13px;color:#94A3B8">
      Not expecting this email? Just ignore it and we won't contact you again.
    </p>
  </div>
</div>`;
}

function vendorEmailText(lead: VendorSignupInput) {
  return [
    `Welcome, ${lead.fullName}!`,
    '',
    `Thanks for putting ${lead.businessName} on the KOSH vendor list. Someone from our Ontario team will reach out within 24 hours.`,
    '',
    `Business: ${lead.businessName}`,
    `Type: ${lead.businessType}`,
    `City: ${lead.city}`,
    `Phone: ${lead.phone}`,
    '',
    `— The KOSH team · ${SITE.url}`,
  ].join('\n');
}

function teamEmailHtml(lead: VendorSignupInput) {
  return `
<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:520px;color:#0F172A">
  <h1 style="font-size:18px;margin:0 0 4px">New vendor lead</h1>
  <p style="margin:0 0 16px;font-size:13px;color:#64748B">via kosh.ca vendor sign-up form</p>
  <table style="width:100%;font-size:14px;color:#334155;border-collapse:collapse">
    ${row('Name', lead.fullName)}
    ${row('Business', lead.businessName)}
    ${row('Type', lead.businessType)}
    ${row('City', lead.city)}
    ${row('Phone', lead.phone)}
    ${row('Email', lead.email)}
  </table>
</div>`;
}

function teamEmailText(lead: VendorSignupInput) {
  return [
    'New vendor lead via kosh.ca',
    '',
    `Name: ${lead.fullName}`,
    `Business: ${lead.businessName}`,
    `Type: ${lead.businessType}`,
    `City: ${lead.city}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
  ].join('\n');
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#94A3B8;white-space:nowrap">${label}</td>
    <td style="padding:6px 0;font-weight:500">${escapeHtml(value)}</td>
  </tr>`;
}

/** Lead data is user-supplied — never interpolate it raw into HTML email. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
