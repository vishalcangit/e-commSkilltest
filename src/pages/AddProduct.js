import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import styles from "./css/AddProduct.module.css";

const AddProduct = () => {
  const navigateBack = useNavigate();

  const addProductHandler = () => {
    // this will alert the  user if the product will be added
    window.alert("Product Added Successfully");
    // this will bring back the user to the home page apter the product is added
    navigateBack("/");
  };
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
            <textarea required rows={5} cols={101}></textarea>
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
          <button
            onClick={addProductHandler}
            className={styles.addProductButton}
          >
            Add Product
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
