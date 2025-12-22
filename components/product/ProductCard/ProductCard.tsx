"use client";

import Image from "next/image";
import ProductBadge from "./ProductBadge";
import ProductPrice from "./ProductPrice";
import { useCartStore } from "@/store/cartStore";

type Product = {
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  reviewCount?: number;
  id: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
      {/* Save Badge */}
      <div className="absolute top-4 left-4 z-10">
        <ProductBadge
          price={product.price}
          discountPrice={product.discountPrice}
        />
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square bg-gray-50 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="mt-4 text-left">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill={
                product.rating && product.rating >= star ? "#F59E0B" : "#E5E7EB"
              }
              className="w-4 h-4"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.155c.969 0 1.371 1.24.588 1.81l-3.362 2.444a1 1 0 00-.364 1.118l1.286 3.95c.3.921-.755 1.688-1.54 1.118l-3.362-2.444a1 1 0 00-1.176 0l-3.362 2.444c-.784.57-1.838-.197-1.539-1.118l1.286-3.95a1 1 0 00-.364-1.118L2.02 9.377c-.783-.57-.38-1.81.588-1.81h4.155a1 1 0 00.95-.69l1.286-3.95z" />
            </svg>
          ))}

          {product.reviewCount && (
            <span className="ml-1 text-xs text-gray-500">
              ({product.reviewCount})
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-2">
          <ProductPrice
            price={product.price}
            discountPrice={product.discountPrice}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          onClick={() =>
            useCartStore.getState().addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              discountPrice: product.discountPrice,
              image: product.image,
            })
          }
          className="w-full rounded-md border border-[#0E7A80] text-[#0E7A80] py-2 text-sm font-medium hover:bg-[#0E7A80] hover:text-white transition"
        >
          Add to Cart
        </button>

        <button className="w-full rounded-md bg-[#0E7A80] text-white py-2 text-sm font-medium hover:bg-[#0a5e63] transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
