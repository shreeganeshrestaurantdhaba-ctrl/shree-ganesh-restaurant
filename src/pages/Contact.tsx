import { useState, type FormEvent } from "react";
import {
  MapPin,
  MessageCircle,
} from "lucide-react";
import AnimateSection from "../components/AnimateSection";
import PageHeader from "@/components/PageHeader";
import {
  websiteSchema,
  organizationSchema,
  restaurantSchema,
  localBusinessSchema,
  faqSchema,
} from "@/utils/schemaTemplates";
import seoData from "@/config/seoPages.json";

import SEO from "@/components/SEO";
import ContactInfoCards from "@/components/ui/ContactInfoCards";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const schema = {
    "@graph": [
      websiteSchema(),
      organizationSchema(),
      restaurantSchema(),
      localBusinessSchema(),
      faqSchema(),
    ],
  };

  return (
    <>
      <SEO {...seoData.contact} schema={schema} />
      {/* Header */}
      <PageHeader
        subtitle="Get In Touch"
        title="Contact Us"
        description="Have a question or want to make a reservation? Reach out to us and we'll get back to you quickly."
      />

      {/* Contact Info Cards */}
      <section className="section bg-cream">
        <div className="container">
          <ContactInfoCards />
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimateSection animation="fade-in-left">
                <span className="text-primary font-heading text-lg">
                  Send a Message
                </span>
                <h2 className="font-heading text-3xl text-text-dark mt-2 mb-6">
                  We'd Love to Hear From You
                </h2>
                {/* Form */}
                <ContactForm />
              </AnimateSection>
            </div>
            {/* Map */}
            <div>
              <AnimateSection animation="fade-in-right">
                <span className="text-primary font-heading text-lg">
                  Find Us
                </span>
                <h2 className="font-heading text-3xl text-text-dark mt-2 mb-6">
                  Our Location
                </h2>
                <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.97494114191375!2d76.09179994423332!3d22.141257593313362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962a3875dcdec9b%3A0xf4938aba3a338b87!2sShree%20Ganesh%20Restaurant%20%26%20Dhaba!5e0!3m2!1sen!2sin!4v1775814273968!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    title="Shree Ganesh Restaurant & Dhaba Location"
                    className="w-full h-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-6 flex items-start gap-3 bg-cream rounded-xl p-4">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-text-dark font-medium text-sm">
                      Shree Ganesh Restaurant & Dhaba
                    </p>
                    <p className="text-text-light text-sm">
                      NH-347BG Highway, khandwa–Indore Road, Village Baswa,
                      Khargone, Madhya Pradesh 451111, India
                    </p>
                  </div>
                </div>
              </AnimateSection>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateSection>
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h2 className="font-heading text-3xl mb-4">Prefer WhatsApp?</h2>
            <p className="text-white/90 mb-6 text-lg">
              Send us a message on WhatsApp for quick response. We usually reply
              within 5 minutes!
            </p>
            <a
              href="https://wa.me/916265338614?text=Namaste%20🙏%0AI%20would%20like%20to%20contact%20Shree%20Ganesh%20Dhaba.%0A%0APlease%20reply%20quickly.%0AThank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex-center gap-2 w-fit m-auto bg-white text-green-700 rounded-2xl hover:bg-cream"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>
          </AnimateSection>
        </div>
      </section>
    </>
  );
}
