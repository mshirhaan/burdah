import { useEffect, useRef } from "react";
import styles from "./BurdaPara.module.css";
import { FaPause, FaPlay } from "react-icons/fa";
import useSlideInAnimation from "../../../hooks/useSlideInAnimation";
import { useTheme } from "../../ThemeContext";

const BurdaPara = ({
  para,
  audioMapping,
  isPlaying,
  setPlaybackTime,
  togglePlay,
  currentTime,
}: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useSlideInAnimation(containerRef);
  const { theme, toggleTheme } = useTheme();

  const isHighlighted =
    currentTime >= para.audioStart && currentTime <= para.audioEnd;

  // Function to scroll to the highlighted div when it becomes visible
  useEffect(() => {
    if (isHighlighted && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isHighlighted]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? "slideInFromBottom" : ""} ${
        theme == "dark" ? "dark" : ""
      } ${isHighlighted && theme == "dark" ? styles.highlightedDark : ""} ${
        isHighlighted && theme != "dark" ? styles.highlighted : ""
      } `}
    >
      <button
        onClick={() => {
          togglePlay(!isHighlighted ? true : null);
          setPlaybackTime(para.audioStart);
        }}
        className={`${theme == "dark" ? "dark" : ""}`}
      >
        <span>{para.id}</span>
        {isHighlighted && isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      {para.arabicLines.map((str: string) => (
        <p className={styles.arabic}>{str}</p>
      ))}
      {para.englishLines.map((str: string) => (
        <p className={styles.english}>{str}</p>
      ))}
    </div>
  );
};

export default BurdaPara;
