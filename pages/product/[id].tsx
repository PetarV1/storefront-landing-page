// pages/products/[id].tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import { products } from "../../data/products";
import { Product, Variant } from "../../models/product";
import Image from "next/image";

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
    <div className="container mx-auto my-10 p-6 bg-white shadow-md">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <Image
        alt={product.name}
        src={product.imageUrl}
        width={200}
        height={200}
      />
      <p>{product.description}</p>

      {product.variants && product.variants.length > 0 && (
        <div className="mt-4">
          <label htmlFor="variant" className="block mb-2 text-sm text-gray-900">
            Choose a variant:
          </label>
          <select
            id="variant"
            className="block p-2 w-full text-sm border-gray-500"
            onChange={(e) => {
              const variantId = e.target.value;
              const variant = product.variants?.find((v) => v.id === variantId);
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
  );
};

export default ProductDetails;
