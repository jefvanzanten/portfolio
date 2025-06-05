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
        <img
          className={styles["home-profile-pic"]}
          src="profile_pic_elipse.png"
        />
        <h1>Ik ben een full-stack- en mobile developer.</h1>
        <p>
          Hey, mijn naam is Jef. Op dit moment volg ik de studie Software
          Development (HBO Associate Degree).
          <br />
          <br />
          Elke dag programmeer ik in verschillende front-end, back-end en mobile
          applicaties, omdat ik het belangrijk vind om deze vaardigheden te
          ontwikkelen en een sterke basis aan te leren. Kijk vooral bij m'n
          projecten om te zien waar ik nu sta.
        </p>
        <footer>
          {data.map((item, index) => (
            <span key={index} className={styles["home-tech"]}>
              {item.name}
            </span>
          ))}
        </footer>
      </div>
    </main>
  );
}
