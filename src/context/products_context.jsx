import React, { useState, useEffect, useContext, useReducer } from "react";
import {
  CLOSE_SIDEBAR,
  OPEN_SIDEBAR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  OPEN_PRODUCTS_IMAGE_MODAL,
  CLOSE_PRODUCTS_IMAGE_MODAL,
} from "../actions";
import reducer from "../reducers/products_reducers";
import axios from "axios";
import { ProductsUrl as url } from "../utilis/constants";
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  products_image_modal: false,
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
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data } = await axios.get(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const { data } = await axios.get(url);

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  const displayProductsImageModal = () => {
    dispatch({ type: OPEN_PRODUCTS_IMAGE_MODAL });
  };
  const closeProductsImageModal = () => {
    dispatch({ type: CLOSE_PRODUCTS_IMAGE_MODAL });
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        displayProductsImageModal,
        closeProductsImageModal,
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
