import { footerNavigation } from "@/lib/constants/navigation";

export default function Footer() {
  return (
    <footer className="mt-20 pt-12 border-t">
      <div className="mx-auto px-6 lg:px-8 pb-8 max-w-7xl">
        <div className="xl:gap-8 xl:grid xl:grid-cols-3">
          <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm/6">Solutions</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-sm/6">Support</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:gap-8 md:grid md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-sm/6">Company</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="font-semibold text-sm/6">Legal</h3>
                <ul role="list" className="space-y-4 mt-6">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between lg:items-center mt-16 sm:mt-20 lg:mt-24 pt-8 border-white/10 border-t">
          <div>
            <h3 className="font-semibold text-sm/6">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-gray-300 text-sm/6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="sm:flex mt-6 lg:mt-0 sm:max-w-md">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="bg-white/5 px-3 py-1.5 rounded-md w-full sm:w-56 min-w-0 text-base sm:text-sm/6 placeholder:text-gray-500 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
              <button
                type="submit"
                className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 shadow-xs px-3 py-2 rounded-md w-full font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="md:flex md:justify-between md:items-center mt-8 pt-8 border-white/10 border-t">
          <p className="md:order-1 mt-8 md:mt-0 text-sm/6">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
