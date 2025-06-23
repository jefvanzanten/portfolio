import SocialLink from "../SocialLink/SocialLink";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.content}>
      <SocialLink
        name="LinkedIn"
        iconUrl={"/LI-In-Bug.png"}
        url={"https://www.linkedin.com/in/jefvanzanten"}
      />
      <SocialLink
        name="E-mail"
        iconUrl={"mail.svg"}
        url={"mailto:j.van.zanten@gmail.com"}
      />
    </main>
  );
}
