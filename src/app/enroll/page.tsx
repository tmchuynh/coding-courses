"use client";
import { learningRoadmap } from "@/lib/constants/courses/learningRoadmap";
import { yearRoundSchedule } from "@/lib/constants/courses/yearRoundSchedule";
import { pricingPlans } from "@/lib/constants/pricingPlans";
import { useState } from "react";

const TAX_RATE = 0.085;

const PLAN_TYPES = [
  "Single Course Enrollment",
  "Full-Year Learning Path",
  "Monthly Memberships",
] as const;

type PlanType = (typeof PLAN_TYPES)[number];

function getGradeGroups() {
  return [
    { label: "K–2", value: "Grades K–2" },
    { label: "3–5", value: "Grades 3–5" },
    { label: "6–8", value: "Grades 6–8" },
    { label: "9–12", value: "Grades 9-12" },
  ];
}

function getPlanPricing(planType: string, grade: string) {
  if (planType === "Single Course Enrollment") {
    const plan = pricingPlans.find((p) => p.planType === planType);
    if (!plan) return null;
    const group = plan.pricing?.find((g: any) =>
      grade.includes(g.ageGroup.replace("Grades ", ""))
    );
    return group
      ? { online: group.priceOnline, inPerson: group.priceInPerson }
      : null;
  }
  if (planType === "Full-Year Learning Path") {
    const plan = pricingPlans.find((p) => p.planType === planType);
    if (!plan) return null;
    const group = plan.plans?.find((g: any) =>
      grade.includes(g.name.split(" ")[0])
    );
    return group
      ? {
          online: group.annualPriceOnline,
          inPerson: group.annualPriceInPersonHybrid,
        }
      : null;
  }
  if (planType === "Monthly Memberships") {
    const plan = pricingPlans.find((p) => p.planType === planType);
    return plan?.tiers || [];
  }
  return null;
}

function getAddOns() {
  const plan = pricingPlans.find((p) => p.planType === "Optional Add-Ons");
  return plan?.items || [];
}

function getCoursesForGrade(grade: string) {
  const group = yearRoundSchedule.find((g) => g.ageGroup === grade);
  return group ? group.schedules : [];
}

function getRoadmapsForGrade(grade: string) {
  const group = learningRoadmap.find((g) => {
    const gradeGroup = grade.replace("Grades ", ""); // Normalize grade for comparison
    return g.gradeGroup.replace("–", "-") === gradeGroup.replace("–", "-");
  });
  return group ? group.roadmaps : [];
}

function getMonthlyPlanTiers() {
  const plan = pricingPlans.find((p) => p.planType === "Monthly Memberships");
  return plan?.tiers || [];
}

