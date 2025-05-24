export default function PrivacyAndCompliancePage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Privacy & Compliance</h1>
      <h5>Protecting Your Data. Earning Your Trust.</h5>
      <div className="flex flex-col gap-6">
        {/* Increased gap for better readability */}
        <section>
          <h2>Our Commitment</h2>
          <p>
            We are deeply committed to safeguarding your privacy and upholding
            the highest standards of data protection. Whether you&apos;re a
            parent, student, or visitor, we treat your information with care and
            respect. This policy outlines how we collect, use, store, and
            protect your personal data in compliance with applicable privacy
            laws, including the General Data Protection Regulation (GDPR), the
            California Consumer Privacy Act (CCPA), and other relevant
            regulations.
          </p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>
            We collect information to provide high-quality educational services,
            improve user experience, and maintain a secure learning environment.
            The types of data we may collect include:
          </p>
          <h3>Personal Information</h3>
          <p>
            Details such as your name, email address, phone number, billing
            information, and student names provided during registration,
            enrollment, or communication.
          </p>
          <h3>Usage Data</h3>
          <p>
            Information about how you use our website or digital platforms,
            including pages visited, links clicked, session duration, and
            navigation patterns.
          </p>
          <h3>Technical Data</h3>
          <p>
            Device and browser information, operating system, IP address, access
            times, and other diagnostic data gathered through cookies or
            analytics tools.
          </p>
          <h3>Communication Records</h3>
          <p>
            Any messages, inquiries, survey responses, support requests, or
            feedback submitted through our website, email, or other channels.
          </p>
        </section>
        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We only use your data for clear, lawful purposes. These include:
          </p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>
              <strong>Service Delivery:</strong> To register students, manage
              accounts, deliver classes, and provide access to course materials
              and resources.
            </li>
            <li>
              <strong>Customer Support:</strong> To respond to inquiries, send
              reminders, and provide technical assistance.
            </li>
            <li>
              <strong>Improvements & Personalization:</strong> To analyze
              platform usage, enhance user experience, and tailor content and
              offerings to better meet your needs.
            </li>
            <li>
              <strong>Security:</strong> To detect and prevent unauthorized
              access, fraudulent activity, and other potential threats to
              platform integrity.
            </li>
            <li>
              <strong>Compliance & Legal Obligations:</strong> To fulfill legal
              and regulatory requirements, including data retention, financial
              reporting, and safeguarding obligations.
            </li>
          </ul>
        </section>
        <section>
          <h2>Data Security</h2>
          <p>
            We employ robust, industry-standard security measures to protect
            your data:
          </p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>
              <strong>Encryption:</strong> Sensitive data is encrypted in
              transit and at rest.
            </li>
            <li>
              <strong>Access Controls:</strong> Only authorized personnel with
              verified credentials can access personal data.
            </li>
            <li>
              <strong>Monitoring & Updates:</strong> Systems are regularly
              audited and updated to protect against vulnerabilities and ensure
              data integrity.
            </li>
          </ul>
          <p className="mt-2">
            Despite our best efforts, no method of transmission or storage is
            100% secure. We encourage you to maintain good cybersecurity
            practices when interacting with our services.
          </p>
        </section>
        <section>
          <h2>Your Rights</h2>
          <p>
            As a data subject, you have the following rights under applicable
            laws:
          </p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>
              <strong>Access:</strong> You can request access to the personal
              data we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You may request corrections to
              inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You can request the removal of your
              personal data, subject to legal or contractual obligations.
            </li>
            <li>
              <strong>Data Portability:</strong> You may request a copy of your
              data in a structured, machine-readable format.
            </li>
            <li>
              <strong>Consent Withdrawal:</strong> If processing is based on
              consent, you may withdraw that consent at any time without
              affecting the lawfulness of prior processing.
            </li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:privacy@yourcompany.com"
              className="text-blue-600 underline"
            >
              privacy@yourcompany.com
            </a>
            .
          </p>
        </section>
        <section>
          <h2>Cookies & Tracking Technologies</h2>
          <p>We use cookies and similar technologies for several purposes:</p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>
              <strong>Functionality:</strong> To remember login details and user
              preferences.
            </li>
            <li>
              <strong>Analytics:</strong> To measure site usage, engagement, and
              performance.
            </li>
            <li>
              <strong>Marketing:</strong> To deliver personalized content and
              targeted communications.
            </li>
          </ul>
          <p className="mt-2">
            You can manage cookie preferences through your browser or opt out of
            certain types of tracking by visiting{" "}
            <a
              href="http://www.aboutads.info/choices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              www.aboutads.info/choices
            </a>{" "}
            or similar resources.
          </p>
        </section>
        <section>
          <h2>Third-Party Services</h2>
          <p>
            We partner with trusted third-party providers to enhance our
            platform and services. These may include:
          </p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>Payment processors (e.g., Stripe)</li>
            <li>Learning management systems (e.g., ClassDojo, Teachable)</li>
            <li>Analytics platforms (e.g., Google Analytics)</li>
            <li>Communication tools (e.g., Mailchimp)</li>
          </ul>
          <p className="mt-2">
            These partners may collect or process your data according to their
            own privacy policies. We only work with vendors that meet our
            security and compliance standards.
          </p>
        </section>
        <section>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to:
          </p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>Fulfill the purposes described in this policy</li>
            <li>Comply with legal and contractual obligations</li>
            <li>Resolve disputes or enforce our terms of service</li>
          </ul>
          <p className="mt-2">
            When data is no longer needed, it is securely deleted or anonymized.
          </p>
        </section>
        <section>
          <h2>Children’s Privacy</h2>
          <p>We take special care when handling data from or about children:</p>
          <ul className="space-y-2 mt-2 ml-6 list-disc">
            <li>
              Our services are not intended for children under age 13 without
              verifiable parental consent.
            </li>
            <li>
              We do not knowingly collect personal data from children without
              parental involvement.
            </li>
          </ul>
          <p className="mt-2">
            If you believe we have collected data from a child in error, please
            contact us immediately so we can investigate and take appropriate
            action.
          </p>
        </section>
        <section>
          <h2>Updates to This Policy</h2>
          <p>
            We may revise this Privacy & Compliance policy to reflect changes in
            regulations, technologies, or our business practices. All updates
            will be posted on this page with a revised effective date. We
            encourage you to review this policy periodically.
          </p>
          <p className="mt-2">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
          <p>
            <strong>Last Reviewed:</strong> [Insert Date]
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions, requests, or concerns about your data or our
            privacy practices, please don’t hesitate to contact our compliance
            team:
          </p>
          <ul className="space-y-1 mt-2">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:privacy@yourcompany.com"
                className="text-blue-600 underline"
              >
                [privacy@yourcompany.com]
              </a>
            </li>
            <li>
              📍 Mailing Address: [Your Company Name], [Street Address], [City,
              State, Zip Code]
            </li>
          </ul>
          <p className="mt-2">
            We are here to help and are committed to maintaining transparency
            and trust in everything we do.
          </p>
        </section>
      </div>
    </div>
  );
}
