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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="edit-product/:productId" element={<EditProduct />} />
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
