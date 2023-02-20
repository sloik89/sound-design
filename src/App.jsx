import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Home, About, Cart, SingleProduct, Products, Error } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
