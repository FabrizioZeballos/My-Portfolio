import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ imageSrc }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={imageSrc} alt="" className={styles["project-img"]} />
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
};
