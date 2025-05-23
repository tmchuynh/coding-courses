export default function PrivacyAndCompliancePage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-16 w-10/12 md:w-11/12">
      <h1>Privacy & Compliance</h1>
      <div className="flex flex-col gap-3">
        <section>
          <h2>Our Commitment</h2>
          <p>
            We are committed to protecting your privacy and ensuring compliance
            with all applicable data protection regulations. This page outlines
            how we collect, use, and safeguard your information.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              Personal information (such as name, email address, and contact
              details) provided during registration or communication.
            </li>
            <li>
              Usage data, including pages visited, time spent, and interactions
              with our platform.
            </li>
            <li>
              Technical data such as IP address, browser type, and device
              information.
            </li>
          </ul>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <ul className="space-y-2 ml-6 list-disc">
            <li>To provide and improve our educational services.</li>
            <li>
              To communicate updates, respond to inquiries, and offer support.
            </li>
            <li>To ensure the security and integrity of our platform.</li>
            <li>
              To comply with legal obligations and regulatory requirements.
            </li>
          </ul>
        </section>
        <section>
          <h2>Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your
            data from unauthorized access, alteration, disclosure, or
            destruction. Access to personal information is restricted to
            authorized personnel only.
          </p>
        </section>
        <section>
          <h2>Your Rights</h2>
          <ul className="space-y-2 ml-6 list-disc">
            <li>
              Access, update, or delete your personal information at any time.
            </li>
            <li>Request information about how your data is processed.</li>
            <li>Withdraw consent for data processing where applicable.</li>
          </ul>
        </section>
        <section>
          <h2>Compliance</h2>
          <p>
            We comply with relevant privacy laws and regulations, including
            GDPR, CCPA, and other applicable standards. Our policies are
            regularly reviewed and updated to maintain compliance.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about our privacy practices or
            compliance policies, please contact us at{" "}
            <a
              href="mailto:privacy@yourcompany.com"
              className="text-blue-600 underline"
            >
              privacy@yourcompany.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
