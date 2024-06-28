import Image from "next/image";
import React from "react";
import { products } from "../data/products";
import Product from "./Product";

export default function Hero() {
  return (
    <div className="container mx-auto my-96 bg-cyan-600">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        <h1>Product Grid</h1>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
