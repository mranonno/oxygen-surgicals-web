"use client";

import Image from "next/image";
import ProductBadge from "./ProductBadge";
import ProductPrice from "./ProductPrice";

type Product = {
  badge?: string;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  id: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border rounded-lg p-3">
      <ProductBadge type={product.badge} />
      <Image src={product.image} alt={product.name} width={250} height={250} />
      <h3 className="mt-2 font-medium">{product.name}</h3>
      <ProductPrice
        price={product.price}
        discountPrice={product.discountPrice}
      />
    </div>
  );
};

export default ProductCard;
