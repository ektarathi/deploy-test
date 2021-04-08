import React from 'react';
import Button from './Button';

export interface BottomContentProps {
  heading: string;
  description: string;
  text: string;
  link: string;
}

const BottomContent = ({ heading, description, text, link }) => {
  return (
    <div className="bg-red-600 relative py-24 xl:py-48">
      <div className="px-4 sm:px-8 sm:mx-auto xl:inline container max-w-3xl text-center">
        <h3 className="text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl sm:leading-10 mb-2 text-white xl:w-9/12 xl:m-auto">
          {heading}
        </h3>
        <p className="my-4 text-xl leading-7 text-white pb-14 sm:pb-5">{description}</p>
        <div className="xl:w-9/12 xl:m-auto">
            <Button bgColor="white" textColor="black" text={text} link={link} />
        </div>
      </div>
    </div>
  );
};

export default BottomContent;
