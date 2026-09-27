import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, LegalSection } from '@/components/layout/LegalPage';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern buying and selling on the KOSH local marketplace.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="September 25, 2026">
      <LegalSection title="1. About KOSH">
        <p>
          KOSH is an online marketplace operated by {SITE.legalName} (&ldquo;KOSH&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) that connects buyers with independent local vendors —
          home bakeries, food makers, service providers, and stores. KOSH
          provides the platform only. Vendors are independent businesses and are not employees or
          agents of KOSH, and KOSH is not the seller of any product or service listed.
        </p>
        <p>
          By creating an account or using KOSH you agree to these Terms and to our{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection title="2. Eligibility">
        <ul>
          <li>You must be at least 18 years old, or the age of majority where you live.</li>
          <li>You must provide accurate account information and keep it up to date.</li>
          <li>
            Vendors must be legally permitted to operate their business in Ontario and hold any
            licences, permits, or registrations their business requires.
          </li>
          <li>You are responsible for all activity on your account and for keeping it secure.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Vendor responsibilities">
        <ul>
          <li>
            <strong>Accurate listings.</strong> Descriptions, photos, prices, availability,
            ingredients, and allergen information must be truthful and kept current.
          </li>
          <li>
            <strong>Food safety compliance.</strong> Vendors selling food must comply with the
            Ontario <em>Health Protection and Promotion Act</em>, Ontario Regulation 493/17 (Food
            Premises), and any requirements of their local public health unit, including safe
            preparation, storage, labelling, and allergen disclosure.
          </li>
          <li>Fulfilling accepted orders on time and as described, or cancelling promptly.</li>
          <li>
            Collecting and remitting any applicable taxes (including HST) and complying with all
            laws that apply to their business.
          </li>
          <li>Not listing prohibited, unsafe, counterfeit, or illegal items.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Buyer responsibilities">
        <ul>
          <li>Providing accurate contact, pickup, and delivery details.</li>
          <li>Paying for orders you place and collecting them at the agreed time.</li>
          <li>
            Reviewing listing details — including allergen information — before ordering, and
            contacting the vendor with any questions.
          </li>
          <li>Treating vendors respectfully and leaving honest reviews.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Fees">
        <p>
          KOSH is free for buyers to use. Vendors pay a <strong>10% platform fee</strong> on the
          value of each completed order. The fee is deducted automatically before payouts and
          covers payment processing, fraud protection, and local search placement. There are no
          setup or monthly fees to start. We will give vendors at least 30 days&apos; notice of any
          change to fees.
        </p>
      </LegalSection>

      <LegalSection title="6. Refunds and disputes">
        <p>
          If something goes wrong with an order, contact the vendor first through the app — most
          issues are resolved quickly this way. If an order is not delivered, is materially
          different from its listing, or is unsafe, you may request a refund within 7 days of the
          scheduled pickup or delivery date.
        </p>
        <p>
          If you and the vendor cannot agree, either of you may escalate the dispute to KOSH at{' '}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>. We will review the
          information both parties provide and make a decision, which may include a full or
          partial refund charged back to the vendor. Where a refund is issued, the platform fee on
          the refunded amount is also returned to the vendor.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of liability">
        <p>
          KOSH is provided &ldquo;as is&rdquo;. To the fullest extent permitted by law, KOSH is not
          liable for the quality, safety, legality, or delivery of items sold by vendors, or for
          indirect, incidental, special, or consequential damages arising from your use of the
          platform. Our total liability for any claim is limited to the greater of the fees KOSH
          received in connection with the order giving rise to the claim, or CAD $100.
        </p>
        <p>
          Nothing in these Terms limits any rights you have under the Ontario{' '}
          <em>Consumer Protection Act</em> or other laws that cannot be excluded by contract.
        </p>
      </LegalSection>

      <LegalSection title="8. Suspension and termination">
        <p>
          We may suspend or close accounts that break these Terms, put others at risk, or engage in
          fraud. You may close your account at any time from the app settings.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to these Terms">
        <p>
          We may update these Terms from time to time. We will notify you of material changes in
          the app or by email, and continued use of KOSH after they take effect means you accept
          the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law">
        <p>
          These Terms are governed by the laws of the Province of Ontario and the federal laws of
          Canada that apply there. Any dispute will be heard in the courts of Ontario, Canada.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact">
        <p>
          Questions about these Terms can be sent to{' '}
          <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
