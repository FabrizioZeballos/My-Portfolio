import styles from "./Introduction.module.css";
import pfp from "../../assets/portfolio-img.png";
import { StackCard } from "../StackCard/StackCard";

export const Introduction = () => {
  return (
    <div className={styles.introduction} id="about">
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
          <h4>Tech Stack</h4>
          <div className={styles["tech-stack"]}>
            <StackCard iconName={"js"} />
            <StackCard iconName={"ts"} />
            <StackCard iconName={"nest"} />
            <StackCard iconName={"express"} />
            <StackCard iconName={"node"} />
            <StackCard iconName={"postgres"} />
            <StackCard iconName={"mongodb"} />
            <StackCard iconName={"react"} />
            <StackCard iconName={"redux"} />
            <StackCard iconName={"docker"} />
          </div>
        </div>
      </div>
    </div>
  );
};
