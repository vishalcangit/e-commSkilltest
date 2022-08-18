import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./Nabar.module.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

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
            MyCart {cartItems.length}
          </NavLink>
        </div>
      </div>
    </Card>
  );
};

export default Navbar;
