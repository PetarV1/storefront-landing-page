import React from "react";
import { useRouter } from "next/router";
import { products } from "../../data/products";
import Image from "next/image";
import "../../app/globals.css";
import Header from "../../components/Header";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Header />
      <Image
        alt={product.name}
        src={product.imageUrl}
        width={200}
        height={200}
      />
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}
