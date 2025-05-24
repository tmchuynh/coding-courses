"use client";
import { summerCourses } from "@/lib/constants/courses/summerCourses";
import { pricingPlans } from "@/lib/constants/pricingPlans";
import { useState } from "react";

const TAX_RATE = 0.085;

function getAddOns() {
  const plan = pricingPlans.find((p) => p.planType === "Optional Add-Ons");
  return plan?.items || [];
}

export default function SummerCampsPage() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<any[]>([]);

  function handleAddOnToggle(addOn: any) {
    if (selectedAddOns.includes(addOn)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a !== addOn));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  }

  let subtotal = 0;
  if (selectedCourse) {
    subtotal += selectedCourse.price || 0;
  }
  selectedAddOns.forEach((addOn) => {
    if (typeof addOn.price === "number") subtotal += addOn.price;
    else if (typeof addOn.price === "string" && addOn.price.startsWith("$")) {
      const match = addOn.price.match(/\$([\d]+)/);
      if (match) subtotal += parseInt(match[1], 10);
    }
  });
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Summer Camps Enrollment</h1>
      <h5>Unleash your child's creativity and coding skills this summer!</h5>
      <p className="mb-6">
        Our Summer Camps are designed to provide an immersive and engaging
        experience for kids of all ages. With a focus on hands-on learning, our
        camps cover a variety of topics, from game development to robotics,
        ensuring that every child finds their passion in the world of
        technology.
      </p>
      <div className="gap-5 grid lg:grid-cols-5 mt-8 w-full">
        <section className="lg:col-span-3 w-full">
          {/* Course Selection */}
          <div className="mb-8">
            <h2 className="mb-2 font-semibold">
              1. Choose a Summer Camp Course
            </h2>
            {summerCourses.map((category) => (
              <div key={category.title} className="mb-4">
                <h3 className="font-semibold">{category.title}</h3>
                <div className="gap-2 grid grid-cols-1 mt-2">
                  {category.courses.map((course) => (
                    <label
                      key={course.courseName}
                      className={`border rounded p-3 cursor-pointer ${
                        selectedCourse?.courseName === course.courseName
                          ? "border-blue-500 bg-blue-50"
                          : ""
                      }`}
                    >
                      <div className="inline-flex justify-between items-center w-full">
                        <div>
                          <input
                            type="radio"
                            name="summerCourse"
                            className="mr-2"
                            checked={
                              selectedCourse?.courseName === course.courseName
                            }
                            onChange={() => setSelectedCourse(course)}
                          />
                          <span className="font-semibold">
                            {course.courseName}{" "}
                          </span>
                        </div>
                        <span>(${selectedCourse.price})</span>
                      </div>
                      <span className="block text-gray-600 text-sm">
                        {course.subtitle}
                      </span>
                      <span className="block text-gray-500 text-xs">
                        {course.duration} | {course.format}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Optional Add-Ons */}
        </section>
        <div className="lg:col-span-2">
          {/* Course Details */}
          {selectedCourse && (
            <div>
              <div className="font-bold text-lg">
                {selectedCourse.courseName} (${selectedCourse.price})
              </div>
              <div className="mb-2 text-gray-700">
                {selectedCourse.subtitle}
              </div>
              <div className="mb-2">{selectedCourse.description}</div>
              <div className="mb-2">
                <b>Duration:</b> {selectedCourse.duration}
              </div>
              <div className="mb-2">
                <b>Format:</b> {selectedCourse.format}
              </div>
              {selectedCourse.keyProjects?.length > 0 && (
                <div className="mb-2">
                  <b>Key Projects:</b>
                  <ul className="ml-6 list-disc">
                    {selectedCourse.keyProjects.map(
                      (proj: string, idx: number) => (
                        <li key={idx}>{proj}</li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {selectedCourse.outcomes?.length > 0 && (
                <div className="mb-2">
                  <b>Outcomes:</b>
                  <ul className="ml-6 list-disc">
                    {selectedCourse.outcomes.map((out: string, idx: number) => (
                      <li key={idx}>{out}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col lg:flex-col-reverse mx-auto mt-6 lg:mt-0 pt-4 lg:pt-0 w-full h-fit">
            {selectedCourse && (
              <div className="lg:mt-2 lg:pt-4 lg:border-t">
                <h2 className="mb-2 font-semibold">Summary</h2>
                <ul className="mb-4 text-sm">
                  <li>
                    Course: <b>{selectedCourse.courseName}</b>
                  </li>
                  {selectedAddOns.length > 0 && (
                    <li>
                      Add-Ons:{" "}
                      <b>{selectedAddOns.map((a) => a.name).join(", ")}</b>
                    </li>
                  )}
                </ul>
                <div className="flex flex-col gap-1 text-sm">
                  <div>
                    Subtotal:{" "}
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    Tax (8.5%):{" "}
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="text-lg">
                    Total:{" "}
                    <span className="font-bold">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-12 lg:mt-0 text-sm">
              <p>
                We believe every child deserves access to quality coding
                education. Families who qualify for need-based assistance can
                apply for substantial tuition discounts to ensure affordability.
                This program is designed to support families facing financial
                challenges while fostering a love for technology and learning.
              </p>
              <p>
                Contact us if you want help seeing if you qualify for a
                scholarship or discount.
              </p>
            </div>
          </div>

          {selectedCourse && (
            <div className="my-4">
              <h2 className="mb-2 font-semibold">Add-Ons</h2>
              <div className="gap-2 grid grid-cols-1">
                {getAddOns().map((addOn) => (
                  <label
                    key={addOn.name}
                    className={`border rounded p-2 cursor-pointer flex items-start gap-2 ${
                      selectedAddOns.includes(addOn)
                        ? "border-blue-500 bg-blue-50"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="mt-2"
                      checked={selectedAddOns.includes(addOn)}
                      onChange={() => handleAddOnToggle(addOn)}
                    />
                    <div>
                      <p className="font-semibold">{addOn.name}</p>
                      <span className="block text-muted text-xs">
                        {addOn.price}
                      </span>
                      <span className="block text-sm">{addOn.description}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
