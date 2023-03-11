import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_SEARCH,
  UPDATE_FILTERS,
} from "../actions";
const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const tempPrice = action.payload.map((item) => item.price);
    const findMax = Math.max(...tempPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: findMax, price: findMax },
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    console.log(action.payload);
    return { ...state, select_option: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { select_option, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (select_option === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.price - b.price;
      });
      return { ...state, filtered_products: tempProducts };
      console.log("jestesm lowest");
    }
    if (select_option === "price-highest") {
      console.log("jestesm highest");
      tempProducts = tempProducts.sort((a, b) => {
        return b.price - a.price;
      });
      return { ...state, filtered_products: tempProducts };
    }
    if (select_option === "name-a") {
      console.log("name a");
      tempProducts = tempProducts.sort((a, b) => {
        return a.Name.localeCompare(b.Name);
      });
      return { ...state, filtered_products: tempProducts };
    }
    if (select_option === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.Name.localeCompare(a.Name);
      });
      return { ...state, filtered_products: tempProducts };
      console.log("name z");
    }
    return { ...state };
  }
  if (action.type === UPDATE_SEARCH) {
    const { name, value } = action.payload;

    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === UPDATE_FILTERS) {
    console.log("update filters");
    return { ...state };
  }
  return state;
};
export default filterReducer;
