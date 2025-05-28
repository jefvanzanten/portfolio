import SocialLink from "../SocialLink/SocialLink";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.content}>
      <SocialLink
        iconUrl={"LI-Logo.png"}
        url={"https://www.linkedin.com/in/jefvanzanten"}
      />
    </main>
  );
}
