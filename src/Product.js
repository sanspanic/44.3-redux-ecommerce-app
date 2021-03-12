import React from "react";
import { Link } from "react-router-dom";
import { Trash, ShoppingCart } from "phosphor-react";
import CartIcon from "./CartIcon";

const Product = ({ name, src, price, id }) => {
  const handleAdd = () => {};
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        to={`item/${id}`}
        class="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="product"
          class="object-cover object-center w-full h-full block"
          src={src}
        />
      </Link>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs mb-1 flex justify-end">
          <button
            onClick={handleAdd}
            class="text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded"
          >
            <CartIcon id={id} />
          </button>
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
        <p class="mt-1">${price}</p>
      </div>
    </div>
  );
};

export default Product;
