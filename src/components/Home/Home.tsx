import { Link, NavLink } from "react-router";
import styles from "./Home.module.css";
import NavButton from "../NavButton/NavButton";

const data = [
  { name: "React" },
  { name: "Tailwind/CSS" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "Express" },
  { name: "Drizzle" },
  { name: "Better-Auth" },
  { name: "SQL" },
  { name: "React Native" },
  { name: "Kotlin/Compose" },
];

export default function Home() {
  return (
    <main>
      <div className={styles["home-container"]}>
        <h1 className={styles.h1}>
          Ik maak fullstack web en mobiele applicaties
        </h1>
        <p className={styles.p}>
          Hey, mijn naam is Jef. Momenteel volg ik de studie Software
          Development (HBO Associate Degree).
          <br />
          <br />
          Ik wissel met programmeren tussen frontend, backend en mobile
          projecten, zodat mijn kennis en vaardigheden op elk vlak blijven
          ontwikkelen.
        </p>
        <div className={styles["button-container"]}>
          <NavButton title="Bekijk projecten" to="/projects" />
          <NavButton title="Neem contact" to="/contact" />
        </div>
      </div>
      <footer className={styles.footer}>
        {data.map((item, index) => (
          <span key={index} className={styles["home-tech"]}>
            {item.name}
          </span>
        ))}
      </footer>
    </main>
  );
}
