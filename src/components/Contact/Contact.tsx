import SocialLink from "../SocialLink/SocialLink";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.content}>
      {/* <SocialLink
        name="LinkedIn"
        iconUrl={"/icons/LI-In-Bug.png"}
        url={"https://www.linkedin.com/in/jefvanzanten"}
      />
      <SocialLink
        name="E-mail"
        iconUrl={"/icons/mail.svg"}
        url={"mailto:j.van.zanten@gmail.com"}
      /> */}
      <h1>Geïnteresseerd of vragen?</h1>
      <p>
        Neem contact op via{" "}
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/jefvanzanten"
        >
          LinkedIn
        </a>{" "}
        of{" "}
        <a className={styles.link} href="mailto:j.van.zanten@gmail.com">
          email
        </a>
      </p>
    </main>
  );
}
