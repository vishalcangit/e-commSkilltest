import React from "react";
import Card from "../components/UI/Card";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add a new Product...</h1>
      <Card>
        <form>
          <div>
            <label>Enter product Name : </label>
            <input required type="text"></input>
          </div>
          <div>
            <label>Enter product Description : </label>
            <textarea required rows={5} cols={50}></textarea>
          </div>
          <div>
            <label>Enter product Price : </label>
            <input required type="number"></input>
          </div>
          <div>
            <label>Attach product Image : </label>
            <input
              required
              type="file"
              placeholder="attac product image"
            ></input>
          </div>
          <button className={styles.addProductButton}>Add Product</button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
