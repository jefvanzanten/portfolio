import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Hamburger from "../Hamburger/Hamburger";
import { navItems } from "../Router";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const activeItem =
    navItems.find((item) => item.to === location.pathname) ?? navItems[0];

  const toggleMenu = () => setIsMenuOpen((o) => !o);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.navcontainer}>
      <nav className={styles.nav}>
        <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />

        <NavLink
          to="/"
          end
          className={`${styles.navlink} ${styles.logo}`}
          onClick={closeMenu}
        >
          JEFVANZANTEN.DEV
        </NavLink>
        <div className={styles.pageName}>{activeItem.name}</div>

        <div className={`${styles.navlist} ${isMenuOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
              }
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
