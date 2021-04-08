import React from 'react';

export interface CarouselItemProps {
  headingText: string;
  paraText: string;
  control: string;
  type: string;
  image: string;
  next: string;
  prev: string;
}

const CarouselItem = ({
  headingText,
  control,
  type,
  paraText,
  image,
  next,
  prev,
}) => {
  return (
    <>
      <input
        className="carousel-open"
        type="radio"
        id={type}
        name="carousel"
        aria-hidden="true"
        hidden
        checked
        readOnly
      />
      <div className="carousel-item absolute opacity-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="... order-2 md:order-1 md:mt-28 lg:mt-48 xl:mt-36">
            <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl mt-2 text-red-600 text-center md:text-left">
              {headingText}
            </h3>
            <p className="my-5 text-xl leading-7 text-gray-700 md:pr-15 md:max-w-md xl:max-w-2xl text-center md:text-left">
              {paraText}
            </p>
          </div>
          <div className="... order-1 md:order-2">
            <img
              src={`/images/${image}.jpg`}
              alt={image}
              className="w-full m-auto"
            />
          </div>
        </div>
      </div>
      <label
        htmlFor={`carousel-${prev}`}
        className={`prev ${control} w-10 h-10 md:h-4 xl:h-10 relative md:absolute cursor-pointer hidden z-10 inset-y-0 md:left-0 md:my-auto float-left left-5/12 md:top-1/2`}
      >
        <img
          src="/images/logos/black_arrow.svg"
          alt="Left Arrow"
          className=""
        />
      </label>
      <label
        htmlFor={`carousel-${next}`}
        className={`next ${control} w-10 h-10 md:h-4 xl:h-10 mr-2 relative md:absolute cursor-pointer hidden z-10 inset-y-0 md:left-20 md:my-auto float-left md:top-1/2 left-5/12 ml-5`}
      >
        <img src="/images/logos/arrow.svg" alt="Right Arrow" className="" />
      </label>
    </>
  );
};

export default CarouselItem;
