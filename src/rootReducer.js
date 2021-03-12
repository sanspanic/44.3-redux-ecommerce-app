import { act } from "react-dom/test-utils";
import data from "./data.json";

const INITIAL_STATE = { products: data.products, cartItems: {}, totalPrice: 0 };
// cartItems: {id: quantity, id:quantity, ...}
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartItemsCopy = { ...state.cartItems };
      if (!cartItemsCopy[action.id]) {
        cartItemsCopy[action.id] = 1;
      } else {
        cartItemsCopy[action.id] += 1;
      }

      let newPrice = 0;
      for (const [key, value] of Object.entries(cartItemsCopy)) {
        newPrice += value * state.products[key].price;
      }
      return {
        ...state,
        cartItems: cartItemsCopy,
        totalPrice: newPrice,
      };
    }
    case "REMOVE_FROM_CART": {
      const cartItemsCopy = { ...state.cartItems };

      console.log("cartItemsCopy is", cartItemsCopy[action.id]);

      const newPrice =
        state.totalPrice -
        cartItemsCopy[action.id] * state.products[action.id].price;

      delete cartItemsCopy[action.id];

      return {
        ...state,
        cartItems: cartItemsCopy,
        totalPrice: newPrice,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
