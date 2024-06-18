import styles from "./SecondaryButton.module.css";

export const SecondaryButton = ({ text2 }) => {
  return <a className={styles.btn}>{text2}</a>;
};
