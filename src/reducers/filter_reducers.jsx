import { LOAD_PRODUCTS } from "../actions";
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
  return state;
};
export default filterReducer;
