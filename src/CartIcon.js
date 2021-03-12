import React from "react";
import { ShoppingCart } from "phosphor-react";
import { useDispatch } from "react-redux";

const CartIcon = ({ id }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_CART", id: id });
  };

  return <ShoppingCart onClick={handleAdd} size={24} />;
};

export default CartIcon;
