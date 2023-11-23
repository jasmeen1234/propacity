// src/components/FilmList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './films.css';
// import Sidebar from '../Sidebar'

const MovieName = () => {
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
    <div className='movie-name'>
{/* <   Sidebar/>  */}
      <div className='sidebar-list'>
    
      
       
        <div className="movie-grid">
          {films.map((film) => (
            <div key={film.episode_id} className="film-card">
            
              <h3>{film.title}</h3>
              
            </div>
          ))}
        </div>
       
      
      </div>
    </div>
  );
};

export default MovieName;
