import styles from "./Introduction.module.css";
import pfp from "../../assets/portfolio-img.png";

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h2 className={styles["profile-title"]}>Behind the code</h2>
      <div className={styles["profile-container"]}>
        <div className={styles["left"]}>
          <img src={pfp} alt="" className={styles.img} />
        </div>
        <div className={styles["right"]}>
          <p>
            My name is Fabrizio Zeballos, and I am a Fullstack Developer with a
            focus on backend development.
          </p>
          <p>
            Proficient in NestJS, Express, Node.js, and React, I bring highly
            transferable analytical and communication skills as a fourth-year
            law student.
          </p>
          <p>
            Currently seeking my first job in the field, I am motivated to
            leverage my technical expertise and legal knowledge to make a
            meaningful impact.
          </p>
          <div className={styles["tech-stack"]}></div>
        </div>
      </div>
    </div>
  );
};
