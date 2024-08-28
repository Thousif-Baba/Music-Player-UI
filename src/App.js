import React, { useEffect, useState } from 'react';
import Profile from './components/Profile';
import SongsList from './components/SongsList';
import Player from './components/Player';
import './App.css';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [showSongsList, setShowSongsList] = useState(true);

  useEffect(() => {
    fetch('https://cms.samespace.com/items/songs')
      .then((response) => response.json())
      .then((data) => {
        setSongs(data.data);
        setCurrentSong(data.data[0]);
      });
  }, []);

  useEffect(() => {
    if (currentSong) {
      document.body.style.background = `linear-gradient(to right, ${currentSong.accent}, black)`;
    }
  }, [currentSong]);

  const toggleSongsList = () => {
    setShowSongsList(!showSongsList);
  };

  return (
    <div className="app">
      <Profile />
      <button className="menu-button" onClick={toggleSongsList}>
        {showSongsList ? 'Hide Songs' : 'List Songs'}
      </button>
      {showSongsList && <SongsList songs={songs} setCurrentSong={setCurrentSong} />}
      {currentSong && <Player song={currentSong} songs={songs} setCurrentSong={setCurrentSong} />}
    </div>
  );
};

export default App;
