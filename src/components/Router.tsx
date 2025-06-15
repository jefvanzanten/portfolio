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

// export const projectNavItems = [
//   {
//     to: "/projects/recent",
//     name: "Recent",
//     element: <ProjectCategory category="Recent" />,
//   },
//   {
//     to: "/projects/frontend",
//     name: "Frontend",
//     element: <ProjectCategory category="Frontend" />,
//   },
//   {
//     to: "/projects/backend",
//     name: "Backend",
//     element: <ProjectCategory category="Backend" />,
//   },
//   {
//     to: "/projects/fullstack",
//     name: "Fullstack",
//     element: <ProjectCategory category="Fullstack" />,
//   },
//   {
//     to: "/projects/mobile",
//     name: "Mobile",
//     element: <ProjectCategory category="Mobile" />,
//   },
// ];

export default function Router() {
  return (
    <>
      <Routes>
        {navItems.map((item) => (
          <Route key={item.to} path={item.to} element={item.element} />
        ))}
        {/* {projectNavItems.map((item) => (
          <Route key={item.to} path={item.to} element={item.element} />
        ))} */}
        <Route path="/projects/:category" element={<ProjectsCategory />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
