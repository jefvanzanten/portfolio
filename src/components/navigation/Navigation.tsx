import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Hamburger from "../Hamburger/Hamburger";
import { navItems } from "../Router";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Vind de actieve tab op basis van de URL
  const activeItem =
    navItems.find((item) => item.to === location.pathname) ?? navItems[0]; // fallback

  const toggleMenu = () => setIsMenuOpen((o) => !o);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.navcontainer}>
      <nav>
        <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />

        {/* Logo (and pagetitle for mobile) */}
        <NavLink
          to="/"
          end
          className={`${styles.navlink} ${styles.logo}`}
          onClick={closeMenu}
        >
          JEFVANZANTEN.DEV
        </NavLink>
        <div className={styles.pageName}>{activeItem.name}</div>

        {/* Dynamic NavLinks based on array */}
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
