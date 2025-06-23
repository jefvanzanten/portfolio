import styles from "./SocialLink.module.css";

type SocialLinkProps = {
  name: string;
  url: string;
  iconUrl: string;
};

export default function SocialLink({ name, url, iconUrl }: SocialLinkProps) {
  return (
    <a className={styles.socialContainer} href={url}>
      <img className={styles.logo} src={iconUrl} />
      <p className={styles.p}>{name}</p>
    </a>
  );
}
