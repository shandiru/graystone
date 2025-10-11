import React from 'react';

export default function PrivacyPolicy() {
  const brandOrange = '#E1912F';
  const brandBlack = '#000000';
  const brandWhite = '#FFFFFF';

  return (
    <div
      className="mx-auto px-4 py-12 sm:px-6 lg:px-16"
      style={{ backgroundColor: brandWhite, color: brandBlack }}
    >
      <h1
        className="text-4xl font-serif font-bold text-center mb-8"
        style={{ color: brandBlack }}
      >
        Privacy Policy
      </h1>
      <p className="text-center text-sm mb-12" style={{ color: brandBlack }}>
        Last updated: 09/09/25
      </p>

      <div className="mt-8 space-y-10 max-w-4xl mx-auto">
        {/* 1. Information We Collect */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            1. Information We Collect
          </h2>
          <p>
            When you complete a form on our website or contact us directly, we may collect:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address (if relevant to the service)</li>
            <li>Details of your enquiry or project</li>
          </ul>
          <p className="mt-3">
            We may also collect limited technical data automatically when you visit our
            website, such as your IP address and browser type.
          </p>
        </section>

        {/* 2. Lawful Basis for Processing */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            2. Lawful Basis for Processing
          </h2>
          <p>We only process your personal data where we have a lawful basis to do so. This includes:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Contract – to provide a quote, arrange services, or fulfill an agreement with you</li>
            <li>Consent – when you give us permission to contact you for specific purposes</li>
            <li>Legitimate interests – to respond to inquiries and manage our business effectively</li>
            <li>Legal obligation – where we must comply with the law</li>
          </ul>
        </section>

        {/* 3. How We Use Your Information */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            3. How We Use Your Information
          </h2>
          <p>We use your personal data to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Respond to inquiries and provide quotes</li>
            <li>Deliver automotive services</li>
            <li>Communicate with you about your project</li>
            <li>Maintain business records and comply with legal requirements</li>
          </ul>
          <p className="mt-3">We do not sell or trade your personal details to third parties.</p>
        </section>

        {/* 4. Sharing Your Information */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            4. Sharing Your Information
          </h2>
          <p>We may share your personal data only with:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Trusted service providers (such as IT and hosting providers) who help us operate our business</li>
            <li>Professional advisers (such as accountants or insurers)</li>
            <li>Regulatory bodies or law enforcement, if required by law</li>
          </ul>
        </section>

        {/* 5. Cookies */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            5. Cookies & Website Tracking
          </h2>
          <p>
            Our website may use cookies or similar technologies to improve user experience
            and monitor website performance. You can set your browser to refuse cookies if
            you prefer.
          </p>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            6. Data Security
          </h2>
          <p>
            We take appropriate measures to keep your personal information secure and
            prevent unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        {/* 7. Data Retention */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            7. How Long We Keep Your Information
          </h2>
          <p>
            We keep your personal data only for as long as necessary to fulfill the
            purposes for which it was collected, including legal, accounting, or reporting
            requirements.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            8. Your Rights
          </h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of any inaccurate information</li>
            <li>Request deletion of your data (where legally permissible)</li>
            <li>Restrict or object to how we use your data</li>
            <li>Withdraw consent (where consent is the basis for processing)</li>
            <li>Data portability (to receive your data in a usable format)</li>
          </ul>
          <p className="mt-3">
            To exercise your rights, please contact us using the details below.
          </p>
        </section>

        {/* 9. Contact */}
        <section>
          <h2
            className="text-2xl font-semibold mb-3 font-serif"
            style={{ color: brandOrange }}
          >
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your
            personal data, please contact us:
          </p>
          <div className="mt-3">
            <p>
              <strong>Greystone Automotive</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:justin.day@live.co.uk"
                className="text-[#E1912F] hover:underline"
              >
                justin.day@live.co.uk
              </a>
            </p>
            <p>Phone: +44 7545 213989</p>
            <p>Address: 3 Bryta Works, Little London Rd, Woodseats, Sheffield S8 0UJ, UK</p>
          </div>
          <p className="mt-3">
            If you are not satisfied with our response, you have the right to lodge a
            complaint with the{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1912F] hover:underline"
            >
              Information Commissioner’s Office (ICO)
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
