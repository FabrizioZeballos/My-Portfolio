import styles from "./PrimaryButton.module.css";

export const PrimaryButton = ({ text }) => {
  return <a className={styles.btn}>{text}</a>;
};
