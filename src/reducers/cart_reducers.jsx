import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from "../actions";
const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, color, product } = action.payload;
    console.log(product);
    const tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  return { ...state };
};
export default reducer;
