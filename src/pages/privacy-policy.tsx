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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
          </PolicyCard>

          <PolicyCard>
            <p className="text-base leading-relaxed text-neutral-700">
              <span className="font-semibold text-neutral-900">
                This Privacy Policy applies to the Palnesto.biz
              </span>
              <br />
              <br />
              Palnesto.biz recognises the importance of maintaining your privacy.
              We value your privacy and appreciate your trust in us. This Policy
              describes how we treat user information we collect on{" "}
              <a
                href="http://www.palnesto.biz"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                http://www.palnesto.biz
              </a>{" "}
              and other offline sources. This Privacy Policy applies to current
              and former visitors to our website and to our online customers. By
              visiting and/or using our website, you agree to this Privacy
              Policy.
            </p>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              Palnesto.biz is a property of Palnesto Business Solutions Private
              limited, an Indian Company registered under the Companies Act, 2013
              having its registered office at BLOCK B 203, PATELS GREEN PARK,
              YAPRAL, SECUNDERABAD, Medchal – Malkajgiri, Telangana, 500087
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Information we collect
            </h2>
            <ul className="mt-6 list-disc space-y-4 pl-5 text-base leading-relaxed text-neutral-700 marker:text-neutral-400">
              <li>
                <span className="font-semibold text-neutral-900">
                  Contact information.
                </span>{" "}
                We might collect your name, email, mobile number, phone number,
                street, city, state, pincode, country and ip address.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">
                  Payment and billing information.
                </span>{" "}
                We might collect your billing name, billing address and payment
                method when you buy a ticket. We NEVER collect your credit card
                number or credit card expiry date or other details pertaining to
                your credit card on our website. Credit card information will be
                obtained and processed by our online payment partner CC Avenue.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">
                  Information you post.
                </span>{" "}
                We collect information you post in a public space on our website
                or on a third-party social media site belonging to Palnesto.biz.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">
                  Demographic information.
                </span>{" "}
                We may collect demographic information about you, events you
                like, events you intend to participate in, tickets you buy, or
                any other information provided by you during the use of our
                website. We might collect this as a part of a survey also.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">
                  Other information.
                </span>{" "}
                If you use our website, we may collect information about your IP
                address and the browser you’re using. We might look at what site
                you came from, duration of time spent on our website, pages
                accessed or what site you visit when you leave us. We might also
                collect the type of mobile device you are using, or the version
                of the operating system your computer or device is running.
              </li>
            </ul>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              We collect information in different ways.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
              <p>
                <span className="font-semibold text-neutral-900">
                  We collect information directly from you.
                </span>{" "}
                We collect information directly from you when you register for an
                event or buy tickets. We also collect information if you post a
                comment on our websites or ask us a question through phone or
                email.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">
                  We collect information from you passively.
                </span>{" "}
                We use tracking tools like Google Analytics, Google Webmaster,
                browser cookies and web beacons for collecting information about
                your usage of our website.
              </p>
              <p>
                <span className="font-semibold text-neutral-900">
                  We get information about you from third parties.
                </span>{" "}
                For example, if you use an integrated social media feature on our
                websites. The third-party social media site will give us certain
                information about you. This could include your name and email
                address.
              </p>
            </div>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Email Opt-Out
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              You can opt out of receiving our marketing emails. To stop receiving
              our promotional emails, please email{" "}
              <a
                href="mailto:unsubscriber@palnesto.biz"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                unsubscriber@palnesto.biz
              </a>
              . It may take about ten days to process your request. Even if you
              opt out of getting marketing messages, we will still be sending you
              transactional messages through email and SMS about your purchases.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Third party sites
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              If you click on one of the links to third party websites, you may
              be taken to websites we do not control. This policy does not apply
              to the privacy practices of those websites. Read the privacy policy
              of other websites carefully. We are not responsible for these third
              party sites.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Grievance Officer
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              In accordance with Information Technology Act 2000 and rules made
              there under, the name and contact details of the Grievance Officer
              are provided below:
            </p>
            <address className="mt-6 not-italic text-base leading-relaxed text-neutral-700">
              <p className="font-semibold text-neutral-900">Mr.SAI SRIVATSAVA</p>
              <p className="mt-2">B203, Patel’s greenpark, Yapral</p>
              <p>Hyderabad- 500087</p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+918886911466"
                  className="font-medium text-neutral-900 underline underline-offset-2"
                >
                  +91-8886911466
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@palnesto.biz"
                  className="font-medium text-neutral-900 underline underline-offset-2"
                >
                  info@palnesto.biz
                </a>
              </p>
            </address>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              If you have any questions about this Policy or other privacy
              concerns, you can also email us at{" "}
              <a
                href="mailto:jyoti@palnesto.biz"
                className="font-medium text-neutral-900 underline underline-offset-2"
              >
                jyoti@palnesto.biz
              </a>
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Updates to this policy
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              This Privacy Policy was last updated on 12.12.2014. From time to
              time we may change our privacy practices. We will notify you of any
              material changes to this policy as required by law. We will also
              post an updated copy on our website. Please check our site
              periodically for updates.
            </p>
          </PolicyCard>

          <PolicyCard>
            <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
              Jurisdiction
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700">
              If you choose to visit the website, your visit and any dispute over
              privacy is subject to this Policy and the website’s terms of use.
              In addition to the foregoing, any disputes arising under this
              Policy shall be governed by the laws of India.
            </p>
          </PolicyCard>
        </div>
      </div>
    </div>
  );
}
