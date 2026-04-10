import AnimateSection from "../AnimateSection";
import { contactInfo } from "@/utils/content";

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactInfo.map((info, i) => (
        <AnimateSection key={info.title} delay={i * 100}>
          <div className="contact-card text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              {info.icon}
            </div>
            <h3 className="font-heading text-lg text-text-dark mb-3">
              {info.title}
            </h3>

            <div className="space-y-1 flex-grow">
              {info.details.map((detail) => (
                <p key={detail} className="text-text-light text-sm break-all">
                  {detail}
                </p>
              ))}
            </div>
            {info.action && (
              <a
                href={info.action}
                target={info.action.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.action.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-block mt-4 text-primary font-semibold text-sm hover:underline"
              >
                {info.actionLabel} →
              </a>
            )}
          </div>
        </AnimateSection>
      ))}
    </div>
  );
}
