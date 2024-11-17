import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import './row.css'; 
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); 
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
       .then((url) => {
        console.log(url);
         const urlParams = new URLSearchParams(new URL(url).search);
         console.log(urlParams);
         console.log(urlParams.get('v'));
           setTrailerUrl(urlParams.get('v'));
         });
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)} 
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name || movie.title || movie.original_name} 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
          />
        ))}
      </div>

      {/* Display the trailer if URL exists */}
      <div style={{ padding: '40px' }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={{ height: '390', width: '100%', playerVars: { autoplay: 1 } }} />}
      </div>
    </div>
  );
};

export default Row;
