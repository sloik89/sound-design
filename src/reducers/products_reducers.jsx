import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../actions";
const productsReducers = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    console.log("jestem");
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  return state;
};
export default productsReducers;
