import { footerNavigation } from "@/lib/constants/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-20 pt-12 border-t">
      <div className="flex md:flex-row flex-col justify-start items-start gap-6 mx-auto px-6 lg:px-8 pb-8">
        <Image
          src="/images/logo.png"
          alt="Hero Image"
          width={600}
          height={400}
          className="w-1/4 h-auto object-contain"
        />
        <div className="w-full">
          <div className="xl:gap-8 xl:grid xl:grid-cols-2">
            <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
              <div className="md:gap-8 md:grid md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-sm/6">About PixelMind</h3>
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
                  <h3 className="font-semibold text-sm/6">Information</h3>
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
                  <h3 className="font-semibold text-sm/6">Programs</h3>
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
                  <h3 className="font-semibold text-sm/6">Contact Us</h3>
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
              &copy; 2025 PixelMind Labls, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
