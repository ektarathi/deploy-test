import React from 'react';
import Card from './shared/Card';
const TechHarbour = () => {
  return (
    <section className="bg-white body-font">
      <div className="sm:container w-full px-20 sm:mx-auto xl:inline">
        <h3 className="text-3xl mx-auto leading-tight font-extrabold tracking-tight sm:text-4xl mt-2 text-red-600 pb-10 xl:w-9/12 xl:m-auto pt-24">
          A safe harbour for <br/> private data
        </h3>
        <Card />
      </div>
    </section>
  );
};

export default TechHarbour;
