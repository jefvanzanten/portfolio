import { MouseEventHandler } from "react";
import styles from "./Hamburger.module.css";

interface HamburgerProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Hamburger({ isOpen, onClick }: HamburgerProps) {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
