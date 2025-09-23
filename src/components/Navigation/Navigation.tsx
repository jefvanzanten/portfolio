import { matchPath, NavLink, useLocation } from "react-router";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Hamburger from "../Hamburger/Hamburger";
import { navItems } from "../../Router";

export default function Navigation() {
  // state used for the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // variable that saves the current location
  const location = useLocation();

  // Save the active navigation item in a variable
  const activeItem =
    navItems.find((item) =>
      matchPath(
        { path: item.to === "/" ? "/" : `${item.to}/*`, end: item.to === "/" },
        location.pathname
      )
    ) ?? navItems[0];

  // Toggle function for the hamburger menu
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  // If the menu is toggled and the user clicked a link it needs to close the menu
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
        <NavLink to={activeItem.to} className={styles.pageName}>
          {activeItem.name}
        </NavLink>

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
