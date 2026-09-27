import type { Metadata } from 'next';
import { LegalPage, LegalSection } from '@/components/layout/LegalPage';
import { SITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How KOSH collects, uses, and protects your personal information under PIPEDA.',
  alternates: { canonical: '/privacy' },
};

const PRIVACY_EMAIL = 'privacy@kosh.ca';

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 25, 2026">
      <LegalSection title="1. Who we are">
        <p>
          KOSH is a local marketplace operated by {SITE.legalName} (&ldquo;KOSH&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) in {SITE.region}. This policy explains what personal
          information we collect through the KOSH apps and {SITE.url}, why we collect it, and the
          choices you have.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <ul>
          <li>
            <strong>Phone number</strong> — used to create and verify your account and to send
            order updates.
          </li>
          <li>
            <strong>Location</strong> — your approximate or precise location (with your permission)
            so we can show vendors near you. You can turn location access off at any time in your
            device settings and enter an address manually instead.
          </li>
          <li>
            <strong>Order history</strong> — the items you order, the vendors you order from,
            amounts, and timestamps.
          </li>
          <li>
            <strong>Vendor details</strong> — if you sign up as a vendor, your name, business name,
            business type, city, email, and phone number.
          </li>
          <li>
            <strong>Technical data</strong> — device type, app version, and basic usage analytics
            that help us keep the service reliable.
          </li>
        </ul>
        <p>
          Payments are handled by our payment processor. KOSH does not store full card numbers.
        </p>
      </LegalSection>

      <LegalSection title="3. How we use your information">
        <ul>
          <li>Matching buyers with local vendors based on location and what they are looking for.</li>
          <li>
            Fulfilling orders — sharing the details a vendor needs (such as your name, phone
            number, and pickup or delivery information) to complete your order.
          </li>
          <li>Sending order confirmations, status updates, and service messages.</li>
          <li>Preventing fraud and keeping the marketplace safe.</li>
          <li>Improving KOSH through aggregated, de-identified analytics.</li>
        </ul>
        <p>
          We do not sell your personal information. We only send marketing messages with your
          consent, in line with Canada&apos;s Anti-Spam Legislation (CASL), and you can unsubscribe
          at any time.
        </p>
      </LegalSection>

      <LegalSection title="4. PIPEDA compliance">
        <p>
          KOSH handles personal information in accordance with the{' '}
          <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and its
          ten fair information principles. We collect only what we need for the purposes described
          above, obtain meaningful consent, protect information with appropriate safeguards, and
          limit use and disclosure to those purposes unless the law requires otherwise.
        </p>
        <p>
          You have the right to access the personal information we hold about you, to ask us to
          correct it, and to withdraw consent (which may limit the services we can provide). If you
          are not satisfied with our response to a privacy concern, you may contact the Office of
          the Privacy Commissioner of Canada.
        </p>
      </LegalSection>

      <LegalSection title="5. Sharing">
        <p>We share personal information only with:</p>
        <ul>
          <li>Vendors you order from, limited to what is needed to fulfil your order.</li>
          <li>
            Service providers who help us run KOSH (for example hosting, payments, email, and
            analytics), under contracts that require them to protect it.
          </li>
          <li>Authorities, where required by law.</li>
        </ul>
        <p>
          Some service providers may store data outside Canada. When they do, your information is
          subject to the laws of that jurisdiction, and we require comparable protection by
          contract.
        </p>
      </LegalSection>

      <LegalSection title="6. Data retention and deletion">
        <p>
          We keep personal information only as long as needed for the purposes above. Account
          information is kept while your account is active. Order records are kept for up to seven
          years to meet Canadian tax and accounting obligations. Vendor sign-up leads that do not
          become active vendors are deleted within 24 months.
        </p>
        <p>
          You can delete your account from the app settings or by emailing us. We will delete or
          anonymize your personal information within 30 days, except for records we are legally
          required to keep.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We use encryption in transit, access controls, and regular reviews to protect your
          information. No system is perfectly secure, and we will notify you and the Privacy
          Commissioner of any breach that poses a real risk of significant harm, as PIPEDA
          requires.
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to this policy">
        <p>
          We may update this policy from time to time. If we make material changes, we will let
          you know in the app or by email before they take effect.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact us">
        <p>
          Questions, access requests, or deletion requests can be sent to our Privacy Officer at{' '}
          <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
