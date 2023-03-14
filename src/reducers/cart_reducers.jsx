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

    const tempItem = state.cart.find((item) => item.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((item) => {
        if (item.id === id + color) {
          let tempAmount = item.amount + amount;
          if (tempAmount > item.max) {
            tempAmount = item.max;
          }
          return { ...item, amount: tempAmount };
        }
        return item;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.Name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    console.log("remove item reducer");
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    console.log("remove cart");
    return { ...state, cart: [] };
  }
  if ((action.type = TOGGLE_CART_ITEM_AMOUNT)) {
    const { id, value } = action.payload;
    console.log(value);
    return { ...state };
  }
  return { ...state };
};
export default reducer;
