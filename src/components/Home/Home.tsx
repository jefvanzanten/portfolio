import { Link, NavLink } from "react-router";
import styles from "./Home.module.css";
import NavButton from "../NavButton/NavButton";

const data = [
  { name: "React", url: "https://react.dev/" },
  { name: "Tailwind/CSS", url: "https://tailwindcss.com/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "Express", url: "https://expressjs.com/" },
  { name: "Drizzle", url: "https://orm.drizzle.team/" },
  { name: "Better-Auth", url: "https://www.better-auth.com/" },
  { name: "SQLite", url: "https://sqlite.org/" },
  { name: "Postgres", url: "https://www.postgresql.org/" },
  { name: "React Native", url: "https://reactnative.dev/" },
  {
    name: "Jetpack Compose (Kotlin)",
    url: "https://developer.android.com/compose",
  },
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
          <a
            href={item.url}
            target="_blank"
            key={index}
            className={styles["home-tech"]}
          >
            {item.name}
          </a>
        ))}
      </footer>
    </main>
  );
}
