export default function PrivacyAndCompliancePage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
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
          <h2>Cookies & Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience, analyze usage, and deliver relevant content. You can
            manage your cookie preferences through your browser settings.
          </p>
        </section>
        <section>
          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services (such as analytics providers or
            payment processors) that collect, process, and store your
            information according to their own privacy policies. We recommend
            reviewing those policies for more information.
          </p>
        </section>
        <section>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to
            fulfill the purposes outlined in this policy, comply with legal
            obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>
        <section>
          <h2>Children’s Privacy</h2>
          <p>
            Our services are not directed to children under the age of 13. We do
            not knowingly collect personal information from children. If you
            believe a child has provided us with personal information, please
            contact us so we can take appropriate action.
          </p>
        </section>
        <section>
          <h2>Updates to This Policy</h2>
          <p>
            We may update this Privacy & Compliance policy from time to time.
            Any changes will be posted on this page with an updated effective
            date. We encourage you to review this page periodically.
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
