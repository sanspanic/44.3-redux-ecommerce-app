import { act } from "react-dom/test-utils";
import data from "./data.json";

const INITIAL_STATE = { products: data.products, cartItems: {} };
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
      return {
        ...state,
        cartItems: cartItemsCopy,
      };
    }
    case "REMOVE_FROM_CART": {
      console.log("tryna remove");
      const cartItemsCopy = { ...state.cartItems };
      delete cartItemsCopy[action.id];
      return {
        ...state,
        cartItems: cartItemsCopy,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
