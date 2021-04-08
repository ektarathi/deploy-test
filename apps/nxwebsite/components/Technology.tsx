import React from 'react';
import Button from './shared/Button';

export interface TechnologyProps {
  text: string;
}

const Technology = ({text}) => {
  return (
    <section className="bg-technology-image body-font bg-no-repeat bg-cover opacity-0.3">
      <div className="py-48 px-6 sm:px-8 mx-auto container">
        <div className="text-center pt-20">
          <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight text-white sm:text-4xl mb-6">
            {text}
          </h3>
         <Button bgColor="red-600" textColor="white" text="Learn more" link="tech"/>
        </div>
      </div>
    </section>
  );
};

export default Technology;
