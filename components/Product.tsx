import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import { Product as ProductType } from "../models/product";

interface Props {
  product: ProductType;
}

export default function Product({ product }) {
  return (
    <div
      key={product.id}
      className="relative flex justify-center items-center flex-col"
    >
      <Image
        className=""
        alt={product.name}
        src={product.imageUrl}
        width={230}
        height={350}
      />
      <Link
        className="bg-mainPurple hover:bg-purple-500 mt-6 text-white text-md font-size: 0.75rem py-2 px-8 shadow-md rounded transition duration-200 ease-in-out"
        href={`/product/${product.id}`}
      >
        Details
      </Link>
      <h2 className="mt-3">{product.name}</h2>
      <p className="text-mainPurple">${product.price.toFixed(2)}</p>
    </div>
  );
}
