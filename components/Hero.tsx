"use client";
import React, { useState } from "react";
import { products } from "../data/products";
import Product from "./Product";

export default function Hero() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.collection === filter);

  return (
    <div>
      <div className="container mx-auto ">
        <div className="mb-4 mt-16 flex justify-between items-center flex-col">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="Accessories">Accessories</option>
            <option value="Winter clothes">Winter clothes</option>
            <option value="Summer clothes">Summer clothes</option>
          </select>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
