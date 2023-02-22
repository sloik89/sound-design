import React, { useState, useEffect, useContext, useReducer } from "react";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actions";
import reducer from "../reducers/products_reducers";
const initialState = {
  isSidebarOpen: false,
};
const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  return (
    <ProductsContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        ...state,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
