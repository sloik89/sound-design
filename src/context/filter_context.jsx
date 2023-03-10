import React, { useState, useEffect, useContext, useReducer } from "react";
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_SEARCH,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
} from "../actions";
import reducer from "../reducers/products_reducers";
import axios from "axios";
import { useProductsContext } from "./products_context";
import filterReducer from "../reducers/filter_reducers";
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: false,
  select_option: "price-lowest",
  filters: {
    inputSearch: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};
const FilterContext = React.createContext();
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);
  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW });
  };
  const handleSelect = (e) => {
    const { name, value } = e.target;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let { name, value } = e.target;

    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
      console.log(e.target.checked);
    }
    dispatch({ type: UPDATE_SEARCH, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  useEffect(() => {
    dispatch({ type: UPDATE_FILTERS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.select_option, state.filters]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSelect,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
