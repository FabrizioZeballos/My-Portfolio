import { useEffect, useState } from "react";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { Introduction } from "../../components/Introduction/Introduction";
import { Projects } from "../../components/Projects/Projects";
import styles from "./Portfolio.module.css";
import { FaArrowUp } from "react-icons/fa";

export const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles["portfolio-container"]}>
      <Hero />
      <Introduction />
      <Projects />
      <Contact />
      <Footer />
      {isScrolled && (
        <a href={"#"} className={styles["up-button"]}>
          <FaArrowUp />
        </a>
      )}
    </div>
  );
};
