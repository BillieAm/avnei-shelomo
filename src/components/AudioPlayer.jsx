import { useState, useRef } from 'react';
import { Volume2, Pause, Play } from 'lucide-react';

export default function AudioPlayer({ url, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center gap-3">
        <button
          onClick={handlePlayPause}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 text-white hover:bg-primary-300"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Volume2 size={16} />
            <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
          </div>
        </div>
      </div>
      
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
      />

      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
        className="hidden"
      />
    </div>
  );
}