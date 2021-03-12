import React from "react";
import { Trash } from "phosphor-react";
import { useDispatch } from "react-redux";

const CartRemoveIcon = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    console.log("removing item with id, ", id);
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };

  return <Trash onClick={handleRemove} size={24} />;
};

export default CartRemoveIcon;
