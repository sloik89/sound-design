import React, { useState, useEffect, useContext, useReducer } from "react";
import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW } from "../actions";
import reducer from "../reducers/products_reducers";
import axios from "axios";
import { useProductsContext } from "./products_context";
import filterReducer from "../reducers/filter_reducers";
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: false,
};
const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();

  const [state, dispatch] = useReducer(filterReducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
    console.log(products);
  }, [products]);
  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
