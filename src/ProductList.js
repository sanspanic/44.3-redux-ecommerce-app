import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((store) => store.products);
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          {Object.keys(products).map((id) => (
            <Product
              key={id}
              name={products[id].name}
              price={products[id].price}
              src={products[id].image_url}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductList;
