import React, { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ productsPromise }) => {
  const products = use(productsPromise);
  return (
    <div>
      <div className="max-w-300 mx-auto px-2 mt-10 mb-20 md:mb-30 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
