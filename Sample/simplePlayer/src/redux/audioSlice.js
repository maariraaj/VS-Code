// src/redux/audioSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongIndex: 0,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  songList: [
    { id: 1, title: 'Song 1', url: 'https://res.cloudinary.com/dywv4cffk/video/upload/v1715694024/Beat-Flow/uz9gjtfex04utfsksp6d.mp3' },
    { id: 2, title: 'Song 2', url: 'https://res.cloudinary.com/dywv4cffk/video/upload/v1715694209/Beat-Flow/iebpykwzlhyngs1citrr.mp3' },
    // Add 18 more songs here
  ],
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    next(state) {
      state.currentSongIndex = (state.currentSongIndex + 1) % state.songList.length;
      state.isPlaying = true;
      state.currentTime = 0;
      state.duration = 0;
    },
    previous(state) {
      state.currentSongIndex = (state.currentSongIndex - 1 + state.songList.length) % state.songList.length;
      state.isPlaying = true;
      state.currentTime = 0;
      state.duration = 0;
    },
    setSong(state, action) {
      state.currentSongIndex = action.payload;
      state.isPlaying = true;
      state.currentTime = 0;
      state.duration = 0;
    },
    updateTime(state, action) {
      state.currentTime = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
  }
});

export const { play, pause, next, previous, setSong, updateTime, setDuration } = audioSlice.actions;
export default audioSlice.reducer;
