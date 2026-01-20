import React from "react";
import ProductCard from "../Components/ProductCard";
import ProductForm from "../Components/ProductForm";

export default function Home() {
  const storage = Object.values({ ...localStorage });
  console.log(storage);
  const products = storage.map((item, idx) => JSON.parse(item));

  return (
    <div className="p-10 gap-10 flex flex-wrap justify-start">
      <ProductForm />

      {products &&
        products.map((product) => (
          <ProductCard
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
          />
        ))}
    </div>
  );
}
