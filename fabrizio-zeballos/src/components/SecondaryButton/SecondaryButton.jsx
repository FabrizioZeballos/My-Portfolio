import styles from "./SecondaryButton.module.css";

export const SecondaryButton = ({ text2, github }) => {
  return (
    <div className={styles.btn}>
      <a href={github} target={"_blank"}>
        {text2}
      </a>
    </div>
  );
};
