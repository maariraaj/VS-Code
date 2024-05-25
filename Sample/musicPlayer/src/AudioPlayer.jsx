// import React, { useState, useRef } from 'react';
// import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';
// import './AudioPlayer.css';

// const AudioPlayer = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const audioRef = useRef(null);

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };
//   const updateTime = () => {
//     setCurrentTime(audioRef.current.currentTime);
//   };

//   // Seek functionality
//   const handleSeek = (e) => {
//     const seekTime = e.target.value;
//     audioRef.current.currentTime = seekTime;
//     setCurrentTime(seekTime);
//   };
// console.log(audioRef.current)
//   return (
//     <div className="audio-player d-flex justify-content-between align-items-center p-3">
//         <input
//         type="range"
//         className="song-seek-slider position-absolute w-100"
//         value={currentTime}
//         max={audioRef.current?.duration || 0}
//         onChange={handleSeek}
//       />
//       {/* Song title and artist (on the left for small screens) */}
//       <div className="song-info d-none d-md-flex align-items-center">
//         <img src="song-image-url.jpg" alt="Song" className="song-image rounded" />
//         <div className="ml-3">
//           <h6 className="mb-0">Song Title</h6>
//           <p className="mb-0">Artist Name</p>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="controls d-flex justify-content-center align-items-center">
//         <button className="btn btn-link">
//           <FaBackward />
//         </button>
//         <button className="btn btn-link" onClick={togglePlayPause}>
//           {isPlaying ? <FaPause /> : <FaPlay />}
//         </button>
//         <button className="btn btn-link">
//           <FaForward />
//         </button>
//       </div>

//       {/* Song title and artist (on the left for small screens) */}
//       <div className="song-info d-flex d-md-none align-items-center">
//         <div className="mr-3">
//           <h6 className="mb-0">Song Title</h6>
//           <p className="mb-0">Artist Name</p>
//         </div>
//       </div>

//       {/* Volume control (hidden on small screens) */}
//       <div className="volume-control d-none d-md-flex align-items-center">
//         <FaVolumeUp />
//         <input type="range" className="form-control-range ml-2" />
//       </div>

//       <audio ref={audioRef} src="https://res.cloudinary.com/dywv4cffk/video/upload/v1715694209/Beat-Flow/iebpykwzlhyngs1citrr.mp3" />
//     </div>
//   );
// };

// export default AudioPlayer;




import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Seek functionality
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    // Update current time continuously while the audio is playing
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="audio-player d-flex justify-content-between align-items-center p-3">
      {/* Song seek slider */}
      <input
        type="range"
        className="song-seek-slider position-absolute w-100"
        value={currentTime}
        max={audioRef.current?.duration || 0}
        onChange={handleSeek}
      />

      {/* Song title and artist (on the left for small screens) */}
      <div className="song-info d-none d-md-flex align-items-center">
        <img src="song-image-url.jpg" alt="Song" className="song-image rounded" />
        <div className="ml-3">
          <h6 className="mb-0">Song Title</h6>
          <p className="mb-0">Artist Name</p>
        </div>
      </div>

      {/* Controls */}
      <div className="controls d-flex justify-content-center align-items-center">
        <button className="btn btn-link">
          <FaBackward />
        </button>
        <button className="btn btn-link" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="btn btn-link">
          <FaForward />
        </button>
      </div>

      {/* Song title and artist (on the left for small screens) */}
      <div className="song-info d-flex d-md-none align-items-center">
        <div className="mr-3">
          <h6 className="mb-0">Song Title</h6>
          <p className="mb-0">Artist Name</p>
        </div>
      </div>

      {/* Volume control (hidden on small screens) */}
      <div className="volume-control d-none d-md-flex align-items-center">
        <FaVolumeUp />
        <input type="range" className="form-control-range ml-2" />
      </div>

      <audio ref={audioRef} src="https://res.cloudinary.com/dywv4cffk/video/upload/v1715693882/Beat-Flow/dwvotfmctzy9hrrxg6ah.mp3" />
    </div>
  );
};

export default AudioPlayer;
