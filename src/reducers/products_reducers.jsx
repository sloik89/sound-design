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
const productsReducers = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    console.log("jestem");
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter((item) => item.featured);

    return {
      ...state,
      products: action.payload,
      featured_products,
      products_loading: false,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }
  if (action.type === OPEN_PRODUCTS_IMAGE_MODAL) {
    return { ...state, products_image_modal: true };
  }
  if (action.type === CLOSE_PRODUCTS_IMAGE_MODAL) {
    return { ...state, products_image_modal: false };
  }
  return state;
};
export default productsReducers;
