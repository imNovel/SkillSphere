import { StarFill } from "@gravity-ui/icons";
import Image from "next/image";
import React from "react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://skill-sphere-self.vercel.app/data.json");
  const data = await res.json();
  const course = data.find((course) => String(course.id) === String(id));

  return (
    <div>
      <div
        className="px-6 py-8 text-white"
        style={{ background: "linear-gradient(to bottom, #818cf8, #6d28d9)" }}
      >
        <h1 className="text-5xl font-bold mt-5">{course.title}</h1>
        <div className="flex items-center gap-2">
          <StarFill className="text-yellow-400" />
          <span className="text-lg font-semibold">{course.rating}</span>
        </div>
        <p className="text-white/80 text-lg mt-2">{course.description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6 container mx-auto">
        {/* Instructor Info */}
        <div>
          <div className="md:w-1/2 border border-gray-100 md:ml-50 mt-50 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center text-xl font-bold text-violet-700 shrink-0">
              {course.instructor
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                {course.instructor}
              </h2>
              <p className="text-sm text-gray-500">{course.role}</p>
            </div>
          </div>
        </div>
        {/* Curriculum */}

        <div className="md:w-1/2 border border-gray-100 rounded-2xl p-5">
          <Image
            src={course.image}
            alt={course.title}
            width={500}
            height={500}
            className="rounded-t-2xl"
          />
          <p className="text-gray-600 text-2xl my-2">${course.price}</p>
          <button className="md:w-full bg-violet-600 text-white py-2 px-4 rounded-lg hover:bg-violet-700">
            Enroll Now
          </button>
          <h2 className="text-lg font-bold text-gray-900 my-2">Curriculum</h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.curriculum.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
