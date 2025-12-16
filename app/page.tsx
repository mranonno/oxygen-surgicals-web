"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ShopByCategory from "@/components/ShopByCategory";
import Slider from "@/components/ui/slider/Slider";
import { ProductCard } from "@/components/product/ProductCard";
import { sampleProduct } from "@/data/sampleProduct";

export default function Home() {
  return (
    <div className="w-full text-center mt-3">
      <Slider />
      <ShopByCategory />
      <h1 className="text-3xl font-bold text-center mb-8 bg-linear-to-r to-[#27568D] from-[#0E7A80] bg-clip-text text-transparent">
        Featured Products
      </h1>

      <ProductCard product={sampleProduct} />
    </div>
  );
}
