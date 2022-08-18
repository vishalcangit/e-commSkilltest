import React from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./Nabar.module.css";

const Navbar = () => {
  return (
    <Card>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.logoContainer}>
          <span className={styles.logo}>CrickShop</span>
        </Link>
        <div className={styles.navlinksContainer}>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? styles.active : styles.nav)}
          >
            Home
          </NavLink>
          <NavLink
            to="add-product"
            className={(nav) => (nav.isActive ? styles.active : styles.nav)}
          >
            Add Product
          </NavLink>
          <NavLink
            to="cart"
            className={(nav) => (nav.isActive ? styles.active : styles.nav)}
          >
            MyCart 0
          </NavLink>
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
