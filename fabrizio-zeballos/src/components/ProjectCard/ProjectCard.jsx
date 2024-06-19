import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton";
import { TechCard } from "../TechCard/TechCard";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  imageSrc,
  title,
  description,
  stack,
  link,
  github,
}) => {
  const text = "Visit Website";
  const text2 = "Github";

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
        {title !== "Ecommerce Backend" ? (
          <PrimaryButton text={text} link={link} title={title} />
        ) : null}

        <SecondaryButton text2={text2} github={github} />
      </div>
    </div>
  );
};
