import { useState, type FormEvent } from "react";
import {
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import AnimateSection from "../components/AnimateSection";
import PageHeader from "@/components/PageHeader";
import { contactInfo } from "@/utils/content";

import {
  websiteSchema,
  organizationSchema,
  restaurantSchema,
  localBusinessSchema,
  faqSchema,
} from "@/utils/schemaTemplates";
import seoData from "@/config/seoPages.json";

import SEO from "@/components/SEO";

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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError("Please enter a valid name");
      return;
    }
    if (!/^(\+91|0)?[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      setFormError("Please enter a valid 10-digit phone number");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormError("Please enter a message (at least 10 characters)");
      return;
    }

    setFormStatus("loading");

    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      setFormStatus("success");
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <AnimateSection key={info.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
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
                      target={
                        info.action.startsWith("http") ? "_blank" : undefined
                      }
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
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <AnimateSection animation="fade-in-left">
                <span className="text-primary font-heading text-lg">
                  Send a Message
                </span>
                <h2 className="font-heading text-3xl text-text-dark mt-2 mb-6">
                  We'd Love to Hear From You
                </h2>

                {formStatus === "success" ? (
                  <div className="bg-green-dark/10 border border-green-dark/20 rounded-2xl p-8 text-center">
                    <CheckCircle
                      size={48}
                      className="text-green-dark mx-auto mb-4"
                    />
                    <h3 className="font-heading text-xl text-green-dark mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-text-light">
                      Thank you for reaching out. We will get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formError && (
                      <div className="error_mess">
                        <AlertCircle size={16} />
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="inputLabel">Your Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="input shadow-none rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="inputLabel">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Enter 10-digit phone number"
                        className="input shadow-none rounded-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="inputLabel">Message *</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Write your message here..."
                        rows={5}
                        className="input shadow-none rounded-xl resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="btn btn-primary flex-center gap-2 w-full rounded-xl"
                    >
                      {formStatus === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.2!2d73.7!3d24.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM2JzAwLjAiTiA3M8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Ganesh Restaurant & Dhaba Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-6 flex items-start gap-3 bg-cream rounded-xl p-4">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-text-dark font-medium text-sm">
                      Shree Ganesh Restaurant & Dhaba
                    </p>
                    <p className="text-text-light text-sm">
                      NH-347BG Highway, Khanda–Indore Road, Village Baswa, Khargone, Madhya Pradesh 451111, India
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
              href="https://wa.me/+916265338614?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Shree%20Ganesh%20Dhaba."
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
