"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper w-full h-64 md:h-80 lg:h-96"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
