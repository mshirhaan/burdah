import React, { useState, useRef, useEffect } from "react";
import styles from "./BurdaPlayer.module.css";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

function BurdaPlayer({
  setPlaybackTime,
  currentTime,
  audioRef,
  togglePlay,
  isPlaying,
  audioUrl,
  reciters,
  handleReciterChange,
  selectedReciter,
}: any) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isScrollAtEnd = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    let subtractValue = 100;

    return windowHeight + scrollPosition >= documentHeight - subtractValue;
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScroll = () => {
    if (isScrollAtEnd()) {
      setIsHidden(true); // Hide the player when scroll is at the end
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLProgressElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickX = e.clientX - progressBar.getBoundingClientRect().left;
      const percent = (clickX / progressBar.offsetWidth) * 100;
      const duration = audioRef.current.duration;
      const newTime = (duration * percent) / 100;

      audioRef.current.currentTime = newTime;
      setPlaybackTime(newTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setPlaybackTime(audioRef.current?.currentTime || 0);
      });
    }
  }, []);
  // Function to format time in HH:MM:SS format
  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${hours}:${minutes}:${seconds}`;
    // return timeInSeconds.toFixed(0) + "";
  };

  return (
    <div
      className={`${styles.container} ${
        isHidden || !audioUrl ? styles.hidden : ""
      } ${theme == "dark" ? "dark" : ""}`}
    >
      {/* Dropdown for selecting the reciter */}
      <select value={selectedReciter} onChange={handleReciterChange}>
        {reciters.map((reciterName: string) => (
          <option key={reciterName} value={reciterName}>
            {reciterName}
          </option>
        ))}
      </select>
      <audio ref={audioRef} src={audioUrl} autoPlay={isPlaying}>
        Your browser does not support the audio element.
      </audio>
      <div className={styles.player}>
        <button
          onClick={togglePlay}
          className={`${theme == "dark" ? "dark" : ""}`}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={toggleMute}
          className={`${theme == "dark" ? "dark" : ""}`}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}{" "}
          {/* Toggle mute/unmute icon */}
        </button>
        <progress
          max={audioRef.current?.duration || 0}
          value={currentTime}
          style={{ width: "100%", cursor: "pointer" }}
          onClick={handleProgressBarClick}
        ></progress>
      </div>
      <div className={styles.timer}>
        <span>Current Time: {formatTime(currentTime)}</span>
        <span> / </span>
        <span>Duration: {formatTime(audioRef.current?.duration || 0)}</span>
      </div>
    </div>
  );
}

export default BurdaPlayer;
