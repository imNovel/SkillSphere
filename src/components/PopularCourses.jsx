import React from "react";
import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://skill-sphere-self.vercel.app/data.json");
  const data = await res.json();
  console.log(data);
  const popularCourses = data
    .filter((course) => !course.isTrending)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

    console.log(popularCourses);

  return <div>
    <h1 className="text-2xl font-bold my-6">Popular Courses</h1>
    <div className="grid gap-6 md:grid-cols-3">
      {popularCourses.map((course) => <CourseCard key={course.id} course={course} />)}
    </div>
  </div>;
};

export default PopularCourses;
