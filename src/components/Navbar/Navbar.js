import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./Nabar.module.css";

const Navbar = () => {
  // redux is used to fetch the cart items stored in it
  const cartItems = useSelector((state) => state.cart);

  return (
    <Card>
      <div className={styles.navbarContainer}>
        {/*this is an logo with the link to home page */}
        <Link to="/" className={styles.logoContainer}>
          <span className={styles.logo}>CrickShop</span>
        </Link>
        {/* this contains th navigatio links  */}
        <div className={styles.navlinksContainer}>
          {/* the navlink for Home page */}
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? styles.active : styles.nav)}
          >
            Home
          </NavLink>
          {/* the navlink for Add new product page */}
          <NavLink
            to="add-product"
            className={(nav) => (nav.isActive ? styles.active : styles.nav)}
          >
            Add Product
          </NavLink>
          {/* the navlink for cart page with a count of items in it  */}
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
