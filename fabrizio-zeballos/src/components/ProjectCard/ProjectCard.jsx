import { TechCard } from "../TechCard/TechCard";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ imageSrc, title, description, stack }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img src={imageSrc} alt="" className={styles["project-img"]} />
      </div>
      <div className={styles.bottom}>
        <div className={styles["stack-container"]}>
          {stack.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
