import React, { useState, useEffect, useContext, useReducer } from "react";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from "../actions";
import reducer from "../reducers/cart_reducers";
const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
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
  };
  //   toggle cart
  const toggleAmount = (id, value) => {
    console.log(id, value);
  };
  // clear cart
  const clearCart = () => {
    console.log("clear cart");
  };
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
