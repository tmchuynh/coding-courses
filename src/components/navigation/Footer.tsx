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

        <div className="md:flex md:justify-between md:items-center mt-8 pt-8 border-white/10 border-t">
          <p className="md:order-1 mt-8 md:mt-0 text-sm/6">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
