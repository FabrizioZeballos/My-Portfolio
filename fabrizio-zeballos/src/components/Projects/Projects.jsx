import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import coreforce from "../../assets/coreforce2.png";
import back from "../../assets/swagger.png";
import bank from "../../assets/bank2.png";

const projectData = [
  {
    stack: ["NestJS", "React", "Tailwind", "PostgreSQL"],
    imageSrc: coreforce,
    title: "CoreForce Fitness",
    description:
      "A gym application designed to make a significant impact on the fitness industry. Users can interact with trainers in real-time via chat, purchase memberships, and access an AI-powered chatbot for assistance.",
    link: "https://front-core-force.vercel.app/",
    github: "https://github.com/AgustinNBertagna/core-force-fitness",
  },
  {
    stack: ["NestJS", "PostgreSQL"],
    imageSrc: back,
    title: "Ecommerce Backend",
    description:
      "An ecommerce app designed to manage products, user accounts, and purchase orders with a robust backend. Built on a RESTful API, it integrates seamlessly with other systems for an optimal user experience.",
    link: "https://front-core-force.vercel.app/",
    github: "https://github.com/FabrizioZeballos/Ecommerce-Backend",
  },
  {
    stack: ["Express", "React", "Redux", "PostgreSQL"],
    imageSrc: bank,
    title: "HHBC Bank",
    description:
      "An appointment scheduling app for a bank aiming to enhance customer service. Users can register, log in, schedule, and cancel appointments seamlessly and intuitively.",
    link: "https://github.com/FabrizioZeballos/Ecommerce-Backend",
    github: "https://github.com/FabrizioZeballos/Bank-Application",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <h2 className={styles.title}>Personal Projects</h2>
      <div className={styles["projects-container"]}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            stack={project.stack}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};
