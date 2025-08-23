import { Route, Routes } from "react-router";
import Projects from "./components/Projects/Projects";
// import About from "./About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ProjectsCategory from "./components/ProjectsCategory/ProjectsCategory";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import NewProjects from "./components/Projects/NewProject";

export const navItems = [
  { to: "/", name: "Home", element: <Home /> },
  { to: "/projects", name: "Projecten", element: <NewProjects /> },
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
        <Route path="/projects/:category/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
