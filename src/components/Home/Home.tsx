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
        <h1>
          Hallo, mijn naam is Jef. <br />
          Ik ben een full-stack- en mobile developer.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet tincidunt erat id fermentum. Vestibulum rhoncus mauris dui,
          ac cursus augue consequat{" "}
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
