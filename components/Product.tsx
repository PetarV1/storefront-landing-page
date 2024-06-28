import React from "react";
import Image from "next/image";

export default function Product({ product }) {
  return (
    <>
      <Image
        alt={product.name}
        src={product.imageUrl}
        width={200}
        height={200}
      />

      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </>
  );
}
