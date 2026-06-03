import React from 'react';
import InstructorsCard from './InstructorsCard';

const Instructors = async() => {
    const res = await fetch("https://skill-sphere-self.vercel.app/data.json");
  const data = await res.json();
  console.log(data);
    return (
        <div>
            <h1 className='font-bold text-2xl my-2'>Top Instructors</h1>
            <div className='grid grid-cols-3 gap-6'>
                {data.slice(0,4).map(instructor => <InstructorsCard key={instructor.id} instructors={instructor} />)}
            </div>
        </div>
    );
};

export default Instructors;