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
                href="https://wa.me/916265338614?text=Namaste%20🙏%0AI%20would%20like%20to%20know%20more%20about%20Shree%20Ganesh%20Restaurant%20%26%20Dhaba.%0A%0APlease%20share:%0A🍛%20Menu%20details%0A🛏%20Room%20price%20%26%20availability%0A📍%20Exact%20location%0A%0AThank%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl mt-4 flex justify-center items-center py-4 transition-colors font-medium"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div>
              <div className="h-80 lg:h-[400px] min-h-[350px] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.97494114191375!2d76.09179994423332!3d22.141257593313362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962a3875dcdec9b%3A0xf4938aba3a338b87!2sShree%20Ganesh%20Restaurant%20%26%20Dhaba!5e0!3m2!1sen!2sin!4v1775814273968!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  title="Shree Ganesh Restaurant & Dhaba Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              {/* Get Directions Button */}
              <a
                href="https://maps.app.goo.gl/v3xDFzqjRg78zuJu9"
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
