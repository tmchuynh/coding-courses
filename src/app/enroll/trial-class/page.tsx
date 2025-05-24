"use client";

import { curriculumCourses } from "@/lib/constants/courses/curriculumCourses";
import {
  getAgeRangeByGrade,
  getAllowedTrialDaysByGrade,
  getCurriculumTitleByGrade,
} from "@/lib/utils/get";
import { useMemo, useState } from "react";

export default function FreeTrial() {
  const [form, setForm] = useState({
    parentFirst: "",
    parentLast: "",
    parentEmail: "",
    parentPhone: "",
    studentFirst: "",
    studentLast: "",
    studentGrade: "",
    studentAge: "",
    programs: [] as string[],
    trialDate: "",
    trialTime: "",
  });

  // Dynamically get programs based on grade
  const availablePrograms = useMemo(() => {
    const group = getCurriculumTitleByGrade(form.studentGrade);
    const curriculum = curriculumCourses.find((c) => c.title === group);
    if (!curriculum) return [];
    return curriculum.courses.map((course) => course.courseName);
  }, [form.studentGrade]);

  const ageRange = useMemo(
    () => getAgeRangeByGrade(form.studentGrade),
    [form.studentGrade]
  );

  const allowedTrialDays = useMemo(
    () => getAllowedTrialDaysByGrade(form.studentGrade),
    [form.studentGrade]
  );

  // Helper to check if selected date is allowed (Tue, Wed, Fri)
  const isAllowedTrialDay = useMemo(() => {
    if (!form.trialDate) return false;
    const date = new Date(form.trialDate);
    return allowedTrialDays.includes(date.getDay());
  }, [form.trialDate, allowedTrialDays]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setForm((prev) => {
        let newPrograms = prev.programs;
        if (checked) {
          if (prev.programs.length < 5) {
            newPrograms = [...prev.programs, value];
          }
        } else {
          newPrograms = prev.programs.filter((p) => p !== value);
        }
        return { ...prev, programs: newPrograms };
      });
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="mx-auto pt-8 md:pt-12 lg:pt-24 w-10/12 md:w-11/12">
      <h1>Free Trial</h1>
      <h5>Experience the Joy of Coding with a Free Trial Class!</h5>
      <p>
        Not sure if coding is right for your child? Sign up for a free trial
        class and experience our engaging teaching style firsthand. No
        commitment required. Discover the joy of learning to code!
      </p>
      <div className="mt-8">
        <h2>How to Get a Free Trial</h2>
        <ul className="space-y-2 mt-4 list-disc list-inside">
          <li>
            <strong>Age Requirement:</strong> The student must be between 7 and
            16 years old.
          </li>
          <li>
            <strong>First-Time Students Only:</strong> The free trial is
            available only for students who have not previously attended any of
            our classes.
          </li>
          <li>
            <strong>Registration Form:</strong> Complete the online registration
            form with accurate parent/guardian contact information.
          </li>
          <li>
            <strong>Parental Consent:</strong> A parent or legal guardian must
            provide consent for the student to participate.
          </li>
          <li>
            <strong>Device & Internet:</strong> The student must have access to
            a computer or tablet with internet connectivity for the online
            class.
          </li>
          <li>
            <strong>Scheduling:</strong> Choose an available trial class slot
            that fits your schedule.
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="mb-4 font-semibold text-lg">Free Trial Registration</h2>
        <form className="space-y-4">
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label className="block font-medium text-sm">
                Parent's First Name
              </label>
              <input
                type="text"
                name="parentFirst"
                value={form.parentFirst}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm">
                Parent's Last Name
              </label>
              <input
                type="text"
                name="parentLast"
                value={form.parentLast}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label className="block font-medium text-sm">
                Parent's Email
              </label>
              <input
                type="email"
                name="parentEmail"
                value={form.parentEmail}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm">
                Parent's Phone
              </label>
              <input
                type="tel"
                name="parentPhone"
                value={form.parentPhone}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label className="block font-medium text-sm">
                Student's First Name
              </label>
              <input
                type="text"
                name="studentFirst"
                value={form.studentFirst}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm">
                Student's Last Name
              </label>
              <input
                type="text"
                name="studentLast"
                value={form.studentLast}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label className="block font-medium text-sm">
                Student's Grade
              </label>
              <input
                type="text"
                name="studentGrade"
                value={form.studentGrade}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-sm">Student's Age</label>
              <input
                type="number"
                name="studentAge"
                value={form.studentAge}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                min={ageRange.min}
                max={ageRange.max}
                required
              />
              <span className="text-gray-500 text-xs">
                Age range for this grade: {ageRange.min}–{ageRange.max}
              </span>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">
              Program(s) Interested In (max 5)
            </label>
            <div className="gap-2 grid grid-cols-2">
              {availablePrograms.length === 0 ? (
                <span className="col-span-2 text-gray-500 text-sm">
                  Enter student's grade to see available programs.
                </span>
              ) : (
                availablePrograms.map((prog) => (
                  <label key={prog} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="programs"
                      value={prog}
                      checked={form.programs.includes(prog)}
                      onChange={handleChange}
                      disabled={
                        !form.programs.includes(prog) &&
                        form.programs.length >= 5
                      }
                    />
                    <span>{prog}</span>
                  </label>
                ))
              )}
            </div>
          </div>
          <div className="gap-4 grid grid-cols-2">
            <div>
              <label className="block font-medium text-sm">Trial Date</label>
              <input
                type="date"
                name="trialDate"
                value={form.trialDate}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                required
              />
              <span className="text-gray-500 text-xs">
                {(() => {
                  const group = getCurriculumTitleByGrade(form.studentGrade);
                  switch (group) {
                    case "Grades K to 2":
                      return "Only Mondays and Tuesdays are available.";
                    case "Grades 3 to 5":
                      return "Only Wednesdays and Thursdays are available.";
                    case "Grades 6 to 8":
                      return "Only Fridays and Mondays are available.";
                    case "Grades 9 to 12":
                      return "Only Mondays, Tuesdays, and Thursdays are available.";
                    default:
                      return "Select grade to see available days.";
                  }
                })()}
              </span>
            </div>
            <div>
              <label className="block font-medium text-sm">Trial Time</label>
              <input
                type="time"
                name="trialTime"
                value={form.trialTime}
                onChange={handleChange}
                className="px-2 py-1 border rounded w-full"
                min="10:00"
                max="15:00"
                required
                disabled={!isAllowedTrialDay}
              />
              {!isAllowedTrialDay && form.trialDate && (
                <span className="text-red-500 text-xs">
                  Please select an allowed day for your grade group.
                </span>
              )}
              {isAllowedTrialDay && (
                <span className="text-gray-500 text-xs">
                  Time must be between 10:00am and 3:00pm.
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 mt-4 px-4 py-2 rounded text-white"
            disabled={form.programs.length === 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
