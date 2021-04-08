import React from 'react';

export interface CardDisplayProps {
  heading: string;
  description: string;
  image: string;
}

const CardDisplay = ({ heading, description, image }) => {
  return (
    <div className="flex flex-col">
      <div className="... p-6 rounded-2xl min-h-full shadow-2xl">
        <div className="w-6/12 sm:w-3/12 mt-10">
          <img
            src={`/images/logos/${image}.svg`}
            alt={image}
          />
        </div>
        <h5 className="mx-auto leading-tight tracking-tight sm:text-xl mt-2 text-black pt-5">{heading}</h5>
        <p className="mx-auto leading-tight tracking-tight mt-10 pb-20">{description}</p>
      </div>
    </div>
  );
};

export default CardDisplay;
