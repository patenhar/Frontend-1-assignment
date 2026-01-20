import React from "react";
import ProductCard from "../Components/ProductCard";
import image from "../assets/64c590c754d6bc13ebd90cbc_ai_product_photo_styles.jpg";
import { v4 as uuidv4 } from "uuid";

const products = [
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-1",
    description: "Product-1",
    price: 11,
    quantity: 1,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-2",
    description: "Product-2",
    price: 543,
    quantity: 2,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-3",
    description: "Product-3",
    price: 33,
    quantity: 3,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-4",
    description: "Product-4",
    price: 871,
    quantity: 4,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-5",
    description: "Product-5",
    price: 55,
    quantity: 5,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-5",
    description: "Product-5",
    price: 55,
    quantity: 6,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-5",
    description: "Product-5",
    price: 555,
    quantity: 7,
  },
  {
    id: uuidv4(),
    imageUrl: image,
    title: "Product-5",
    description: "Product-5",
    price: 55,
    quantity: 8,
  },
];

export default function Home() {
  return (
    <div className="p-10 gap-10 flex flex-wrap justify-start">
      {products.map((product) => (
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
