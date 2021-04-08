import React from 'react';
import CardDisplay from './CardDisplay';
import TechDisplay from './TechDisplay';
import { benefits } from '../../benefits';
import { techHarbour } from '../../techHarbour';

const Card = () => {
  const [pathName, setPathName] = React.useState('');

  React.useEffect(function() {
    const pathname = window.location.pathname;
    setPathName(pathname);
  }, [pathName]);

  const showcase = benefits.map((ben) => (
    <CardDisplay
      heading={ben.heading}
      description={ben.description}
      image={ben.image}
      key={ben.heading}
    />
  ));

  const techshowCase = techHarbour.map((tech) => (
    <TechDisplay
      heading={tech.heading}
      description={tech.description}
      image={tech.image}
      key={tech.heading}
    />
  ));

  return (
    <>
      {pathName === '/tech' ? (
        <div className="grid sm:grid-cols-1 gap-6 xl:w-9/12 xl:m-auto pb-24">
          {techshowCase}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 xl:w-9/12 xl:m-auto pb-24">
          {showcase}
        </div>
      )}
    </>
  );
};

export default Card;
