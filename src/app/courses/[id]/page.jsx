import { StarFill } from '@gravity-ui/icons';
import React from 'react';

const CourseDetailsPage = async({ params }) => {
    const { id } = await params;
    const res = await fetch("https://skill-sphere-self.vercel.app/data.json");
    const data = await res.json();
    console.log("All IDs:", data.map(c => c.id));
    console.log("Looking for id:", id);

    // ✅ Compare as string to avoid any type mismatch
    const course = data.find(course => String(course.id) === String(id));

    console.log("Found:", course?.title, course?.instructor);
    return (
       <div>
            <div className='px-6 py-8 text-white' style={{background:
              'linear-gradient(to bottom, #818cf8, #6d28d9)'}}>
                <h1 className='text-2xl font-bold mt-5'>{course.title}</h1>
                <div className='flex items-center gap-2'>
                    <StarFill className='text-yellow-400'/>
                    <span className='text-lg font-semibold'>{course.rating}</span>
                </div>
                <p className='text-black font-semibold mb-4'>{course.description}</p>
            </div>
            <div>
                {/* Instructor Info */}
                <div>
                    <h2 className='text-xl font-bold mt-5'>{course.instructor}</h2>
                    <p className='text-gray-600'>{course.role}</p>
                </div>
                {/* Curriculum */}
                <div>

                </div>
            </div>
       </div>
    );
};

export default CourseDetailsPage;
