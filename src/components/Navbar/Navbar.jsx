import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <li>
          <NavLink to="/add-category">เพิ่มหมวดหมู่</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
