import React from 'react';
import { awards } from '../../award';
import AwardDisplay from './AwardDisplay';

const AwardItems = () => {
  const showcase = awards.map((award) => (
    <AwardDisplay
      description={award.description}
      image={award.image}
      key={award.image}
    />
  ));

  return (
    <div className="xl:w-9/12 xl:m-auto pt-7 md:pt-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-8">
        {showcase}
      </div>
    </div>
  );
};

export default AwardItems;
