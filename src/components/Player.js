import React from 'react';
import ReactH5AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Player.css';

const Player = ({ song, songs, setCurrentSong }) => {
    const handleClickPrevious = () => {
        const currentIndex = songs.findIndex((s) => s.id === song.id);
        const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[previousIndex]);
    };

    const handleClickNext = () => {
        const currentIndex = songs.findIndex((s) => s.id === song.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
    };

    return (
        <div className="player">
            <h2 className='player-song-name'>{song.name}</h2>
            <h3 className='player-artist-name'>{song.artist}</h3>
            <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.name} className="cover-image" />
            <ReactH5AudioPlayer
                src={song.url}
                autoPlay
                showJumpControls={false}
                showSkipControls={true}
                showDownloadProgress={false}
                customAdditionalControls={[]}
                customProgressBarSection={['PROGRESS_BAR']}
                customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
                className="audio-player"
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
            />
        </div>
    );
};

export default Player;
