import styles from "./NavButton.module.css";
import { Link } from "react-router";

type NavButtonProps = {
  title: string;
  to?: string;
};

export default function NavButton({ title, to }: NavButtonProps) {
  if (to) {
    return (
      <Link className={styles.button} to={to}>
        {title}
      </Link>
    );
  }

  return <button className={styles.button}>{title}</button>;
}
