import { Route, Routes } from "react-router";
import Projects from "./Projects/Projects";
// import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import ProjectsCategory from "./ProjectsCategory/ProjectsCategory";
import ProjectPage from "./ProjectPage/ProjectPage";

export const navItems = [
  { to: "/", name: "Home", element: <Home /> },
  { to: "/projects", name: "Projecten", element: <Projects /> },
  // { to: "/about", name: "Over mij", element: <About /> },
  { to: "/contact", name: "Contact", element: <Contact /> },
];

export default function Router() {
  return (
    <>
      <Routes>
        {navItems.map((item) => (
          <Route key={item.to} path={item.to} element={item.element} />
        ))}
        <Route path="/projects/:category" element={<ProjectsCategory />} />
        <Route path="/projects/:category/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
