import styles from "./StackCard.module.css";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

export const StackCard = ({ iconName }) => {
  return (
    <div className={styles.card}>
      {iconName === "js" && <RiJavascriptFill />}
      {iconName === "ts" && <BiLogoTypescript />}
      {iconName === "nest" && <SiNestjs />}
      {iconName === "express" && <SiExpress />}
      {iconName === "node" && <FaNodeJs />}
      {iconName === "postgres" && <DiPostgresql />}
      {iconName === "mongodb" && <DiMongodb />}
      {iconName === "react" && <FaReact />}
      {iconName === "redux" && <SiRedux />}
      {iconName === "docker" && <FaDocker />}
    </div>
  );
};
