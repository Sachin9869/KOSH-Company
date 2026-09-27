import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/constants';

export const metadata = {
  title: `Privacy Policy – ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main id="main" className="kosh-container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-h1-sm text-ink md:text-h1">Privacy Policy</h1>
          <p className="mt-2 text-body text-ink-secondary">Last updated: June 2025</p>

          <div className="prose prose-neutral mt-10 max-w-none">
            <p>
              KOSH is a local marketplace operated by {SITE.legalName} (&ldquo;KOSH&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;) in Canada. This policy explains what personal
              information we collect through the KOSH apps and {SITE.url}, why we collect it, and the
              choices you have.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              list a product or service, make a purchase, or contact us for support.
            </p>
            <ul>
              <li>
                <strong>Account information:</strong> name, email address, phone number, and
                password.
              </li>
              <li>
                <strong>Vendor information:</strong> business name, business type, and store
                description.
              </li>
              <li>
                <strong>Transaction information:</strong> purchase history, payment method details
                (processed securely by Stripe — we do not store card numbers), and delivery
                addresses.
              </li>
              <li>
                <strong>Usage information:</strong> pages visited, features used, and device
                information such as IP address, browser type, and operating system.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Provide, maintain, and improve the KOSH platform.</li>
              <li>Process transactions and send related information.</li>
              <li>Send promotional communications (you can opt out at any time).</li>
              <li>Respond to your comments and questions.</li>
              <li>Monitor and analyze usage trends.</li>
              <li>Detect and prevent fraudulent or illegal activity.</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share information with third-party
              vendors and service providers that perform services on our behalf, such as payment
              processing (Stripe), cloud hosting, and analytics.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide the services and
              fulfill the purposes outlined in this policy, unless a longer retention period is
              required or permitted by law.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may update or correct information about yourself by logging into your account
              settings. You may opt out of receiving promotional emails by following the instructions
              in those messages. If you wish to delete your account, please contact us at{' '}
              <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
