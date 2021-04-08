import React from 'react';

export interface TeamItemNameProps {
    name: string; 
    designation: string; 
  }

const TeamItemName = ({name, designation}) => {
  return (
    <div className="flex flex-col">
      <div className="... p-6 rounded-2xl shadow-xl">
        <img
          src="/images/sample.jpg"
          alt="sample_image"
          className="w-full rounded-3xl"
        />
      </div>
      <div className="pt-3">
        <h6 className="text-black">{name}</h6>
        <p className="text-red-600">{designation}</p>
      </div>
    </div>
  );
};

export default TeamItemName;
