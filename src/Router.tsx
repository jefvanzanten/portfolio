import { Route, Routes } from "react-router";
// import About from "./About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

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
      </Routes>
    </>
  );
}
