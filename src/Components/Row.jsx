import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  // A React Snippet of code the runs based on a condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  console.log(movies);

  return (
    <div className='row'>
      <h3>{title}</h3>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
            className='row__poster'
          />
        ))}
      </div>
      {/* Container with Posters */}
    </div>
  );
};

export default Row;
