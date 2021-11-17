import React, { useState, useEffect } from 'react';
import './Banner.css';
import './responsive.css';
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

  // Truncate the text if it exceeds a certain number of letters
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  //   console.log(movie);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
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

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>

        <div className='banner__description'>
          <h2>{truncate(movie?.overview, 170)}</h2>
        </div>
      </div>
      <div className='banner__fade_bottom' />
    </header>
  );
};

export default Banner;
