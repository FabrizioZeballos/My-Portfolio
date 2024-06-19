import styles from "./PrimaryButton.module.css";

export const PrimaryButton = ({ text, link, title }) => {
  return (
    <a
      href={
        title === "HHBC Bank"
          ? "https://www.linkedin.com/posts/zeballosfab_hi-there-excited-to-showcase-my-latest-activity-7180534387124428801-o7SK?utm_source=share&utm_medium=member_desktop"
          : link
      }
      target={"_blank"}
      className={styles.btn}
    >
      {title === "HHBC Bank" ? "Watch video" : text}
    </a>
  );
};
