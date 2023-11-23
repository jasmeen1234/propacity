// src/components/PlanetPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetList from './PlanetList';

const PlanetPage = () => {
  const [planets, setPlanets] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => setPlanets(response.data.results))
      .catch(error => console.error('Error fetching planets:', error));
  }, []);

  return (
    <div className={`planet-page ${isGridView ? 'grid-view' : 'list-view'}`}>
      <button onClick={() => setIsGridView(!isGridView)}>
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
      <PlanetList planets={planets} />
    </div>
  );
};

export default PlanetPage;
