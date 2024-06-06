import styles from "./BurdaContainer.module.css";

import BurdaPara from "../BurdaPara/BurdaParaBeta";
import BurdaPlayer from "../BurdaPlayer/BurdaPlayerBeta";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import chaptersData from "../../../assets/chaptersBeta.json";
import chapterNumsAudioMapData from "../../../assets/chapterNumsAudioMapBeta.json";
import { useReciter } from "../../../contexts/ReciterContext";
import { Helmet } from "react-helmet";

interface Para {
  id: number | string;
  arabicLines: string[];
  englishLines: string[];
  tafseer?: string;
}

interface ChapterObject {
  arabicTitle: string;
  englishTitle: string;
  chapterDetails: Para[];
}

interface ChaptersData {
  [chapterNumber: string]: ChapterObject;
}

//

interface ChapterAudio {
  audioStart: number;
  audioEnd: number;
  disabled?: boolean;
}

interface Reciter {
  id: number;
  name: string;
  fullAudioUrls: string[];
  audioMapping: Record<string, ChapterAudio[]>;
}

interface ChapterNumsAudioMapData {
  reciters: Record<string, Reciter>;
}

const chapters: ChaptersData = chaptersData;
const chapterNumsAudioMap: ChapterNumsAudioMapData = chapterNumsAudioMapData;

const BurdaContainer = () => {
  const { chapterId } = useParams<{ chapterId: string | undefined }>();
  const chapterIndex = Number(chapterId);
  const isChapterAllowed =
    chapterId && Object.keys(chapters).includes(chapterId);

  if (!isChapterAllowed) {
    return <h1>Page not found</h1>;
  }

  const [audioTime, setAudioTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Access the selected reciter from the context
  const { selectedReciter, setSelectedReciter } = useReciter();

  // Use the selected reciter to determine the audio URL
  const audioUrl =
    chapterNumsAudioMap.reciters[selectedReciter].fullAudioUrls[
      chapterIndex - 1
    ];

  // Handle reciter selection change
  const handleReciterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReciter(event.target.value);
  };

  const handleSetAudioTime = (timeInSeconds: number) => {
    setAudioTime(timeInSeconds);
  };

  const handleSetAudioRefTime = (timeInSeconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = timeInSeconds;
    }
  };

  const togglePlay = (flag: boolean) => {
    if (audioRef.current) {
      if (flag == true) {
        audioRef.current.play();
        setIsPlaying(true);
        return;
      }
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set the title and meta description dynamically
  const chapter = chapters[chapterId];
  const pageTitle = `Qaseeda Al Burda - Chapter ${chapterId}`;
  const metaDescription = `Explore Chapter ${chapterId}: ${chapter.arabicTitle} - ${chapter.englishTitle}`;

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={"https://qaseedaburda.com/#/chapters/" + { chapterId }}
        />
      </Helmet>
      <div className={`${styles.chapterTitle} ${styles["text-cycle"]}`}>
        <h1 className="arabic">{chapters[chapterId].arabicTitle}</h1>
        <h1>{chapters[chapterId].englishTitle}</h1>
      </div>
      {chapters[chapterId].chapterDetails.map((para: Para, index) => (
        <BurdaPara
          para={para}
          audioMapping={
            chapterNumsAudioMap.reciters[selectedReciter].audioMapping[
              "chapter" + chapterIndex
            ][index]
          }
          setPlaybackTime={handleSetAudioRefTime}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          currentTime={audioTime}
          key={para.id}
        />
      ))}
      {+chapterId < 10 ? (
        <Link
          to={"/chapters/" + (+chapterId + 1)}
          style={{
            marginTop: "40px",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Next Chapter {+chapterId + 1}
          <FaArrowRight />
        </Link>
      ) : null}
      <BurdaPlayer
        setPlaybackTime={handleSetAudioTime}
        currentTime={audioTime}
        audioRef={audioRef}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        audioUrl={audioUrl}
        reciters={Object.keys(chapterNumsAudioMap.reciters)}
        handleReciterChange={handleReciterChange}
        selectedReciter={selectedReciter}
      />
    </div>
  );
};

export default BurdaContainer;
