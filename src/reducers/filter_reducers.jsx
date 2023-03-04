import { LOAD_PRODUCTS, SET_GRID_VIEW, SET_LIST_VIEW } from "../actions";
const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // why spread operator in array
    // couse both value point the same place in the memory
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LIST_VIEW) {
    return { ...state, grid_view: false };
  }
  return state;
};
export default filterReducer;
