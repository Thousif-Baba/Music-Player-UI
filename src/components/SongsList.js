import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import './SongsList.css';

const SongsList = ({ songs, setCurrentSong }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSongId, setSelectedSongId] = useState(null);
    const [tab, setTab] = useState('forYou');

    const filteredSongs = songs.filter((song) =>
        song.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const displayedSongs = tab === 'topTracks'
        ? filteredSongs.filter((song) => song.top_track)
        : filteredSongs;

    const handleSongSelect = (song) => {
        setCurrentSong(song);
        setSelectedSongId(song.id);
    };

    return (
        <div className="songs-list-container">
            <div className="tabs">
                <button onClick={() => setTab('forYou')} className={`tab-button ${tab === 'forYou' ? 'active' : ''}`}>
                    For You
                </button>
                <button onClick={() => setTab('topTracks')} className={`tab-button ${tab === 'topTracks' ? 'active' : ''}`}>
                    Top Tracks
                </button>
            </div>
            <div className='input-container'>
                <CiSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search Song, Artist"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='search-input'
                />
            </div>
            <ul className="song-list">
                {displayedSongs.map((song) => (
                    <li
                        key={song.id}
                        onClick={() => handleSongSelect(song)}
                        className={`song-item ${song.id === selectedSongId ? 'selected' : ''}`}
                    >
                        <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.name} className="song-cover" />
                        <div className="song-details">
                            <p className='song-name'>{song.name}</p>
                            <p className='artist-name'>{song.artist}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongsList;
