import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Common/header/Header";
import Pages from "./pages/Pages";
import Data from "./Components/flashDeals/Data";
import Cart from "./Common/Cart/Cart";
import Login from "./Components/Login/Login";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
function App() {
  const { productItems } = Data;
  // const { shopItems } = Sdata;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id)); // it removes the product from the cart.
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages productItems={productItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products productItems={productItems} addToCart={addToCart} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
