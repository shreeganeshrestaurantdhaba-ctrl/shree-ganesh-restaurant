import { Link } from "react-router-dom";
import {
  Phone,
  Users,
  Star,
  ChevronRight,
  Clock,
  Leaf,
  Coffee,
  Heart,
  Shield,
} from "lucide-react";
import AnimateSection from "../components/AnimateSection";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import SpecialCard from "@/components/ui/SpecialCard";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import {
  contactInfo,
  faqs,
  features,
  roomFeatures,
  specialItems,
  testimonials,
} from "@/utils/content";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import FAQSection from "@/components/sections/FAQSection";
import {
  websiteSchema,
  organizationSchema,
  restaurantSchema,
  localBusinessSchema,
  faqSchema,
} from "@/utils/schemaTemplates";
import seoData from "@/config/seoPages.json";

import SEO from "@/components/SEO";

export default function Home() {
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
      <SEO {...seoData.home} schema={schema} />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <AnimateSection className="text-center mb-12">
            <SectionHeading
              subheading="Why Travelers Choose Us Again & Again"
              title={
                <>
                  We Make Your Journey{" "}
                  <span className="text-primary">Delightful</span>
                </>
              }
              description="Delicious food, clean rooms, and warm hospitality all in one place."
            />
          </AnimateSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                delay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Items Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <AnimateSection className="text-center mb-12">
            <SectionHeading
              subheading="Our Specialties"
              title={
                <>
                  Must-Try Dishes
                  <span className="text-primary"> Loved by Travelers</span>
                </>
              }
              description="Authentic dishes crafted with love, served fresh from our kitchen to your table."
            />
          </AnimateSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialItems.map((item, i) => (
              <SpecialCard
                key={item.name}
                name={item.name}
                desc={item.desc}
                price={item.price}
                image={item.image}
                badge={item.badge}
                delay={i * 100}
              />
            ))}
          </div>

          <AnimateSection className="text-center mt-10">
            <Link
              to="/menu"
              className="btn btn-primary flex-center w-fit m-auto gap-2 group"
            >
              View Full Menu
              <ChevronRight size={18} />
            </Link>
          </AnimateSection>
        </div>
      </section>
      {/* Rooms Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-text-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🛏️</div>
          <div className="absolute bottom-10 right-10 text-8xl">🌙</div>
        </div>
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateSection animation="fade-in-left">
              <span className="text-saffron font-heading text-lg">
                Stay With Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-6">
                Comfortable Rooms for Travelers
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                After a long journey, rest in our clean and comfortable rooms.
                We offer both AC and Non-AC rooms with attached bathrooms, clean
                beds, and 24-hour service. Perfect for highway travelers.
              </p>
              <ul className="space-y-3 mb-8">
                {roomFeatures.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-6 h-6 bg-saffron rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <Link
                to="/rooms"
                className="inline-flex flex-center btn gap-2 bg-saffron text-white rounded-2xl hover:bg-saffron-dark py-3"
              >
                View Rooms & Book Now
                <ChevronRight size={18} />
              </Link>
            </AnimateSection>

            <AnimateSection animation="fade-in-right">
              <div className="relative">
                <img
                  src="/images/room.jpg"
                  alt="Shree Ganesh Restaurant & Dhaba Rooms"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-4 -left-4 md:bottom-6 md:left-6 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg ">
                  <p className="text-sm font-medium">Rest & Relax</p>
                  <p className="text-2xl font-bold">24/7</p>
                </div>

                {/* <div className="absolute -bottom-6 -left-6 bg-white text-text-dark p-4 rounded-2xl shadow-lg">
                  <p className="text-sm text-text-light">Starting from</p>
                  <p className="text-2xl font-bold text-primary">
                    ₹499<span className="text-sm text-text-light">/night</span>
                  </p>
                </div> */}
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>
      {/* About Preview */}
      <section className="py-20 bg-saffron relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-bg.jpg"
                  alt="Shree Ganesh Restaurant & Dhaba"
                  loading="lazy"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-[220px] z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-dark/10 rounded-xl flex items-center justify-center">
                    <Coffee className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">30+</p>
                    <p className="text-gray-500 text-xs">Years of Service</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
              </div>
              {/* Decorative Border */}
              <div className="absolute -top-4 -left-4 z-0 w-full h-full border-2 border-primary rounded-3xl " />
            </div>

            {/* Text Side */}
            <div>
              <span className="inline-block bg-white/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
                Our Story
              </span>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                A Trusted Stop on
                <span className="text-primary"> Every Journey</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Welcome to{" "}
                  <strong className="text-primary">
                    Shree Ganesh Restaurant & Dhaba
                  </strong>{" "}
                  — your trusted highway stop on NH-347BG in Madhya Pradesh. For
                  over a decade, we have been serving hot, fresh, 100% pure
                  vegetarian food to thousands of travelers, truck drivers, and
                  families passing through.
                </p>
                <p>
                  We believe that highway food should never mean compromising on
                  taste, hygiene, or quality. Our kitchen prepares every dish
                  with the same care and love you would find in a home kitchen —
                  that is why our customers call it <em>"Ghar Jaisa Khana."</em>
                </p>
                <p>
                  Beyond food, we also offer clean, comfortable, and affordable
                  rooms (AC & Non-AC) so you can rest and recharge before
                  continuing your journey. With ample parking for all vehicle
                  types and 24/7 service, we are truly your complete highway
                  stop.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <Clock size={20} />, text: "Open 24 Hours" },
                  { icon: <Leaf size={20} />, text: "100% Pure Veg" },
                  { icon: <Heart size={20} />, text: "Made with Love" },
                  { icon: <Shield size={20} />, text: "Hygienic Kitchen" },
                ].map((info) => (
                  <div
                    key={info.text}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                  >
                    <span className="text-primary">{info.icon}</span>
                    <span className="text-white text-sm font-medium">
                      {info.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <TestimonialsSlider testimonials={testimonials} />

      <FAQSection faqs={faqs} />

      {/* Contact Preview */}
      <ContactSection contactInfo={contactInfo} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <AnimateSection>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Hungry? Stop Now & Book Your Table!
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Call us or visit us for a Delicious food, clean rooms, and a
              relaxing stop — everything you need on your journey.
            </p>
            <div className="flex-center flex-col sm:flex-row gap-4">
              <a
                href="tel:+916265338614"
                className="btn flex-center gap-2 bg-white text-primary rounded-2xl"
              >
                <Phone size={20} />
                +91 62653 38614
              </a>
              <a
                href="https://wa.me/916265338614?text=Namaste%20🙏%0AI%20want%20more%20details%20about%20Shree%20Ganesh%20Restaurant%20%26%20Dhaba.%0A%0A🍛%20Menu%20details%0A🛏%20Room%20price%20%26%20availability%0A📍%20Exact%20location%0A%0APlease%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex-center gap-2 rounded-2xl bg-green-500 text-white hover:bg-green-600"
              >
                <Users size={20} />
                WhatsApp Us
              </a>
            </div>
          </AnimateSection>
        </div>
      </section>
    </>
  );
}
