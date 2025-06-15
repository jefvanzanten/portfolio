import { Link } from "react-router";
import styles from "./Home.module.css";

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
        <h1 className={styles.h1}>Ik maak fullstack en mobile apps</h1>
        <p className={styles.p}>
          Hey, mijn naam is Jef. Momenteel volg ik de studie Software
          Development (HBO Associate Degree).
          <br />
          <br />
          Ik wissel met programmeren tussen frontend, backend en mobile
          projecten, zodat mijn kennis en vaardigheden op elk vlak blijven
          ontwikkelen. Kijk vooral bij m'n{" "}
          <Link className={styles["inline-link"]} to={"/projects"}>
            projecten
          </Link>{" "}
          om te zien waar ik nu sta.
        </p>
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
