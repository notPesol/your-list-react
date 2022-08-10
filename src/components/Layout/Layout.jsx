import React from "react";
import Header from "../Header/Header";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children && <main className={styles.Main}>{children}</main>}
    </React.Fragment>
  );
};

export default Layout;
