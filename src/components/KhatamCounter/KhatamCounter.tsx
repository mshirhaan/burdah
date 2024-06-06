import usePartCounter from "../../hooks/usePartCounter";
import styles from "./KhatamCounter.module.css";

import { useState, useEffect } from "react";

function KhatamCounter() {
  const { khatamCount } = usePartCounter(); // Get khatamCount from your hook
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setDisplayedCount((prevCount) => {
        if (prevCount < khatamCount) {
          return prevCount + 1;
        } else {
          clearInterval(incrementInterval);
          return prevCount;
        }
      });
    }, 10); // Adjust the interval as needed

    return () => clearInterval(incrementInterval);
  }, [khatamCount]);

  return (
    <div className={styles.khatamCounter}>
      <p className={styles.khatamText}>{displayedCount} Khatam completed Globally</p>
    </div>
  );
}

export default KhatamCounter;
