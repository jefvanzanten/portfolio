import { NavLink } from "react-router";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Hamburger from "../Hamburger/Hamburger";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.navcontainer}>
      <nav>
        <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
        <NavLink
          to="/"
          end
          className={`${styles.navlink} ${styles.logo}`}
          onClick={closeMenu}
        >
          JEFVANZANTEN.DEV
        </NavLink>

        <div className={`${styles.navlist} ${isMenuOpen ? styles.open : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.active}`
                : `${styles.navlink}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.active}`
                : `${styles.navlink}`
            }
            onClick={closeMenu}
          >
            Projecten
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.active}`
                : `${styles.navlink}`
            }
            onClick={closeMenu}
          >
            Over mij
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.active}`
                : `${styles.navlink}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
