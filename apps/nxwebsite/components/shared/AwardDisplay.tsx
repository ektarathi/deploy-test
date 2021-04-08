import React from 'react';

export interface AwardDisplayProps {
    description: string;
    image: string;
}
  
const AwardDisplay = ({description, image}) => {
  return (
    <div className="mt-2 sm:mt-4 text-base xl:text-lg sm:leading-normal leading-6 text-white text-center flex flex-row sm:flex-col sm:items-center mr-4">
      <div className="mr-2 sm:mr-0 w-2/5 sm:w-auto">
        <img
          src={`/images/logos/${image}.svg`}
          alt="privacy"
          className="mx-auto"
        />
      </div>
      <div className="flex items-center sm:pt-5 text-left sm:text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AwardDisplay;
