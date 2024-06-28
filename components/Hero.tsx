"use client";
import Image from "next/image";
import React, { useState } from "react";
import { products } from "../data/products";
import Product from "./Product";
import Link from "next/link";

export default function Hero() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.collection === filter);

  return (
    <div>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
      </select>
      <div className="container mx-auto my-10 bg-cyan-600">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
          <h1>Product Grid</h1>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
