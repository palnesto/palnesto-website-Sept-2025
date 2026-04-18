import logo from "../components/assets/logo.png";

function PolicyCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/[0.04] md:px-10 md:py-10 ${className}`}
    >
      {children}
    </section>
  );
}

const COMPANY_LEGAL =
  "Palnesto Business Solutions Private Limited, a company incorporated under the Companies Act, 2013, with its registered office at 929, 2nd floor, Sudheekshas, Sainikpuri, Secunderabad, Telangana, 500087, India";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] inter-s text-neutral-800">
      <div className="mx-auto w-full max-w-[920px] px-4 py-8 pb-16 md:px-6 md:py-12">
        <a
          href="/"
          className="mb-6 inline-block text-sm font-medium text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
        >
          ← Back to home
        </a>

        <div className="flex flex-col gap-6 md:gap-8">
          <PolicyCard className="text-center">
            <img
              src={logo}
              alt="Palnesto"
              className="mx-auto h-12 w-auto object-contain md:h-14"
            />
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-3 text-sm text-neutral-600 md:text-base">
              Palnesto Business Solutions Private Limited
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Agreement to terms
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              These Terms and Conditions (“<span className="font-semibold text-neutral-900">Terms</span>”) govern your access to and use of the website and online presence at{" "}
              <a
                href="http://www.palnesto.biz"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                http://www.palnesto.biz
              </a>{" "}
              and related services (collectively, the “<span className="font-semibold text-neutral-900">Services</span>”), provided by{" "}
              <span className="font-semibold text-neutral-900">
                {COMPANY_LEGAL}
              </span>{" "}
              (“<span className="font-semibold text-neutral-900">Palnesto</span>”, “<span className="font-semibold text-neutral-900">we</span>”, “<span className="font-semibold text-neutral-900">us</span>”, or “<span className="font-semibold text-neutral-900">our</span>”).
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              By accessing or using the Services, you agree to be bound by these Terms and our{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                Privacy Policy
              </a>
              . If you do not agree, you must not use the Services.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Eligibility and acceptable use
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              You represent that you are legally able to enter into a binding agreement under applicable law. You agree to use the Services only for lawful purposes and in a way that does not infringe the rights of others or restrict or inhibit anyone else’s use of the Services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              You must not misuse the Services, including by attempting to gain unauthorised access to our systems, introducing malware, scraping or harvesting data in violation of these Terms or applicable law, or using the Services to transmit unsolicited bulk communications without our prior written consent.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Intellectual property
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              Unless otherwise stated, Palnesto and/or its licensors own all intellectual property rights in the Services, including branding, logos, text, graphics, videos, software, and layout. Those rights are reserved. No licence is granted except the limited, non-exclusive, non-transferable right to access and view the Services for your personal or internal business use, in line with these Terms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              You may not copy, modify, distribute, sell, lease, or create derivative works from our materials without our prior written permission, except where mandatory law allows.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Information and third-party links
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              Content on the Services is provided for general information. We aim to keep information accurate and up to date but do not warrant that any content is complete, current, or free from error. The Services may contain links to third-party websites or services. We do not control and are not responsible for third-party content or practices; your use of third-party sites is at your own risk and subject to their terms and policies.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Disclaimers
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              The Services are provided on an “as is” and “as available” basis, to the fullest extent permitted by law. We disclaim all warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, secure, or error-free.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Limitation of liability
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              To the fullest extent permitted by applicable law, Palnesto and its directors, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, goodwill, or business opportunities, arising out of or in connection with your use of or inability to use the Services.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-700">
              To the extent any liability cannot be excluded, our aggregate liability arising out of or relating to the Services shall not exceed the greater of (a) the amount you paid us for the specific service giving rise to the claim in the three (3) months preceding the claim, or (b) Indian Rupees five thousand (INR 5,000), unless mandatory law requires otherwise.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Indemnity
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              You agree to indemnify, defend, and hold harmless Palnesto and its affiliates, officers, directors, and employees from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of your use of the Services, your violation of these Terms, or your violation of any rights of a third party.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Suspension and changes
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              We may suspend or discontinue any part of the Services, or update features, at any time. We may revise these Terms from time to time. The updated Terms will be posted on this page with a revised “Last updated” date where applicable. Your continued use of the Services after changes become effective constitutes acceptance of the revised Terms, to the extent permitted by law.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Governing law and jurisdiction
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              These Terms shall be governed by and construed in accordance with the laws of India. Subject to applicable mandatory provisions, courts at Hyderabad, Telangana, India shall have exclusive jurisdiction over disputes arising out of or relating to these Terms or the Services.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Contact
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:info@palnesto.biz"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                info@palnesto.biz
              </a>{" "}
              or{" "}
              <a
                href="tel:+918886911466"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                +91-8886911466
              </a>
              .
            </p>
            <p className="mt-4 text-sm text-neutral-600">
              Last updated: 18 April 2026
            </p>
          </PolicyCard>
        </div>
      </div>
    </div>
  );
}
