export default function ContactPage() {
  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 py-16">
        <div>
          <h2>Get in touch</h2>
          <p className="mt-4 text-base/7">
            We’re here to help! Whether you're enrolling, have general
            questions, or need technical support, reach out to us. Our team is
            ready to assist you with any inquiries you may have.
          </p>
        </div>
        <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Enrollment</h3>
            <dl className="space-y-1 mt-3 text-sm/6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:enroll@pixelmindlabs.com"
                    className="font-semibold text-indigo-600"
                  >
                    enroll@pixelmindlabs.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+1 (657) 555-1101</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Fri, 9:00 AM – 6:00 PM PT</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>General Questions</h3>
            <dl className="space-y-1 mt-3 text-sm/6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:info@pixelmindlabs.com"
                    className="font-semibold text-indigo-600"
                  >
                    info@pixelmindlabs.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+1 (657) 555-1102</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Fri, 9:00 AM – 6:00 PM PT</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Careers</h3>
            <dl className="space-y-1 mt-3 text-sm/6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:careers@pixelmindlabs.com"
                    className="font-semibold text-indigo-600"
                  >
                    careers@pixelmindlabs.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+1 (657) 555-1106</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Fri, 9:00 AM – 5:00 PM PT</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>IT Support</h3>
            <dl className="space-y-1 mt-3 text-sm/6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:support@pixelmindlabs.com"
                    className="font-semibold text-indigo-600"
                  >
                    support@pixelmindlabs.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+1 (657) 555-1103</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Fri, 8:00 AM – 8:00 PM PT</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Summer Camps</h3>
            <dl className="space-y-1 mt-3 text-sm/6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:summercamps@pixelmindlabs.com"
                    className="font-semibold text-indigo-600"
                  >
                    summercamps@pixelmindlabs.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+1 (657) 555-1104</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Fri, 10:00 AM – 5:00 PM PT</dd>
              </div>
            </dl>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Customer Service</h3>
            <dl className="space-y-1 mt-3 text-sm/6">
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a
                    href="mailto:help@pixelmindlabs.com"
                    className="font-semibold text-indigo-600"
                  >
                    help@pixelmindlabs.com
                  </a>
                </dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd>+1 (657) 555-1105</dd>
              </div>
              <div className="mt-1">
                <dt className="sr-only">Hours</dt>
                <dd>Mon–Sat, 9:00 AM – 6:00 PM PT</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 py-16">
        <div>
          <h2>Locations</h2>
          <p className="mt-4 text-base/7">
            We have multiple locations to serve you better. Whether you need to
            visit us in person or want to reach out, find the contact details
            for each of our campuses.
          </p>
        </div>
        <div className="gap-6 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:col-span-2">
          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Los Angeles</h3>
            <address className="mt-3 text-sm/6 not-italic">
              <p className="py-0">4556 Brendan Ferry</p>
              <p>Los Angeles, CA 90210</p>
            </address>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd className="text-xs">+1 (657) 555-1105</dd>
            </div>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Irvine</h3>
            <address className="mt-3 text-sm/6 not-italic">
              <p className="py-0">215 Technology Drive</p>
              <p>Irvine, CA 92618</p>
            </address>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd className="text-xs">+1 (657) 555-1122</dd>
            </div>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Santa Monica</h3>
            <address className="mt-3 text-sm/6 not-italic">
              <p className="py-0">901 Ocean Park Blvd</p>
              <p>Santa Monica, CA 90405</p>
            </address>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd className="text-xs">+1 (657) 555-1144</dd>
            </div>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Anaheim</h3>
            <address className="mt-3 text-sm/6 not-italic">
              <p className="py-0">1337 Harbor Blvd</p>
              <p>Anaheim, CA 92802</p>
            </address>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd className="text-xs">+1 (657) 555-1166</dd>
            </div>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>Pasadena</h3>
            <address className="mt-3 text-sm/6 not-italic">
              <p className="py-0">22 East Colorado Blvd</p>
              <p>Pasadena, CA 91105</p>
            </address>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd className="text-xs">+1 (657) 555-1188</dd>
            </div>
          </div>

          <div className="bg-card p-10 border border-border rounded-2xl">
            <h3>San Diego</h3>
            <address className="mt-3 text-sm/6 not-italic">
              <p className="py-0">6100 Mission Gorge Rd</p>
              <p>San Diego, CA 92120</p>
            </address>
            <div className="mt-1">
              <dt className="sr-only">Phone number</dt>
              <dd className="text-xs">+1 (657) 555-1199</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
