import React, { useState, useEffect } from "react";
import styles from "./HeartAnimation.module.css"; // Import the CSS module

import { GoHeartFill } from "react-icons/go";

interface Heart {
  id: number;
  left: string;
  animationDuration: string;
}

interface HeartAnimationProps {
  children: React.ReactNode; // Accept the text content as a prop
}

const HeartAnimation: React.FC<HeartAnimationProps> = ({ children }) => {
  // State to manage the dynamic generation of hearts
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Function to add a new heart to the screen
  const addHeart = () => {
    const newHeart: Heart = {
      id: Date.now(),
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    };

    setHearts((prevHearts) => [...prevHearts, newHeart]);

    // Remove the heart after the animation duration
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((h) => h.id !== newHeart.id));
    }, parseFloat(newHeart.animationDuration) * 1000);
  };

  // Automatically add hearts at regular intervals
  useEffect(() => {
    const intervalId = setInterval(addHeart, 2000); // Adjust the interval timing as desired
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles["heart-container"]}>
      <span className={styles["text-with-hearts"]}>{children}</span>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={styles["heart-icon"]}
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
          }}
        >
          <GoHeartFill />
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;
