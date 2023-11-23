// src/components/FilmList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './films.css';
import MovieIcon from '@mui/icons-material/Movie';
// import MovieName from './MovieName'
import Sidebar from '..//sidebar/Sidebar'


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
    <div className='main-list'>
      <div className='main-list1'></div>
       <Sidebar/>
      <div className='sidebar-list'>
      {/* <h2>Films</h2> */}
      <button onClick={toggleView}>
        {isGridView ? 'Movie Name' : 'Switch to Grid View'}
      </button>
      {isGridView ? (
        <div className="film-grid">
          {films.map((film) => (
            <div key={film.episode_id} >
              <img src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} />
              <h3>{film.title}</h3> 

              <p>Release Date: {film.release_date}</p>
            </div>
          ))}
        </div>
      ) : (
        <ul className='film-grid'>
          {films.map((film) => (
            <li key={film.episode_id}>
              <img src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`} alt={film.title} />
              <h3>{film.title}</h3>
              <p>Release Date: {film.release_date}</p>
            </li>
            
          ))}
          <li className='productli'><span><MovieIcon/></span></li>
        </ul>
      )}
      </div>
      <select>
        
      </select>
      {/* <MovieName/> */}
    </div>
  );
};

export default Films;
