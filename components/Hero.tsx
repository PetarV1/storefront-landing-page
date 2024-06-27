import Image from "next/image";
import React from "react";
import { products } from "../data/products";

export default function Hero() {
  return (
    <div>
      <h1>Product Grid</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Image
              alt={product.name}
              src={product.imageUrl}
              width={200}
              height={200}
            />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
