"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const primaryFeatures = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ServerIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Push to deploy",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function Home() {
  return (
    <div className="py-10">
      <main>
        {/* Hero section */}
        <div className="relative pt-14 isolate">
          <svg
            aria-hidden="true"
            className="-z-10 absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="lg:flex lg:items-center lg:gap-x-10 mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40 max-w-7xl">
            <div className="lg:flex-auto mx-auto lg:mx-0 max-w-2xl">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 bg-white px-4 py-1 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-sm/6">
                  <span className="font-semibold">We’re hiring</span>
                  <span aria-hidden="true" className="w-px h-4 /10" />
                  <a href="#" className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    See open positions
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="-mr-2 text-gray-400 size-5"
                    />
                  </a>
                </div>
              </div>
              <h1 className="mt-10 font-semibold text-5xl text-pretty sm:text-7xl tracking-tight">
                A better way to ship your projects
              </h1>
              <p className="mt-8 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt.
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="font-semibold text-sm/6">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <svg
                role="img"
                viewBox="0 0 366 729"
                className="drop-shadow-xl mx-auto w-91.5 max-w-full"
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect rx={36} width={316} height={684} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#343E4E"
                />
                <foreignObject
                  width={316}
                  height={684}
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  transform="translate(24 24)"
                >
                  <Image
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/mobile-app-screenshot.png"
                    width={316}
                    height={684}
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 max-w-lg sm:max-w-xl lg:max-w-none">
            <Image
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <Image
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <Image
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <Image
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain"
            />
            <Image
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 sm:mt-56 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative px-6 sm:px-10 xl:px-24 py-20 sm:py-24 lg:py-24 sm:rounded-3xl overflow-hidden isolate">
            <div className="lg:items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:gap-y-0 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="font-semibold text-3xl text-balance sm:text-4xl tracking-tight">
                  Boost your productivity. Start using our app today.
                </h2>
                <p className="mt-6 text-lg/8">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla. Ac
                  euismod vel sit maecenas.
                </p>
              </div>
              <Image
                alt="Product screenshot"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="relative -z-20 lg:row-span-4 shadow-xl rounded-xl ring-1 ring-white/10 lg:w-5xl min-w-full max-w-xl lg:max-w-none"
              />
              <div className="lg:row-start-3 lg:mt-10 lg:pt-10 lg:border-white/10 lg:border-t max-w-xl lg:max-w-md">
                <dl className="space-y-8 max-w-xl lg:max-w-none text-base/7">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="inline-block ml-9 font-semibold">
                        <feature.icon
                          aria-hidden="true"
                          className="top-1 left-1 absolute text-indigo-500 size-5"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 sm:mt-56 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2>Deploy faster</h2>
            <p className="mt-2 font-semibold text-4xl text-pretty sm:text-5xl lg:text-balance tracking-tight">
              Everything you need to deploy your app
            </p>
            <p className="mt-6">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 font-semibold text-base/7">
                    <feature.icon
                      aria-hidden="true"
                      className="flex-none text-primary size-5"
                    />
                    {feature.name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-4 text-base/7">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="font-semibold text-sm/6"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 sm:mt-56 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative bg-card shadow px-6 sm:px-24 py-24 xl:py-32 border border-border sm:rounded-3xl text-card-foreground overflow-hidden isolate">
            <h2 className="mx-auto max-w-3xl text-center">
              Get notified when we’re launching
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg">
              Reprehenderit ad esse et non officia in nulla. Id proident tempor
              incididunt nostrud nulla et culpa.
            </p>
            <form className="flex gap-x-4 mx-auto mt-10 max-w-md">
              <Label htmlFor="email-address" className="sr-only">
                Email address
              </Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="flex-auto bg-white/5 px-3.5 py-2 rounded-md min-w-0 text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-white"
              />
              <button
                type="submit"
                className="flex-none bg-white hover:bg-gray-100 shadow-xs px-3.5 py-2.5 rounded-md font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
