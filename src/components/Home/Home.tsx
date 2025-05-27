import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="home-container">
        <img className="home-profile-pic" src="profile_pic_elipse.png" />
        <p>
          Welkom op mijn website. Hier kan je de projecten inzien waar ik mijn
          meest relevante kennis laat zien op het gebied van frontend, backend
          en native Android technologiën en de onderbouwing van keuzes die
          gemaakt zijn tijdens deze projecten. Mocht je vragen hebben neem dan
          gerust contact met mij op{" "}
          <a className="inline-link" href="/contact">
            hier
          </a>
          .
        </p>
      </div>
    </main>
  );
}
