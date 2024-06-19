import styles from "./SecondaryButton.module.css";

export const SecondaryButton = ({ text2, github }) => {
  return (
    <a href={github} target={"_blank"} className={styles.btn}>
      {text2}
    </a>
  );
};
