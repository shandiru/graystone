import React from "react";

export default function TermsConditions() {
  const brandOrange = "#E1912F";
  const brandBlack = "#000000";
  const brandWhite = "#FFFFFF";

  return (
    <section
      className="mx-auto px-4 py-12 sm:px-6 lg:px-16"
      style={{ backgroundColor: brandWhite, color: brandBlack }}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl font-serif font-bold text-center mb-8"
          style={{ color: brandBlack }}
        >
          Website Terms of Use
        </h1>
        <p className="text-center text-sm mb-12" style={{ color: brandBlack }}>
          Last updated: 09/09/25
        </p>

        <div className="mt-8 space-y-10">
          {/* 1. Use of Our Website */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              1. Use of Our Website
            </h2>
            <p>
              The content on this website is for general information only. You must not use
              this site for unlawful purposes or in any way that may damage our reputation
              or impair its availability.
            </p>
          </section>

          {/* 2. Accuracy of Information */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              2. Accuracy of Information
            </h2>
            <p>
              We make reasonable efforts to keep information on this website up to date,
              but we do not guarantee accuracy, completeness, or reliability. Any reliance
              on website content is at your own risk. For project details, quotes, or
              professional advice, please contact us directly.
            </p>
          </section>

          {/* 3. Intellectual Property */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              3. Intellectual Property
            </h2>
            <p>
              All content on this website (including text, images, graphics, and logos) is
              owned by or licensed to <strong>Greystone Automotive</strong>. You may view,
              download, and print content for personal use only. You must not copy,
              reproduce, or distribute our website content without prior written consent.
            </p>
          </section>

          {/* 4. Links to Other Websites */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              4. Links to Other Websites
            </h2>
            <p>
              This site may include links to external websites for convenience. We are not
              responsible for the content or practices of third-party websites.
            </p>
          </section>

          {/* 5. Liability */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              5. Liability
            </h2>
            <p>
              We are not liable for any loss or damage arising from use of this website,
              except where required by law. Nothing in these terms excludes or limits
              liability for death or personal injury caused by negligence.
            </p>
          </section>

          {/* 6. Privacy & Data Protection */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              6. Privacy & Data Protection
            </h2>
            <p>
              Our use of your personal data is explained in our{" "}
              <a
                href="/privacy-policy"
                className="text-[#E1912F] hover:underline"
              >
                Privacy Policy
              </a>
              , which forms part of these terms.
            </p>
          </section>

          {/* 7. Changes to These Terms */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              7. Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Please check this page
              periodically for the latest version.
            </p>
          </section>

          {/* 8. Governing Law */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              8. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2
              className="text-2xl font-semibold mb-3 font-serif"
              style={{ color: brandOrange }}
            >
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Use, please contact us:
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
              <p>
                Address: 3 Bryta Works, Little London Rd, Woodseats, Sheffield S8 0UJ, UK
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
