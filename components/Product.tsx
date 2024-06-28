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
    <div>
      <Image
        alt={product.name}
        src={product.imageUrl}
        width={200}
        height={200}
      />
      <Link href={`/product/${product.id}`}>Details</Link>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
}
