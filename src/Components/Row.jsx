import React, { useState, useEffect } from 'react';
import './Row.css';

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  // A React Snippet of code the runs based on a condition
  useEffect(() => {}, [movies]);

  return (
    <div>
      {/* Title */}
      <h3>{title}</h3>
      {/* Container with Posters */}
    </div>
  );
};

export default Row;
