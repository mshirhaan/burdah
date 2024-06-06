import React from "react";
import styles from "./Tooltip.module.css"; // You can create a separate CSS file for styling the tooltip.

const Tooltip = ({ text, position, children }: any) => {
  return (
    <div
      className={styles.tooltip}
      style={{ top: position === "above" ? "-30px" : "30px" }}
    >
      {text}
      {children}
    </div>
  );
};

export default Tooltip;
