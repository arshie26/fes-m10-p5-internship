import { useState, useEffect, useRef, useCallback } from 'react';
import {
  BsFillFastForwardFill,
  BsFillPauseFill,
  BsFillPlayFill,
  BsFillRewindFill,
  BsSkipEndFill,
  BsSkipStartFill,
  BsShuffle,
  BsRepeat,
} from 'react-icons/bs';
import { useAudioPlayerContext } from '../redux/audio-player-context';

export const Controls = (props) => {

  const { currentTrack, audioRef } = useAudioPlayerContext();
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const skipForward = () => {
    console.log("Skipping forward")
    
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
      updateProgress();
    }
  };

  const skipBackward = () => {
    console.log("Skipping backward")
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
      updateProgress();
    }
  };
  
  const {
    setDuration,
    progressBarRef,
    duration, 
    setTimeProgress,
    setCurrentTrack,
    setTrackIndex
  } = useAudioPlayerContext();

  setCurrentTrack(props.track);

  const onLoadedMetadata = () =>{
    console.log(audioRef.current?.duration);
    const seconds = audioRef.current?.duration;
    if (seconds !== undefined) {
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const playAnimationRef = useRef<number | null>(null);

  const updateProgress = useCallback(() =>{
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime= audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(currentTime / duration) * 100}%`
      );
    }
  }, [duration,setTimeProgress, audioRef, progressBarRef]);

  const startAnimation = useCallback(() =>{
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, duration, audioRef, progressBarRef]);


useEffect(() => {
  const currentAudioRef= audioRef.current;
  if (currentAudioRef) {
    currentAudioRef.onended = () => {
      currentAudioRef.play();
      currentAudioRef.pause();
      setIsPlaying((prev) => !prev)
    };
  }
}, [audioRef]);


useEffect(() => {
  if (isPlaying) {
    audioRef.current?.play();
    startAnimation();
  } else {
    audioRef.current?.pause();
    if (playAnimationRef.current !== null) {
      cancelAnimationFrame(playAnimationRef.current);
      playAnimationRef.current = null;
    }
    updateProgress(); // Ensure progress is updated immediately when paused
  }
  return () =>{
    if (playAnimationRef.current !== null) {
      cancelAnimationFrame(playAnimationRef.current);
    }
  };
}, [isPlaying,startAnimation, updateProgress,audioRef]);



  return (
    <div className="flex gap-4 items-center">
      <audio
        src={currentTrack?.audioLink}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      
      <button onClick={() => {skipBackward()}}>
        <BsFillRewindFill size={20} />
      </button>
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? (
          <BsFillPauseFill size={30} />
        ) : (
          <BsFillPlayFill size={30} />
        )}
      </button>
      <button onClick={() => {skipForward()}}>
        <BsFillFastForwardFill size={20} />
      </button>
      
    </div>
  );
};