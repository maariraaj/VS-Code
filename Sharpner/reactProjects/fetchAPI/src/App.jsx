import React, { useState } from 'react';

import MoviesList from './components/MoviesList.jsx';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading]=useState(false);

  async function fetchMovieHandler() {
    try {
      setIsLoading(true);

      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }));
      setMovies(transformedMovies);
      setIsLoading(false);
    } 
    catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>Found no movies.                                                                                                             </p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;