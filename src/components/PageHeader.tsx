import React from "react";
import AnimateSection from "@/components/AnimateSection";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <section
      className={`bg-gradient-to-br from-primary to-primary-dark text-white section ${className}`}
    >
      <div
        className={`container ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        <AnimateSection>
          {subtitle && (
            <span className="text-saffron font-heading text-lg">
              {subtitle}
            </span>
          )}

          <h2 className="font-heading text-4xl md:text-5xl mt-2 mb-4">
            {title}
          </h2>

          {description && (
            <p className="text-white/80 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </AnimateSection>
      </div>
    </section>
  );
};

export default PageHeader;