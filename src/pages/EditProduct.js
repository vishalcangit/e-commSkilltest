import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/UI/Card";
import styles from "./EditProduct.module.css";

const EditProduct = () => {
  const navigateBack = useNavigate();
  const param = useParams();
  const { selectedProduct } = useSelector((state) => state.product);
  console.log(selectedProduct);
  const [name, setName] = useState(selectedProduct.name);
  const [desc, setDesc] = useState(selectedProduct.description);
  const [price, setPrice] = useState(selectedProduct.price);

  const updateBtnClicked = (e) => {
    e.preventDefault();
    setName("");
    setPrice("");
    setDesc("");
    window.alert("Product Updated Successfully");
    navigateBack("/");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Edit Product</h1>
      <Card>
        <form onSubmit={updateBtnClicked}>
          <label>Product Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
          <label>Product Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <label>Product Description</label>
          <input value={desc} onChange={(e) => setDesc(e.target.value)}></input>
          <label>Product Image</label>
          <input type="file"></input>
          <button>Update Details</button>
        </form>
      </Card>
    </div>
  );
};

export default EditProduct;
