import React, { useState, useEffect, useContext, useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from "../actions";
import reducer from "../reducers/cart_reducers";
const checkLocalStorage = () => {
  if (localStorage.getItem("cart")) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: checkLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534 / 100,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // add to cart
  const addToCart = (id, amount, color, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, color, product } });
  };
  //   remove item
  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  //   toggle cart
  const toggleAmount = (id, value) => {
    // console.log(id, value);
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  // clear cart
  const clearCart = () => {
    console.log("clear cart");
    dispatch({ type: CLEAR_CART });
  };
  // set local storage
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
