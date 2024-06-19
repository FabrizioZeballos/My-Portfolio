import styles from "./Contact.module.css";

import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xgegggey");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className={styles["form-container"]} id="contact">
      <h2 className={styles.title}>
        Let&apos;s <span>connect</span>.
      </h2>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/*  <label htmlFor="email">Email Address</label> */}

          <input
            id="email"
            type="email"
            name="email"
            className={styles["email-input"]}
            placeholder="Email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            className={styles["message-input"]}
            placeholder="Message"
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
