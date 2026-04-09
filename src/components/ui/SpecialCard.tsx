import React from "react";
import AnimateSection from "../AnimateSection";
import { ShieldCheck } from "lucide-react";
import { SpecialItem } from "@/types";

interface Props extends SpecialItem {
  delay?: number;
  className?: string;
}

const SpecialCard: React.FC<Props> = ({
  name,
  desc,
  price,
  image,
  badge,
  delay = 0,
}) => {
  return (
    <AnimateSection delay={delay}>
      <div className="bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative">
        
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {badge && (
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              {badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="group-hover:text-primary font-heading text-lg text-text-dark mb-1">
            {name}
          </h3>

          <p className="text-text-light text-sm mb-3 leading-relaxed">
            {desc}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-primary font-bold text-xl">
             ₹{price}
            </span>

            <span className="text-green-dark text-xs font-semibold flex items-center gap-1">
              <ShieldCheck size={14} /> Pure Veg
            </span>
          </div>
        </div>
      </div>
    </AnimateSection>
  );
};

export default SpecialCard;