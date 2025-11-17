'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Zoom]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      zoom={true}
      className="h-[600px] rounded-lg"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <div className="swiper-zoom-container h-full">
            <Image
              src={img}
              alt={`Collection image ${idx + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}