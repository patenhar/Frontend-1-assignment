import React from "react";
import ProductCard from "../Components/ProductCard";
import ProductForm from "../Components/ProductForm";
import TotalProducts from "../Components/TotalProducts";
import TotalInventoryValue from "../Components/TotalInventoryValue";
import LowStockAlert from "../Components/LowStockAlert";

export default function Home() {
  const storage = Object.values({ ...localStorage });
  console.log(storage);
  const products = storage.map((item, idx) => JSON.parse(item));

  return (
    <div className="p-10 gap-10 flex flex-wrap justify-start">
      <div className="flex w-full gap-10">
        <TotalProducts />
        <TotalInventoryValue />
        <LowStockAlert />
      </div>
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
