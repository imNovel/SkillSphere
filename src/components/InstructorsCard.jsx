import React from 'react';
import { Avatar, Chip } from '@heroui/react';
import { StarFill, PersonFill, BookFill } from '@gravity-ui/icons';

const InstructorsCard = ({ instructors }) => {


  return (
    <div className="bg-white border border-default-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-sm transition-shadow duration-200">
      <div>
        <PersonFill size={80}/>
      </div>

      {/* Name + role + category chip */}
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-default-900">
          {instructors.instructor}
        </h2>
        <p className="text-xs text-default-400">{instructors.role}</p>
      </div>

    </div>
  );
};

export default InstructorsCard;