import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');

  // A React Snippet of code the runs based on a condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const options = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='row'>
      <h3 className='row__title'>{title}</h3>

      {/* Container with Posters */}
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__poster_large'}`}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} options={options} />}
    </div>
  );
};

export default Row;
