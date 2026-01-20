import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductCard({
  imageUrl,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="bg-gray-100 w-70 flex flex-col items-center border-0 rounded-sm">
      <div className="border-0 rounded-sm">
        <img
          src={imageUrl}
          alt="Product image"
          className="border-0 rounded-sm"
        />
      </div>
      <div className="flex flex-col items-start w-full p-5">
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
        <h5>$ {price}</h5>
        <button className="bg-blue-500 text-white border-0 rounded-sm p-2 w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}
