"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  features,
  primaryFeatures,
  secondaryFeatures,
} from "@/data/homePage/features";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="py-24 sm:py-32 overflow-hidde">
        <div className="mx-auto px-6 lg:px-8 max-w-8xl">
          <div className="gap-x-8 gap-y-16 sm:gap-y-20 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4 w-7xl">
              <div className="lg:max-w-lg">
                <div className="flex">
                  <Badge>
                    <span className="font-semibold">We’re hiring</span>
                    <span aria-hidden="true" className="h-4 w-px /10" />
                    <a
                      href="/about/careers"
                      className="flex gap-x-1 items-center"
                    >
                      See open positions
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="-mr-2 size-5"
                      />
                    </a>
                  </Badge>
                </div>
                <h1 className="mt-10 font-semibold text-5xl text-pretty sm:text-7xl tracking-tight">
                  Learn to Code. Shape Your Future.
                </h1>
                <p className="mt-8 font-medium text-lg text-pretty sm:text-xl/8">
                  Empower your child with essential digital skills through our
                  expert-led coding classes. From elementary school to high
                  school, our age-appropriate curriculum builds confidence,
                  creativity, and technical skills that last a lifetime.
                </p>
                <dl className="space-y-8 mt-10 max-w-xl lg:max-w-none text-base/7">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 text-secondary size-5"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                alt="Coding Courses Screenshot"
                src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww"
                width={2432}
                height={1442}
                className="shadow-xl ring-1 rounded-xl fill"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
        {/* Feature section */}
        <div className="gap-x-8 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0">
          <div className="">
            <h2 className="font-semibold text-3xl text-balance sm:text-4xl tracking-tight">
              Age-Appropriate Curriculum for Every Student
            </h2>
            <p className="mt-6 text-lg/8">
              Our comprehensive programs are carefully designed to match each
              age group's cognitive development and learning pace. From playful
              introduction to coding for young learners to advanced career
              preparation for teens, we provide the right challenge at the right
              time.
            </p>
            <div className="flex gap-x-6 items-center mt-10">
              <Button onClick={() => router.push("/programs/curriculum")}>
                View Curriculum
              </Button>
            </div>
          </div>

          <div className="">
            <dl className="space-y-8 max-w-xl lg:max-w-none text-base/7">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline-block font-semibold underline underline-offset-4 decoration-2 decoration-tertiary">
                    {feature.name}
                  </dt>
                  <br />
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-12 md:mt-20 lg:mt-32 mx-auto">
          <div className="mx-auto">
            <h2 className="font-semibold text-3xl text-balance sm:text-4xl tracking-tight">
              Find Your Passion in Programming
            </h2>
            <p className="max-w-4xl">
              From building games to securing networks, our diverse course
              offerings cover the full spectrum of computer science disciplines.
              Discover which path ignites your creativity and aligns with your
              career goals.
            </p>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-12 mx-auto">
            <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex gap-x-3 items-center font-semibold text-base/7">
                    <feature.icon
                      aria-hidden="true"
                      className="flex-none text-tertiary size-5"
                    />
                    {feature.name}
                  </dt>
                  <dd className="flex flex-auto flex-col mt-4 text-base/7">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
