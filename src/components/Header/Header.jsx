import { Link } from "react-router-dom";

import NavBar from "../Navbar/Navbar";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>
        <Link to="/">Your List</Link>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
