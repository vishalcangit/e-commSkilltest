import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import EditProduct from "./pages/EditProduct";
import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* navbar added */}
      <Navbar />
      {/* reacr router is used hende router is there */}
      <Routes>
        {/* routes for diff paths */}
        {/* this brings us to home */}
        <Route path="/" element={<Home />} />
        {/* this brings us to cart page*/}
        <Route path="cart" element={<Cart />} />
        {/* this brings us to add product page */}
        <Route path="add-product" element={<AddProduct />} />
        {/* this brings us to edit product page */}
        <Route path="edit-product/:productId" element={<EditProduct />} />
        {/* this brings us to product details page */}
        <Route path="product-details/:productId" element={<ProductDetails />} />
        {/* this brings us to error page if wrong url is entered */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
