// pages/products/[id].tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { products } from "../../data/products";
import { Product, Variant } from "../../models/product";
import Image from "next/image";
import "../../app/globals.css";
import Header from "../../components/Header";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product: Product | undefined = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product?.variants ? product.variants[0] : null
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto my-10 p-6 shadow-md mb-4 mt-16 flex justify-between items-center flex-col">
        <h1 className="heading">{product.name}</h1>
        <div className="imagediv">
          <Image
            alt={product.name}
            src={product.imageUrl}
            width={300}
            height={200}
          />
        </div>
        <p>{product.description}</p>

        {product.variants && product.variants.length > 0 && (
          <div className="mt-4">
            <label
              htmlFor="variant"
              className="block mb-2 text-md text-gray-900"
            >
              Choose a variant:
            </label>
            <select
              id="variant"
              className="block p-2 w-full text-sm border-gray-500"
              onChange={(e) => {
                const variantId = e.target.value;
                const variant = product.variants?.find(
                  (v) => v.id === variantId
                );
                if (variant) setSelectedVariant(variant);
              }}
              value={selectedVariant ? selectedVariant.id : ""}
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
