import NavBar from "../Navbar/Navbar";

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Your List</h1>
      <NavBar />
    </header>
  );
};

export default Header;
