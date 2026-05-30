import CourseCard from '@/components/CourseCard';
import React from 'react';

const CoursesPage = async() => {
    const res = await fetch("https://skill-sphere-self.vercel.app/data.json");
  const data = await res.json();
  console.log(data);
    return (
        <div>
            <h1 className='text-2xl font-bold my-5'>All Courses</h1>
            <div className='grid gap-6 md:grid-cols-3'>
                {data.map((course) => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
    );
};

export default CoursesPage;