import React from 'react';
import TeamItemName from './TeamItemName';
import { teams } from '../../teams';
const TeamItem = () => {
  const showcase = teams.map((team) => (
    <TeamItemName name={team.name} designation={team.designation} key={team.name}/>
  ));
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-6 xl:w-9/12 xl:m-auto pb-24">
      {showcase}
    </div>
  );
};

export default TeamItem;
