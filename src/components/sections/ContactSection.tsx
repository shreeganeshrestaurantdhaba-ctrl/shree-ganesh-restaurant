"use client";

import AnimateSection from "@/components/AnimateSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCard from "@/components/ui/ContactCard";
import { ContactItem } from "@/types";
import { MessageCircle, Navigation } from "lucide-react";

interface Props {
  contactInfo: ContactItem[];
}

const ContactSection: React.FC<Props> = ({ contactInfo }) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <AnimateSection className="text-center mb-10">
          <SectionHeading
            title={
              <>
                Visit Us on <span className="text-primary">Your Journey</span>
              </>
            }
            subheading="Find us on the highway"
            description="We'd love to hear from you. Reach out anytime!"
          />
        </AnimateSection>

        <AnimateSection>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <ContactCard key={i} item={item} />
              ))}

              <a
                href="https://wa.me/6265338614?text=Hello Shree Ganesh Restaurant  & Dhaba, I would like to inquire about your menu and room availability."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl mt-4 flex justify-center items-center py-4 transition-colors font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp for Quick Booking
              </a>
            </div>

            {/* Map */}
            <div>
              <div className="h-80 lg:h-[400px] min-h-[350px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full border-0"
                  loading="lazy"
                  title="Location Map"
                />
              </div>
              {/* Get Directions Button */}
              <a
                href="https://www.google.com/maps/search/Shree+Ganesh+Restaurant+Dhaba+NH-347BG+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1  flex-center my-6 hover:scale-none transition-all duration-300"
              >
                <Navigation size={20} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </AnimateSection>
      </div>
    </section>
  );
};

export default ContactSection;
