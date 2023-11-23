import React from 'react';
import './planet.css';

const Planet = ({ planet }) => {
  return (
    <div className="planet">
      <h3>{planet.name}</h3>
      <p>Climate: {planet.climate}</p>
      <p>Gravity: {planet.gravity}</p>
    </div>
  );
};

export default Planet;