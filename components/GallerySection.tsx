"use client";
/**
 * GallerySection
 * Owl Carousel image gallery with fslightbox links.
 */

import React, { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Gallery images data map - generates array for all 40 images
const generateGalleryImages = () => {
  return Array.from({ length: 40 }, (_, index) => {
    const imageNumber = index + 1;
    return {
      id: imageNumber,
      src: `/img/gallery/${imageNumber}.jpg`,
      alt: `Gallery image ${imageNumber}`,
      thumbnail: `/img/gallery/${imageNumber}.jpg`,
    };
  });
};

const galleryImages = generateGalleryImages();

export default function GallerySection() {
  useEffect(() => {
    // Refresh fslightbox to ensure it detects the new links
    if (typeof window !== "undefined") {
      const w = window as unknown as { refreshFsLightbox?: () => void };
      if (w.refreshFsLightbox) {
        w.refreshFsLightbox();
      }
    }
  }, []);

  return (
    <div className="container margin_120" id="gallery">
      <div className="row">
        <div className="title col-12 text-center mb-5">
          <small data-cue="slideInUp">A Glimpse Into Our World.</small>
          <h2 data-cue="slideInUp" data-delay="100">
            Interior Gallery
          </h2>
        </div>
      </div>
      <div data-cues="zoomIn">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true} // Enable looping for smoother experience with many images
          coverflowEffect={{
            rotate: 0, // No rotation for cleaner look
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Better for large number of images
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          style={{ paddingBottom: '50px' }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {galleryImages.map((image) => (
            <SwiperSlide key={image.id} style={{ width: '400px', maxWidth: '90vw' }}>
              <div className="item rounded-img overflow-hidden position-relative" style={{ height: '300px' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-fit-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-5">
        {galleryImages.map((image, index) => (
          <a
            key={image.id}
            data-fslightbox="gallery_1"
            data-type="image"
            href={image.src}
            className={index === 0 ? "btn_1 outline" : ""}
            style={index === 0 ? {} : { display: "none" }}
          >
            {index === 0 ? "FullScreen Gallery" : ""}
          </a>
        ))}
      </div>
    </div>
  );
}

