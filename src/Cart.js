import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartRemoveIcon from "./CartRemoveIcon";

const Cart = () => {
  const cartItems = useSelector((store) => store.cartItems);
  const products = useSelector((store) => store.products);

  let totalItems = 0;
  for (const [key, value] of Object.entries(cartItems)) {
    totalItems += cartItems[key];
  }

  return (
    <div>
      <div>Total number of products in cart: {totalItems}</div>
      <ul>
        {Object.keys(cartItems).map((id) => (
          <li>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link
                to={`item/${id}`}
                class="block relative h-48 rounded overflow-hidden"
              >
                <img
                  alt="product"
                  class="object-cover object-center w-full h-full block"
                  src={products[id].image_url}
                />
              </Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-md mb-1 flex justify-between">
                  <div>Quantity: {cartItems[id]}</div>
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <CartRemoveIcon id={id} />
                  </button>
                </h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {products[id].name}
                </h2>
                <p class="mt-1">${products[id].price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
