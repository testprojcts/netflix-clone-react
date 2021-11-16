import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './request';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  //   console.log(movie);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
    <div>
      <header
        className='banner'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
          backgroundPosition: 'center center',
        }}>
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className='baner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
          </div>

          <div className='banner__description'>
            <h3>{movie?.overview}</h3>
          </div>
        </div>
      </header>

      {/* Background Image under the Header */}
      {/* Title */}
      {/* Div with 2 buttons */}
      {/* Description */}
    </div>
  );
};

export default Banner;
