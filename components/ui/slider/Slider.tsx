"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      className="rounded-2xl overflow-hidden"
    >
      <SwiperSlide>
        <div className="relative w-full h-[520px]">
          <Image
            src="/banner/slider_2.jpg"
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
  );
}
