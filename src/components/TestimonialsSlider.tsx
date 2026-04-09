"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import AnimateSection from "@/components/AnimateSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Testimonial } from "@/types";

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsSlider: React.FC<Props> = ({ testimonials }) => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container">
        {/* Heading */}
        <AnimateSection className="text-center mb-10">
          <SectionHeading
            subheading="Customer Reviews"
            title={
              <>
                What Our <span className="text-primary">Customer</span> Say
              </>
            }
            description="Discover what our customers have to say about Shree Ganesh Restaurant & Dhaba."
          />
        </AnimateSection>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          loop
          freeMode={true}
          grabCursor
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((review, i) => (
            <SwiperSlide key={review.id ?? i}>
              <div className="h-full py-6 px-4">
                <AnimateSection delay={i * 100}>
                  <TestimonialCard review={review} />
                </AnimateSection>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
