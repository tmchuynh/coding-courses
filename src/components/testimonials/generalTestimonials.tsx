import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GeneralTestimonials() {
  return (
    <div className="relative mt-32 sm:mt-56 sm:pt-32 isolate">
      <svg
        aria-hidden="true"
        className="sm:block -z-10 absolute inset-0 hidden size-full mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={0}
            id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={0} className="overflow-visible fill-gray-50">
          <path
            d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="relative">
        <div
          aria-hidden="true"
          className="top-1/2 -z-10 absolute inset-x-0 opacity-30 blur-3xl transform-gpu -translate-y-1/2 overflow-hidden"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="bg-linear-to-tr from-[#ff80b5] to-[#9089fc] ml-[max(50%,38rem)] w-328.25 aspect-1313/771"
          />
        </div>
        <div
          aria-hidden="true"
          className="top-0 -z-10 absolute inset-x-0 flex xl:justify-end opacity-25 blur-3xl pt-8 transform-gpu overflow-hidden"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="flex-none bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] ml-[-22rem] xl:ml-0 w-328.25 origin-top-right aspect-1313/771 rotate-30"
          />
        </div>
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="font-semibold text-base/7 text-indigo-600">
              Testimonials
            </h2>
            <p className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl sm:text-balance tracking-tight">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-rows-1 xl:grid-flow-col mx-auto xl:mx-0 mt-16 sm:mt-20 max-w-2xl xl:max-w-none text-gray-900 text-sm/6">
            <figure className="sm:block hidden col-span-2 xl:col-start-2 xl:row-end-1 sm:bg-white sm:shadow-lg sm:rounded-2xl sm:ring-1 sm:ring-gray-900/5">
              <blockquote className="p-12 font-semibold text-gray-900 text-xl/8 tracking-tight">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 px-6 py-4 border-gray-900/10 border-t">
                <Image
                  alt=""
                  src={featuredTestimonial.author.imageUrl}
                  className="flex-none bg-gray-50 rounded-full size-10"
                  width={40}
                  height={40}
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <Image
                  alt=""
                  src={featuredTestimonial.author.logoUrl}
                  className="flex-none w-auto h-10"
                  width={40}
                  height={40}
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:space-y-0 xl:contents"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={cn(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="bg-white shadow-lg p-6 rounded-2xl ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center gap-x-4 mt-6">
                          <Image
                            alt=""
                            src={testimonial.author.imageUrl}
                            className="bg-gray-50 rounded-full size-10"
                            width={40}
                            height={40}
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      // More testimonials...
    ],
  ],
];

const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl:
      "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
  },
};
