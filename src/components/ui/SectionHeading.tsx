import React from "react";
import SectionDivider from "./SectionDivider";

type SectionHeadingProps = {
  title: React.ReactNode;
  subheading?: string;
  description?: string;
};
const SectionHeading = ({
  title,
  subheading,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="text-center mb-14">
      <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4">
        {subheading || "Hy"}
      </span>
      {/* <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
           {title || "Welcome to Shree Ganesh Restaurant & Dhaba"}
            </h2> */}
      <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-gray-900 mb-3">
        {title || "Welcome to Shree Ganesh Restaurant & Dhaba"}
      </h2>
        <SectionDivider />
      <h2 className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
        {description ||
          "At Shree Ganesh, we blend authentic flavors with warm hospitality to create unforgettable dining experiences. Join us and savor the taste of tradition!"}
      </h2>
    </div>
  );
};

export default SectionHeading;
