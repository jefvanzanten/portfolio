import { Route, Routes } from "react-router";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}
