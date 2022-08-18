import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="add-product" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
