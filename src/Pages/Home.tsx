import React from "react";
import ProductCard from "../Components/ProductCard";
import image from "../assets/OIP.jpg";

const products = [
  { imageUrl: image, title: "Product-1", description: "Product-1", price: 11 },
  { imageUrl: image, title: "Product-2", description: "Product-2", price: 22 },
  { imageUrl: image, title: "Product-3", description: "Product-3", price: 33 },
  { imageUrl: image, title: "Product-4", description: "Product-4", price: 44 },
  { imageUrl: image, title: "Product-5", description: "Product-5", price: 55 },
  { imageUrl: image, title: "Product-5", description: "Product-5", price: 55 },
  { imageUrl: image, title: "Product-5", description: "Product-5", price: 55 },
  { imageUrl: image, title: "Product-5", description: "Product-5", price: 55 },
];

export default function Home() {
  return (
    <div className="p-10 gap-10 flex flex-wrap justify-start">
      {products.map((product, idx) => (
        <ProductCard
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.description}
          price={product.price}
          key={idx}
        />
      ))}
    </div>
  );
}
