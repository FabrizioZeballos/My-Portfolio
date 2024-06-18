import { Contact } from "../../components/Contact/Contact";
import { Hero } from "../../components/Hero/Hero";
import { Introduction } from "../../components/Introduction/Introduction";
import { Projects } from "../../components/Projects/Projects";
import styles from "./Portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={styles["portfolio-container"]}>
      <Hero />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
};
