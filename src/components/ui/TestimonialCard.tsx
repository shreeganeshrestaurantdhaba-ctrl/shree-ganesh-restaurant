import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/types";

interface Props {
  review: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ review }) => {
  return (
    <>
      {/* <div
        key={i}
        className="card-hover bg-amber-50/50 rounded-2xl p-6 border border-amber-100 relative"
      > 
        <div className="absolute top-4 right-4 text-amber-200 text-5xl font-heading leading-none">
          "
        </div>
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star
              key={s}
              className={`w-4 h-4 ${s < review.rating ? "text-amber-400 fill-amber-400" : "text-stone-300"}`}
            />
          ))}
        </div>
        <p className="text-stone-600 text-sm leading-relaxed mb-4 relative z-10">
          {review.text}
        </p>
        <div className="flex items-center gap-3 pt-3 border-t border-amber-200/50">
          <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-stone-800 text-sm">{review.name}</p>
            <p className="text-stone-400 text-xs">{review.location}</p>
          </div>
        </div>
      </div> */}
      <div className="bg-white border border-primary/30 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative">
        <div className="absolute top-4 right-4 text-primary/30 text-5xl font-heading leading-none">
          "
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, idx) => (
            <Star
              key={idx}
              size={16}
              className={
                idx < review.rating
                  ? "text-saffron fill-saffron"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        {/* Text */}
        <p className="text-text-light text-sm leading-relaxed mb-4 flex-grow italic">
          "{review.text}"
        </p>

        {/* User */}
        <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
            {review.name?.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-text-dark text-sm">
              {review.name}
            </p>
            <p className="text-xs text-text-light">{review.role}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TestimonialCard);
