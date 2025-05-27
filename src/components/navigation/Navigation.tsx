import { NavLink } from "react-router";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navcontainer">
      <img src="hamburger.png" className="hamburger" />
      <nav>
        <NavLink to="/" end className="navlink home">
          JEFVANZANTEN.DEV
        </NavLink>
        <ol className="navlist">
          <NavLink
            to="/projects"
            end
            className={({ isActive }) =>
              isActive ? "navlink active-link" : "navlink"
            }
          >
            Projecten
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navlink active-link" : "navlink"
            }
          >
            Over mij
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "navlink active-link" : "navlink"
            }
          >
            Contact
          </NavLink>
        </ol>
      </nav>
    </div>
  );
}
