"use client";

import { navigation } from "@/lib/constants/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 absolute inset-x-0">
      <nav
        aria-label="Global"
        className="flex justify-between items-center lg:px-8 p-6"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="w-auto h-8"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="lg:flex lg:gap-x-12 hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-semibold text-gray-900 text-sm/6"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end hidden">
          <a href="#" className="font-semibold text-gray-900 text-sm/6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="z-50 fixed inset-0" />
        <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
          <div className="flex justify-between items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 p-2.5 rounded-md text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7 text-gray-900"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
