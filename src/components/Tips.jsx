import { TargetDart } from '@gravity-ui/icons';
import React from 'react';

const Tips = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold my-5">
          Learning Tips
        </h2>
    <div className="grid md:grid-cols-3 gap-4">
    <div className="bg-base-100 border border-base-300 rounded-xl p-5 border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
      <div className="text-2xl mb-3"><TargetDart/></div>
            <h3 className="font-bold text-base mb-2">Define achievable learning goals</h3>
            <p className="text-base-content/60 text-sm leading-relaxed">
              Set clear, realistic objectives for each week. Breaking larger goals into smaller milestones helps maintain focus and measure progress effectively.
            </p>
    </div>
    </div>      
    </div>
  );
};

export default Tips;