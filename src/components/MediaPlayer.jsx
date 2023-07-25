import { useState } from "react"

function MediaPlayer() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleVolumeChange = (event) => {
    const { value } = event.target;
    setVolume(value);
  };


  return (
    <div className="container">
      <audio src="/src/media/videoplayback_2.mp3" controls={false} autoPlay={isPlaying} volume={volume} />
      <button className="fa fa-play" onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <div>
        <label className="volumetext" htmlFor="volume">volume level:</label>
        <br />
        <input className="slider" type="range" id="volume" name="volume" min="0" max="1" step="0.01" 
        value={volume} 
        onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default MediaPlayer