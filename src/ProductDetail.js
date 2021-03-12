import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Trash, ShoppingCart } from "phosphor-react";
import CartIcon from "./CartIcon";
import CartRemoveIcon from "./CartRemoveIcon";

const ProductDetail = () => {
  const { id } = useParams();
  const { name, description, image_url, price } = useSelector(
    (store) => store.products[id]
  );

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              Product Name
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              {name}
            </h1>
            <div class="flex mb-4">
              <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
            </div>
            <p class="leading-relaxed mb-4">{description}</p>
            {/*             <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Color</span>
              <span class="ml-auto text-gray-900">Blue</span>
            </div>
            <div class="flex border-t border-gray-200 py-2">
              <span class="text-gray-500">Size</span>
              <span class="ml-auto text-gray-900">Medium</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-200 py-2">
              <span class="text-gray-500">Quantity</span>
              <span class="ml-auto text-gray-900">1</span>
            </div> */}
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                <CartIcon id={id} />
              </button>
              <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <CartRemoveIcon id={id} />
              </button>
            </div>
          </div>
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image_url}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
