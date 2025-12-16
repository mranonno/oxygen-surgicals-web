"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ShopByCategory from "@/components/ShopByCategory";

export default function Home() {
  return (
    <div className="w-full text-center mt-3">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        className="rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div className="relative w-full h-[520px]">
            <Image
              src="/banner/slider_1.jpg"
              alt="banner"
              fill
              className="object-cover"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[520px]">
            <Image
              src="/banner/slider_1.jpg"
              alt="banner"
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <ShopByCategory />
      <h1 className="text-3xl font-bold text-center mb-8 bg-linear-to-r to-[#27568D] from-[#0E7A80] bg-clip-text text-transparent">
        Featured Products
      </h1>
    </div>
  );
}
