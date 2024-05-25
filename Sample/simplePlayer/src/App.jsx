// src/App.js
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import { play, pause, next, previous, setSong, updateTime, setDuration } from './redux/audioSlice';
import './App.css';

const AudioPlayer = () => {
  const dispatch = useDispatch();
  const { currentSongIndex, isPlaying, currentTime, duration, songList } = useSelector(state => state.audio);
  const currentSong = songList[currentSongIndex];

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSongIndex]);

  const handleTimeUpdate = () => {
    dispatch(updateTime(audioRef.current.currentTime));
    if (audioRef.current.duration) {
      dispatch(setDuration(audioRef.current.duration));
    }
  };

  const handleSeek = (event) => {
    audioRef.current.currentTime = event.target.value;
    dispatch(updateTime(event.target.value));
  };

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
  };

  const handleSongEnd = () => {
    dispatch(next());
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="audio-player">
      <div className="controls">
        <button onClick={() => dispatch(previous())}>Previous</button>
        <button onClick={() => dispatch(isPlaying ? pause() : play())}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => dispatch(next())}>Next</button>
      </div>
      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleSongEnd}
      ></audio>
      <div className="current-time">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="seek-slider"
      />
      <div className="volume-control">
        <label>Volume:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="1"
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
      <div className="song-list">
        <h3>Song List</h3>
        <ul>
          {songList.map((song, index) => (
            <li key={song.id} onClick={() => dispatch(setSong(index))}>
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <AudioPlayer />
  </Provider>
);

export default App;
