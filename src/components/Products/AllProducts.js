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

const AllProducts = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    status,
    isSorted,
  } = useSelector((state) => state.product);

  // console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCartHandler = (product) => {
    dispatch(cartAction.add(product));
    window.alert("Added to cart Successfully");
  };

  if (status === STATUSES.LOADING) {
    return <h1 style={{ textAlign: "center" }}>Products Loading.....</h1>;
  }
  if (status === STATUSES.ERROR) {
    return <h1 style={{ textAlign: "center" }}>Something Went Wrong!.....</h1>;
  }

  const sortHandler = () => {
    dispatch(productsAction.sort(true));
  };
  const cancelSortHandler = () => {
    dispatch(productsAction.sort(false));
  };

  const editProductHandler = (id) => {
    dispatch(productsAction.select(id));
  };
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
        <h1 style={{ textAlign: "center" }}>All Products</h1>
        {!isSorted && <button onClick={sortHandler}>Sort by Price</button>}
        {isSorted && (
          <button onClick={cancelSortHandler}>
            Sort by Price <i className="fa-solid fa-circle-xmark"></i>
          </button>
        )}
      </div>

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
            <h3 className={styles.productName}>{product.name}</h3>
            <h3 className={styles.productPrice}>Rs.{product.price}</h3>
            <div className={styles.productBtnsContainer}>
              <Link to={`edit-product/${product.id}`}>
                <button
                  onClick={() => editProductHandler(product.id)}
                  className={styles.editBtn}
                >
                  Edit
                </button>
              </Link>
              <button
                onClick={() => window.alert("Product Deleted Successfully..")}
                className={styles.delBtn}
              >
                Delete
              </button>
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
