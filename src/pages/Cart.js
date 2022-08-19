import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/UI/Card";
import { cartAction } from "../store/cartSlice";
import styles from "./css/Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  // this contains the cart items imported from redux store using useSelector function
  const cartItems = useSelector((state) => state.cart);

  // this manages the remove product from cart function
  const removeItemFromCartHandler = (id) => {
    // this sends the id of the item to be removed from cart to the redix store
    dispatch(cartAction.remove(id));
    // this will show alert notificationn on screen after success
    window.alert("Item removed from cart successfully");
  };

  return (
    <div>
      <h1>
        MyCart <i className="fas fa-shopping-cart"></i>
      </h1>
      {/* this will show cart id empty is=f the cart is empty */}
      {cartItems.length === 0 && <h1>Cart is Empty!!</h1>}
      <div className={styles.cartWrapper}>
        {cartItems.map((item) => (
          <Card>
            <div className={styles.cartItemContainer}>
              <img className={styles.cartImg} src={item.image} alt="img" />
              <h3>{item.name}</h3>
              <h4>Rs: {item.price}</h4>
              <button
                onClick={() => removeItemFromCartHandler(item.id)}
                className={styles.removeBtn}
              >
                Remove
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
