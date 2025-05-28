import styles from "./SocialLink.module.css";

type SocialLinkProps = {
  url: string;
  iconUrl: string;
};

export default function SocialLink({ url, iconUrl }: SocialLinkProps) {
  return (
    <a className={styles.socialContainer} href={url}>
      <img className={styles.logo} src={iconUrl} />
      <p>{url}</p>
    </a>
  );
}
