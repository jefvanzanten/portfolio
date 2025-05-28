import { Route, Routes } from "react-router";
import Projects from "./Projects/Projects";
// import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

export const navItems = [
  { to: "/", name: "Home" },
  { to: "/projects", name: "Projecten" },
  // { to: "/about", name: "Over mij" },
  { to: "/contact", name: "Contact" },
];

export default function Router() {
  return (
    <>
      <Routes>
        <Route path={navItems[0].to} element={<Home />} />
        <Route path={navItems[1].to} element={<Projects />} />
        {/* <Route path={navItems[2].to} element={<About />} /> */}
        <Route path={navItems[3].to} element={<Contact />} />
      </Routes>
    </>
  );
}
