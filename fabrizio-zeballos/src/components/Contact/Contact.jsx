import styles from "./Contact.module.css";
import { FaCircleCheck } from "react-icons/fa6";

import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xgegggey");
  if (state.succeeded) {
    return (
      <div className={styles["after-msg-container"]}>
        <p className={styles["after-message"]}>
          Thank you for reaching out! Your message has been successfully sent.
          I&apos;ll get back to you as soon as possible.
        </p>
        <FaCircleCheck className={styles["check-icon"]} />
      </div>
    );
  }
  return (
    <div className={styles["form-container"]} id="contact">
      <h2 className={styles.title}>
        Let&apos;s <span>connect</span>.
      </h2>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            id="email"
            type="email"
            name="email"
            className={styles["email-input"]}
            placeholder="Email"
            required="true"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className={styles["message-input"]}
            placeholder="Message"
            required="true"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={styles["submit-btn"]}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
