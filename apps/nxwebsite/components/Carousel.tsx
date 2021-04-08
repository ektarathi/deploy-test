import React from 'react';
import CarouselItem from './shared/CarouselItem';
const Carousel = () => {
  return (
    <div className="border-t border-gray-200 py-24 shadow-inner">
      <div className="container sm:mx-auto xl:inline">
      <div className="carousel relative bg-white xl:w-9/12 xl:m-auto">
        <div className="carousel-inner relative overflow-hidden ">
          {/** Slider 4 */}
          <CarouselItem headingText="Secure public health" paraText="Securing personal data for track and trace and vital medical research on disease propagation." type="carousel-4" image="carousel_41" control="control-4" next="1" prev="3"/>
          {/** Slider 3 */}
          <CarouselItem headingText="Trusted document exchange" paraText="Transforming the way private documents are exchanged through an instant online portal." type="carousel-3" image="carousel_31" control="control-3" next="4" prev="2"/>
           {/** Slider 2 */}
           <CarouselItem headingText="Safe trading venue" paraText="Powering a confidential trading venue supporting real-time spot pricing and secure transactions." type="carousel-2" image="carousel_21" control="control-2" next="3" prev="1"/>
          {/** Slider 1 */}
          <CarouselItem headingText="Tested by banks" paraText="Enabling banks to collaborate securely on sensitive data for KYC and AML." type="carousel-1" image="carousel_11" control="control-1" next="2" prev="4"/>
          
          {/** Bullet points */}
          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="cursor-pointer block text-5xl text-white hover:text-red-600"
              >
                <div className="carousel-bullet circle hover:text-red-600"></div>
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="cursor-pointer block text-5xl text-white hover:text-red-600"
              >
                <div className="carousel-bullet circle hover:text-red-600"></div>
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="cursor-pointer block text-5xl text-white hover:text-red-600"
              >
                <div className="carousel-bullet circle hover:text-red-600"></div>
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-4"
                className="cursor-pointer block text-5xl text-white hover:text-red-600"
              >
                <div className="carousel-bullet circle hover:text-red-600"></div>
              </label>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
