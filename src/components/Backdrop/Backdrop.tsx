import styles from "./Backdrop.module.css";

const Backdrop = ({ setShowBackdrop }: any) => {
  return <div className={styles.backdrop} onClick={()=>setShowBackdrop(false)}>

  </div>;
};

export default Backdrop;
