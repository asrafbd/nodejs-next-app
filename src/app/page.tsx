"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const images = [
    '/1.png',
    '/1.png',
]

export default function Home() {
  return (
    <main>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        speed={5000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
            {images.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image
                        className="object-cover h-full w-full"
                        src={item}
                        alt={item}
                        width='1920'
                        height='1080'
                        priority
                    />
                </SwiperSlide>
            ))}
      </Swiper>
    </main>
  )
}
