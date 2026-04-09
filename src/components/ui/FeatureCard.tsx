import React from "react";
import AnimateSection from "@/components/AnimateSection";
import { Feature } from "@/types";

interface Props extends Feature {
  delay?: number;
  className?: string;
}

const FeatureCard: React.FC<Props> = ({
  title,
  desc,
  icon: Icon,
  delay = 0,
}) => {
  return (
    <AnimateSection delay={delay}>
      <div className="bg-white border border-gray-200 hover:border-primary/50 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        <h3 className="font-heading text-lg text-text-dark mb-2">{title}</h3>

        <p className="text-text-light text-sm leading-relaxed">{desc}</p>
      </div>
    </AnimateSection>
  );
};

export default FeatureCard;
