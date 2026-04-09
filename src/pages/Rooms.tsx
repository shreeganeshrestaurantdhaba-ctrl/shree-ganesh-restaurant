import { useState, type FormEvent } from "react";
import {
  Car,
  ShieldCheck,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import AnimateSection from "../components/AnimateSection";
import SectionDivider from "@/components/ui/SectionDivider";
import { rooms } from "@/utils/content";
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

export default function RoomsPage() {
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
    date: "",
    roomType: "ac",
    guests: "1",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setFormError("Please enter a valid name (at least 2 characters)");
      return;
    }
    if (!/^(\+91|0)?[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      setFormError("Please enter a valid 10-digit Indian phone number");
      return;
    }
    if (!formData.date) {
      setFormError("Please select a check-in date");
      return;
    }

    setFormStatus("loading");

    // Simulate API call
    setTimeout(() => {
      console.log("Booking submitted:", formData);
      setFormStatus("success");
      setFormData({
        name: "",
        phone: "",
        date: "",
        roomType: "ac",
        guests: "1",
      });

      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <>
      <SEO {...seoData.rooms} schema={schema} />
      {/* Header */}
      <PageHeader
        subtitle="Stay With Us"
        title="Our Rooms"
        description="Clean, comfortable rooms for highway travelers. Rest well and continue your journey refreshed."
      />

      {/* Room Listings */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <AnimateSection key={room.id} delay={i * 150}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full">
                  {room.popular && (
                    <div className="absolute top-4 right-4 bg-saffron text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                      Recommended
                    </div>
                  )}

                  {/* Room Image placeholder */}
                  <div className="h-64 flex-center relative">
                    <img
                      src={room?.image}
                      alt={room.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                      <h3 className="font-heading text-2xl text-white">
                        {room.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 ">
                    <p className="text-text-light text-sm leading-relaxed mb-4">
                      {room.desc}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {room.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-text-dark"
                        >
                          <CheckCircle
                            size={14}
                            className="text-green-dark shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-text-light">Starting from</p>
                        <p className="text-2xl font-bold text-primary">
                          ₹{room.price}
                          <span className="text-sm text-text-light font-normal">
                            /night
                          </span>
                        </p>
                      </div>
                      <a
                        href="#booking-form"
                        className="btn btn-primary py-3 rounded-xl"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-primary section">
        <AnimateSection className="container text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <Clock size={30} />, label: "24hr Check-in" },
              { icon: <Car size={30} />, label: "Free Parking" },
              { icon: <ShieldCheck size={30} />, label: "Safe & Secure" },
              // { icon: <Bath size={30} />, label: "Hot Water" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-4 text-center shadow-sm flex flex-col items-center gap-2"
              >
                <div className="text-primary">{item.icon}</div>
                <span className="text-sm font-medium text-text-dark">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateSection>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="section bg-white">
        <div className="max-w-2xl container">
          <AnimateSection className="text-center mb-8">
            <span className="text-primary font-heading text-lg">
              Reserve Your Room
            </span>
            <h2 className="font-heading text-3xl text-text-dark mt-2">
              Book Now
            </h2>
            {/* <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" /> */}
            <SectionDivider />
            <p className="text-text-light mt-4 text-sm">
              Fill the form below and we will confirm your booking via phone
              call.
            </p>
          </AnimateSection>

          <AnimateSection>
            {formStatus === "success" ? (
              <div className="bg-green-dark/10 border border-green-dark/20 rounded-2xl p-8 text-center">
                <CheckCircle
                  size={48}
                  className="text-green-dark mx-auto mb-4"
                />
                <h3 className="font-heading text-xl text-green-dark mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-text-light">
                  Thank you! We will call you shortly to confirm your room
                  booking.
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
                  <label className="inputLabel">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your full name"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="inputLabel">Check-in Date *</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="input shadow-none rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <label className="inputLabel">Room Type</label>
                    <select
                      value={formData.roomType}
                      onChange={(e) =>
                        setFormData({ ...formData, roomType: e.target.value })
                      }
                      className="input shadow-none rounded-xl bg-white"
                    >
                      <option value="ac">AC Room - ₹899/night</option>
                      <option value="non-ac">Non AC Room - ₹499/night</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="inputLabel">Number of Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="input shadow-none rounded-xl bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="btn btn-primary w-full rounded-xl"
                  // className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all duration-200 hover:scale-[1.02] shadow-md disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {formStatus === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </button>

                <p className="text-center text-xs text-text-light">
                  We will call you within 30 minutes to confirm your booking. No
                  advance payment required.
                </p>
              </form>
            )}
          </AnimateSection>
        </div>
      </section>
    </>
  );
}
