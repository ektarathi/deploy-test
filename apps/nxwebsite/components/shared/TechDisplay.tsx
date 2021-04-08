import React from 'react';

export interface TechDisplayProps {
  heading: string;
  description: string;
  image: string;
}

const TechDisplay = ({ heading, description, image }) => {
  return (
    <div className="... p-6 rounded-2xl md:min-h-full shadow-2xl">
      <div className="flex flex-col sm:flex-row">
        <div className="flex w-2/4 sm:w-1/4 md:mt-7 md:w-auto">
          <img src={`/images/logos/${image}.svg`} alt={image} />
        </div>
        <div className="sm:pl-5">
          <h5 className="mx-auto leading-tight tracking-tight sm:text-xl mt-2 text-black pt-5">
            {heading}
          </h5>
          <p className="mx-auto leading-tight tracking-tight mt-5 pb-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechDisplay;
