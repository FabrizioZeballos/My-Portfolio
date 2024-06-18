import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import coreforce from "../../assets/coreforce2.png";
import back from "../../assets/swagger.png";
import bank from "../../assets/bank2.png";

const projectData = [
  {
    stack: ["TypeScript", "NestJS", "React", "Tailwind", "PostgreSQL"],
    imageSrc: coreforce,
    title: "CoreForce Fitness",
    /*  description:
      "A gym application designed to make a significant impact on the fitness industry. It allows users to interact with trainers in real-time via chat, purchase memberships, access an integrated chatbot, and view workout routines.", */
    description:
      "A gym application designed to make a significant impact on the fitness industry. It allows users to interact with trainers in real-time via chat, purchase memberships, access an integrated chatbot.",
    link: "https://github.com/FabrizioZeballos/Bank-Application",
  },
  {
    stack: ["TypeScript", "NestJS", "PostgreSQL"],
    imageSrc: back,
    title: "Ecommerce Backend",
    /* description:
      "An application designed to efficiently manage products, user accounts, and purchase orders for an ecommerce platform, supported by a robust backend. Known for its modular and scalable architecture, the application is built on a RESTful API that enables seamless integration with other systems, ensuring an optimal user experience.", */
    description:
      "An application designed to efficiently manage products, user accounts, and purchase orders for an ecommerce platform, supported by a robust backend. Known for its modular and scalable architecture",
    link: "https://front-core-force.vercel.app/",
  },
  {
    stack: ["TypeScript", "Express", "React", "Redux", "PostgreSQL"],
    imageSrc: bank,
    title: "HHBC Bank",
    /* description:
      "An appointment scheduling app for a bank aiming to enhance customer service and provide a more convenient, accessible experience. Users can register, log in, schedule, and cancel appointments seamlessly and intuitively.", */
    description:
      "An appointment scheduling app for a bank aiming to enhance customer service and provide a more convenient, accessible experience. Users can register, log in, schedule, and cancel ",
    link: "https://github.com/FabrizioZeballos/Ecommerce-Backend",
  },
];

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>Personal Projects</h2>
      <div className={styles["projects-container"]}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            stack={project.stack}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};
