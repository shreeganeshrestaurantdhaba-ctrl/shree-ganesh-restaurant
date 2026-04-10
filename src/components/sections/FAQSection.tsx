"use client";

import AnimateSection from "@/components/AnimateSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { FAQType } from "@/types";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface Props {
  faqs: FAQType[];
}

const FAQSection: React.FC<Props> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimateSection className="section bg-white">
      <div className="container">
        <SectionHeading
              subheading="FAQs"
          title={
            <>
              Frequently Asked <span className="text-primary"> Questions</span>
            </>
          }
          description="Got questions? Here are answers to the most common things travelers ask us."
        />
        <div className=" flex flex-col gap-3 ">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl bg-white border-primary/50 ${openIndex === i ? "bg-primary/10" : ""}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-5 md:px-6 py-4 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold text-sm md:text-base ${openIndex === i ? "text-primary" : "text-stone-800"}`}>
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-90" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-4">
                  <p className={`text-sm leading-relaxed md:text-base text-stone-700 ${openIndex === i ? "opacity-100" : "opacity-0"}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimateSection>
  );
};

export default FAQSection;
