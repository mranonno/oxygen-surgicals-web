import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { Metadata } from "next";
import ShopByCategory from "@/components/ShopByCategory";
import Slider from "@/components/ui/slider/Slider";
import { ProductCard } from "@/components/product/ProductCard";
import { sampleProduct } from "@/data/sampleProduct";

export const metadata: Metadata = {
  title: "Home | Oxygen Surgicals",
  description: "Your one-stop shop for premium medical equipment and supplies.",
};

export default function Home() {
  return (
    <div className="w-full text-center mt-1">
      <Slider />
      <ShopByCategory />
      <h1 className="text-3xl font-bold text-center mb-8 bg-linear-to-r to-[#27568D] from-[#0E7A80] bg-clip-text text-transparent">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-10">
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
        <ProductCard product={sampleProduct} />
      </div>
    </div>
  );
}
