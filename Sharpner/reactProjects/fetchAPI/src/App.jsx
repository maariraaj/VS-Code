import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList.jsx';
import './App.css';
import AddMovie from './components/AddMovie.jsx';

function App() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const [retrying, setRetrying] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('https://react-http-28c96-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => ({
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }));

      setMovies(transformedMovies);
      setIsLoading(false);
      setRetrying(false);

    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      setRetrying(true);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(NewMovieObj) {
    console.log(NewMovieObj);
  }

  useEffect(() => {
    let retryTimer;
    if (retrying) {
      retryTimer = setTimeout(fetchMoviesHandler, 5000);
    }
    return () => clearTimeout(retryTimer);
  }, [retrying]);

  const cancelRetryHandler = () => {
    setRetrying(false);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler} disabled={retrying}>
          Fetch Movies
        </button>
        {retrying && (
          <button onClick={cancelRetryHandler} style={{ marginLeft: '1rem' }}>
            Cancel Retry
          </button>
        )}
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;