import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Unleashing your brand&apos;s potential through quality{" "}
        <span className={styles.code}>code</span>.
      </h1>
      <a href="#projects" className={styles["projects-btn"]}>
        View my projects
      </a>
    </div>
  );
};
