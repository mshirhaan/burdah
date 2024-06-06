import React, { FC, useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { TfiClose } from "react-icons/tfi";
import { useTheme } from "../ThemeContext";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  content: string;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal, content }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto"; // Enable background scroll
    }
  }, [isOpen]);

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles.backdrop} onClick={handleClose}></div>
      <div
        className={`${styles["modal-content"]} ${
          theme == "dark" ? styles["modal-content-dark"] : ""
        }`}
      >
        <span
          className={`${styles.close} ${theme == "dark" ? styles.dark : ""}`}
          onClick={handleClose}
        >
          <TfiClose />
        </span>
        {!content ? (
          <div className={styles["modal-inner"]}>
            Tafseer will be added soon
          </div>
        ) : (
          <div
            className={styles["modal-inner"]}
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Modal;
