import React from 'react';
import { Avatar } from '@heroui/react';

const InstructorsCard = ({ instructors }) => {


  return (
    <div className="bg-white border border-default-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-sm transition-shadow duration-200">
      <div>
        <Avatar>
        <Avatar.Fallback>JR</Avatar.Fallback>
      </Avatar>
      </div>

      {/* Name + role + category chip */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-default-900">
          {instructors.instructor}
        </h2>
        <p className="text-xs text-default-200">{instructors.role}</p>
      </div>

    </div>
  );
};

export default InstructorsCard;