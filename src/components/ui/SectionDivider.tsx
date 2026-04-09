import React from "react";

const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary" />
      <span className="text-primary text-xl">✦</span>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary" />
    </div>
  );
};

export default SectionDivider;
