import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../store/cartSlice";
import {
  fetchProducts,
  productsAction,
  STATUSES,
} from "../../store/productsSlice";
import styles from "./AllProducts.module.css";

// all the products are fetched from the redux store
const AllProducts = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    status,
    isSorted,
  } = useSelector((state) => state.product);

  // its used to fetch the products from api
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // this function is used to add the prodct in cart via redux
  const addToCartHandler = (product) => {
    dispatch(cartAction.add(product));
    window.alert("Added to cart Successfully");
  };

  // this handles the states/ errors
  if (status === STATUSES.LOADING) {
    return <h1 style={{ textAlign: "center" }}>Products Loading.....</h1>;
  }
  // this handles the states/ errors
  if (status === STATUSES.ERROR) {
    return <h1 style={{ textAlign: "center" }}>Something Went Wrong!.....</h1>;
  }

  // this handles the sortByPrice via redux
  const sortHandler = () => {
    dispatch(productsAction.sort(true));
  };
  // this will cancel the sort and display the products as they were before
  const cancelSortHandler = () => {
    dispatch(productsAction.sort(false));
  };
  // this takes user th a page to edit the existing product
  const editProductHandler = (id) => {
    dispatch(productsAction.select(id));
  };
  // this takes user th a page to see the existing product details
  const productDetailsHandler = (id) => {
    dispatch(productsAction.select(id));
  };

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 2rem",
        }}
      >
        {/* the heading of the page */}
        <h1 style={{ textAlign: "center" }}>All Products</h1>
        {/* sort button */}
        {!isSorted && <button onClick={sortHandler}>Sort by Price</button>}
        {/* cancel sort button */}
        {isSorted && (
          <button onClick={cancelSortHandler}>
            Sort by Price <i className="fa-solid fa-circle-xmark"></i>
          </button>
        )}
      </div>
      {/* products container */}
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link to={`product-details/${product.name}`}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.productImg}
                onClick={() => productDetailsHandler(product.id)}
              />
            </Link>
            {/* product info  */}
            <h3 className={styles.productName}>{product.name}</h3>
            <h3 className={styles.productPrice}>Rs.{product.price}</h3>
            <div className={styles.productBtnsContainer}>
              {/* edit product btn */}
              <Link to={`edit-product/${product.id}`}>
                <button
                  onClick={() => editProductHandler(product.id)}
                  className={styles.editBtn}
                >
                  Edit
                </button>
                {/* delete product btn */}
              </Link>
              <button
                onClick={() => window.alert("Product Deleted Successfully..")}
                className={styles.delBtn}
              >
                Delete
              </button>
              {/* add to cart btn */}
              <button
                onClick={() => addToCartHandler(product)}
                className={styles.addToCartBtn}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default AllProducts;
