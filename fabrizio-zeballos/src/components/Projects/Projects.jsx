import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import coreforce from "../../assets/coreforce2.png";
import back from "../../assets/swagger.png";
import bank from "../../assets/bank2.png";

const projectData = [
  {
    key: 1,
    imageSrc: coreforce,
    title: "CoreForce Fitness",
    description:
      "Una aplicación innovadora que simplifica la programación de citas bancarias, asegurando una experiencia de usuario fluida de principio a fin.",
    link: "https://github.com/FabrizioZeballos/Bank-Application",
  },
  {
    key: 2,
    imageSrc: back,
    title: "Ecommerce Backend",
    description:
      "Una aplicación que revoluciona la industria del fitness con un chat en tiempo real con entrenadores, pagos integrados, rutinas de ejercicio de expertos y un chatbot con IA.",
    link: "https://front-core-force.vercel.app/",
  },
  {
    key: 3,
    imageSrc: bank,
    title: "Bank App",
    description:
      "Una aplicación de gestión de ecommerce con un backend escalable y una integración fluida, asegurando una experiencia de usuario óptima.",
    link: "https://github.com/FabrizioZeballos/Ecommerce-Backend",
  },
];

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles["projects-container"]}>
        {projectData.map((project) => (
          <ProjectCard key={project.key} imageSrc={project.imageSrc} />
        ))}
      </div>
    </div>
  );
};
