import React from 'react';
import Planet from './Planet';

const PlanetList = ({ planets }) => {
  return (
    <div className="planet-list">
      {planets.map((planet, index) => (
        <Planet key={index} planet={planet} />
      ))}
    </div>
  );
};

export default PlanetList;