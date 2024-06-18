import styles from "./TechCard.module.css";

export const TechCard = ({ tech }) => {
  return <div className={styles.card}>{tech}</div>;
};
