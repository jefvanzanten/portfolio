import styles from "./GithubLink.module.css";

type GithubLinkProps = {
  name: string;
  url: string;
  iconUrl: string;
};

export default function GithubLink({ name, url, iconUrl }: GithubLinkProps) {
  return (
    <a className={styles.socialContainer} href={url} target="_blank">
      <img className={styles.logo} src={iconUrl} />
      <p className={styles.p}>{name}</p>
    </a>
  );
}
