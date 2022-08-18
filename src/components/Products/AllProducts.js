import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./AllProducts.module.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/vishalcangit/e-commerce_database/items"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>All Products</h1>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} className={styles.productImg} />
            <h3 className={styles.productName}>{product.name}</h3>
            <h3 className={styles.productPrice}>Rs.{product.price}</h3>
            <div className={styles.productBtnsContainer}>
              <button className={styles.editBtn}>Edit</button>
              <button className={styles.delBtn}>Delete</button>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AllProducts;