export default function EnrollPage() {
  const [planType, setPlanType] = useState<PlanType | "">("");
  const [grade, setGrade] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState<any>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<any[]>([]);
  const [monthlyTier, setMonthlyTier] = useState<any>(null);

  // Handle course selection for monthly (max 3)
  function handleMonthlyCourseSelect(course: any) {
    if (selectedCourses.some((c) => c.courseName === course.courseName)) {
      setSelectedCourses(
        selectedCourses.filter((c) => c.courseName !== course.courseName)
      );
    } else if (selectedCourses.length < 3) {
      setSelectedCourses([...selectedCourses, course]);
    }
  }

  // Add-on selection
  function handleAddOnToggle(addOn: any) {
    if (selectedAddOns.includes(addOn)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a !== addOn));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  }

  // Pricing calculation
  let subtotal = 0;
  if (planType === "Single Course Enrollment" && selectedCourse) {
    // Use the selectedCourse.price field
    subtotal += selectedCourse.price?.online || 0;
  }
  if (planType === "Full-Year Learning Path" && selectedRoadmap) {
    // Use the selectedRoadmap.price field
    subtotal += selectedRoadmap.price?.online || 0;
  }
  if (planType === "Monthly Memberships" && monthlyTier) {
    subtotal += monthlyTier.pricePerMonth;
  }
  selectedAddOns.forEach((addOn) => {
    // Parse price as number if possible
    if (typeof addOn.price === "number") subtotal += addOn.price;
    else if (typeof addOn.price === "string" && addOn.price.startsWith("$")) {
      // Take the first price if multiple
      const match = addOn.price.match(/\$([\d]+)/);
      if (match) subtotal += parseInt(match[1], 10);
    }
  });
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Enroll Now</h1>
      <h5>Flexible Options for Every Learner</h5>
      <p>
        Our pricing plans are designed to accommodate a variety of learning
        needs, whether you're looking for a single course or a comprehensive
        membership. Explore our options to find the perfect fit for you and your
        family.
      </p>
      <div className="gap-5 grid lg:grid-cols-5 mt-8 w-full">
        <section className="lg:col-span-3 w-full">
          {/* Plan Type Selection */}
          <div className="mb-6">
            <h2 className="mb-2 font-semibold">1. Choose a Plan</h2>
            <div className="flex flex-col gap-2">
              {PLAN_TYPES.map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="planType"
                    value={type}
                    checked={planType === type}
                    onChange={() => {
                      setPlanType(type);
                      setGrade("");
                      setSelectedCourse(null);
                      setSelectedCourses([]);
                      setSelectedRoadmap(null);
                      setMonthlyTier(null);
                    }}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
          {/* Grade Level Selection */}
          {planType && (
            <div className="mb-6">
              <h2 className="mb-2 font-semibold">2. Select Grade Level</h2>
              <div className="flex flex-wrap gap-2">
                {getGradeGroups().map((g) => (
                  <button
                    key={g.value}
                    className={`px-3 py-1 rounded border ${
                      grade === g.value ? "bg-blue-500 text-white" : "bg-white"
                    }`}
                    onClick={() => {
                      setGrade(g.value);
                      setSelectedCourse(null);
                      setSelectedCourses([]);
                      setSelectedRoadmap(null);
                    }}
                  >
                    Grades {g.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Plan Details */}
          {planType && grade && (
            <div className="mb-6">
              {/* Single Course Enrollment */}
              {planType === "Single Course Enrollment" && (
                <>
                  <h2 className="mb-2 font-semibold">3. Choose a Course</h2>
                  <div className="gap-3 grid grid-cols-1 md:grid-cols-2">
                    {getCoursesForGrade(grade).map((course) => (
                      <label
                        key={course.courseName}
                        className={`border rounded p-3 cursor-pointer ${
                          selectedCourse?.courseName === course.courseName
                            ? "border-blue-500 bg-blue-50"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="singleCourse"
                          className="mr-2"
                          checked={
                            selectedCourse?.courseName === course.courseName
                          }
                          onChange={() => setSelectedCourse(course)}
                        />
                        <span className="font-semibold">
                          {course.courseName}
                        </span>
                        <span className="block text-gray-600 text-sm">
                          {course.subtitle}
                        </span>
                      </label>
                    ))}
                  </div>
                  {/* Show available schedule for selected course */}
                  {selectedCourse && (
                    <div className="mt-4">
                      <h3 className="font-semibold">Available Schedules</h3>
                      <ul className="ml-6 list-disc">
                        {selectedCourse.schedule.map((s: any, idx: number) => (
                          <li key={idx}>
                            {s.format} - {s.days.join(", ")}: {s.startTime}–
                            {s.endTime} ({s.durationWeeks} weeks)
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Show roadmap for grade */}
                  <div className="mt-6">
                    <h3 className="font-semibold">
                      Learning Roadmaps for {grade}
                    </h3>
                    <ul className="ml-6 list-disc">
                      {getRoadmapsForGrade(grade).map((roadmap, idx) => (
                        <li key={idx}>
                          <span className="font-semibold">{roadmap.title}</span>
                          : {roadmap.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
              {/* Full-Year Learning Path */}
              {planType === "Full-Year Learning Path" && (
                <>
                  <h2 className="mb-2 font-semibold">3. Choose a Roadmap</h2>
                  <div className="gap-3 grid grid-cols-1">
                    {getRoadmapsForGrade(grade).map((roadmap, idx) => (
                      <label
                        key={roadmap.title}
                        className={`border rounded p-3 cursor-pointer ${
                          selectedRoadmap?.title === roadmap.title
                            ? "border-blue-500 bg-blue-50"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="roadmap"
                          className="mr-2"
                          checked={selectedRoadmap?.title === roadmap.title}
                          onChange={() => setSelectedRoadmap(roadmap)}
                        />
                        <span className="font-semibold">{roadmap.title}</span>
                        <span className="block text-gray-600 text-sm">
                          {roadmap.description}
                        </span>
                      </label>
                    ))}
                  </div>
                  {/* Show available courses for roadmap */}
                  {selectedRoadmap && (
                    <div className="mt-4">
                      <h3 className="font-semibold">Courses in this Roadmap</h3>
                      <ul className="ml-6 list-disc">
                        {selectedRoadmap.courses.map((c: any) => (
                          <li key={c.courseName}>{c.courseName}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
              {/* Monthly Memberships */}
              {planType === "Monthly Memberships" && (
                <>
                  <h2 className="mb-2 font-semibold">
                    3. Choose a Membership Tier
                  </h2>
                  <div className="gap-3 grid md:grid-cols-2 mb-4">
                    {getMonthlyPlanTiers().map((tier) => (
                      <label
                        key={tier.name}
                        className={`border rounded p-3 cursor-pointer ${
                          monthlyTier?.name === tier.name
                            ? "border-blue-500 bg-blue-50"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="monthlyTier"
                          className="mr-2"
                          checked={monthlyTier?.name === tier.name}
                          onChange={() => {
                            setMonthlyTier(tier);
                            setSelectedCourses([]);
                            setSelectedRoadmap(null);
                          }}
                        />
                        <span className="font-semibold">{tier.name}</span>
                        <span className="block text-gray-600 text-sm">
                          ${tier.pricePerMonth}/mo – {tier.includes}
                        </span>
                      </label>
                    ))}
                  </div>
                  {/* Choose up to 3 courses or a roadmap */}
                  {monthlyTier && (
                    <div>
                      <h3 className="mb-2 font-semibold">
                        Choose up to 3 Courses or 1 Roadmap
                      </h3>
                      <div className="mb-2">
                        <span className="font-semibold">Roadmaps:</span>
                        <div className="gap-2 grid grid-cols-1 mt-1">
                          {getRoadmapsForGrade(grade).map((roadmap) => (
                            <label
                              key={roadmap.title}
                              className={`border rounded p-2 cursor-pointer ${
                                selectedRoadmap?.title === roadmap.title
                                  ? "border-blue-500 bg-blue-50"
                                  : ""
                              }`}
                            >
                              <input
                                type="radio"
                                name="monthlyRoadmap"
                                className="mr-2"
                                checked={
                                  selectedRoadmap?.title === roadmap.title
                                }
                                onChange={() => {
                                  setSelectedRoadmap(roadmap);
                                  setSelectedCourses([]);
                                }}
                              />
                              <span className="font-semibold">
                                {roadmap.title}
                              </span>
                              <br />
                              {roadmap.courses.map((course, index) => (
                                <span key={index}>
                                  {course.courseName}
                                  {index < roadmap.courses.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="mb-2">
                        <span className="font-semibold">Courses:</span>
                        <div className="gap-2 grid grid-cols-1 mt-1">
                          {getCoursesForGrade(grade).map((course) => (
                            <label
                              key={course.courseName}
                              className={`border rounded p-2 cursor-pointer ${
                                selectedCourses.some(
                                  (c) => c.courseName === course.courseName
                                )
                                  ? "border-blue-500 bg-blue-50"
                                  : ""
                              }`}
                            >
                              <input
                                type="checkbox"
                                name="monthlyCourses"
                                className="mr-2"
                                checked={selectedCourses.some(
                                  (c) => c.courseName === course.courseName
                                )}
                                disabled={!!selectedRoadmap}
                                onChange={() => {
                                  if (!selectedRoadmap)
                                    handleMonthlyCourseSelect(course);
                                }}
                              />
                              <span className="font-semibold">
                                {course.courseName}
                              </span>
                            </label>
                          ))}
                        </div>
                        <div className="mt-1 text-gray-500 text-xs">
                          {selectedCourses.length}/3 selected
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
          {/* Optional Add-Ons */}
          {planType && (
            <div className="mb-6">
              <h2 className="mb-2 font-semibold">4. Optional Add-Ons</h2>
              <div className="gap-2 grid grid-cols-1">
                {getAddOns().map((addOn) => (
                  <label
                    key={addOn.name}
                    className={`border rounded p-2 cursor-pointer flex items-center gap-2 ${
                      selectedAddOns.includes(addOn)
                        ? "border-blue-500 bg-blue-50"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addOn)}
                      onChange={() => handleAddOnToggle(addOn)}
                    />
                    <div>
                      <span className="font-semibold">{addOn.name}</span>
                      <span className="block text-gray-600 text-sm">
                        {addOn.description}
                      </span>
                      <span className="block text-gray-500 text-xs">
                        {addOn.price}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </section>
        {/* Summary & Total */}
        <div className="flex flex-col lg:flex-col-reverse lg:col-span-2 mx-auto mt-6 lg:mt-0 pt-4 lg:pt-0 w-full h-fit">
          <div className="lg:mt-2 lg:pt-4 lg:border-t">
            <div className="pb-2">
              <h2 className="mb-2 font-semibold">Summary</h2>
              <ul className="mb-2 text-sm">
                {planType && (
                  <li>
                    Plan: <b>{planType}</b>
                  </li>
                )}
                {grade && (
                  <li>
                    Grade: <b>{grade}</b>
                  </li>
                )}
                {planType === "Single Course Enrollment" && selectedCourse && (
                  <li>
                    Course: <b>{selectedCourse.courseName}</b>
                  </li>
                )}
                {planType === "Full-Year Learning Path" && selectedRoadmap && (
                  <li>
                    Roadmap: <b>{selectedRoadmap.title}</b>
                  </li>
                )}
                {planType === "Monthly Memberships" && monthlyTier && (
                  <li>
                    Membership: <b>{monthlyTier.name}</b>
                  </li>
                )}
                {planType === "Monthly Memberships" && selectedRoadmap && (
                  <li>
                    Roadmap: <b>{selectedRoadmap.title}</b>
                  </li>
                )}
                {planType === "Monthly Memberships" &&
                  selectedCourses.length > 0 && (
                    <li>
                      Courses:{" "}
                      <b>
                        {selectedCourses.map((c) => c.courseName).join(", ")}
                      </b>
                    </li>
                  )}
                {selectedAddOns.length > 0 && (
                  <li>
                    Add-Ons:{" "}
                    <b>{selectedAddOns.map((a) => a.name).join(", ")}</b>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex flex-col gap-1 py-3 border-t text-sm">
              <div>
                Subtotal:{" "}
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div>
                Tax (8.5%):{" "}
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="text-lg">
                Total: <span className="font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

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
      </div>
    </div>
  );
}
