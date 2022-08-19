import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/UI/Card";
import { cartAction } from "../store/cartSlice";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.product);
  const addToCartHandler = (product) => {
    dispatch(cartAction.add(product));
  };
  return (
    <div>
      <h1>Product Details.</h1>
      <Card>
        <div className={styles.productDetails}>
          <img className={styles.image} src={selectedProduct.image}></img>
          <div className={styles.detailsWrapper}>
            <h1>{selectedProduct.name}</h1>
            <h3>{selectedProduct.description}</h3>
            <h1>Rs :{selectedProduct.price}</h1>
            <button
              onClick={() => addToCartHandler(selectedProduct)}
              className={styles.addCartBtn}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
