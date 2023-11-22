// src/components/FilmList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div>
      <h2>Films</h2>
      <button onClick={toggleView}>
        {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
      {isGridView ? (
        <div className="film-grid">
          {films.map((film) => (
            <div key={film.episode_id} className="film-card">
              <img src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} />
              <h3>{film.title}</h3>
              <p>Release Date: {film.release_date}</p>
            </div>
          ))}
        </div>
      ) : (
        <ul className="film-list">
          {films.map((film) => (
            <li key={film.episode_id}>
              <img src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} />
              <h3>{film.title}</h3>
              <p>Release Date: {film.release_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Films;
