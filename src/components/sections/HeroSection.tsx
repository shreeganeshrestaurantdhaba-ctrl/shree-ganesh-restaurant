import { Link } from "react-router-dom";
import {
  UtensilsCrossed,
  ChevronRight,
  Phone,
  Leaf,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import AnimateSection from "@/components/AnimateSection";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Shree Ganesh Restaurant & Dhaba Food"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float hidden md:block">
        🪷
      </div>
      <div
        className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float hidden md:block"
        style={{ animationDelay: "1.5s" }}
      >
        🍛
      </div>

      {/* Content */}
      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Welcome badge */}
        <AnimateSection animation="scale-in">
          <div className="animate-fade-in-down inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-300 text-sm">🙏</span>
            <span className="text-amber-200 text-sm font-medium">
              स्वागत है आपका — Welcome to
            </span>
          </div>
        </AnimateSection>

        <AnimateSection animation="fade-in-up" delay={200}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mb-4 leading-16">
            Shree Ganesh
            <span className="block text-saffron mt-2 font-bold font-playfair">
              Restaurant &amp; Dhaba
            </span>
          </h1>
        </AnimateSection>

        <AnimateSection animation="fade-in-up" delay={400}>
          <p className="text-md md:text-xl text-saffron-light font-medium mb-2 font-body">
            Best Pure Veg Dhaba on Highway with Rooms
          </p>
          <p className="text-xl md:text-2xl text-saffron-light font-medium mb-2 font-body">
            "शुद्ध स्वाद, शुभ शुरुआत"
          </p>
          <p className="text-gray-300 text-base md:text-md mb-4 max-w-2xl mx-auto font-body">
            Enjoy fresh homemade vegetarian food, clean hygienic dining, and
            comfortable AC & Non-AC rooms — all in one place. A perfect stop for
            families, tourists & drivers on the highway.
          </p>
        </AnimateSection>
           {/* Trust Badges */}
        <AnimateSection animation="fade-in-up" delay={900} className="flex-center gap-4 mb-4">
          {[
            { icon: <Leaf className="w-4 h-4" />, text: "100% Pure Veg" },
            { icon: <Clock className="w-4 h-4" />, text: "Open 24/7" },
            { icon: <Users className="w-4 h-4" />, text: "Family Friendly" },
            { icon: <Shield className="w-4 h-4" />, text: "Hygienic & Clean" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-amber-200 text-xs md:text-sm"
            >
              {badge.icon}
              <span>{badge.text}</span>
            </div>
          ))}
        </AnimateSection>

        <AnimateSection animation="fade-in-up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/menu"
              // className="group flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              className="btn btn-primary flex-center gap-2 group"
            >
              <UtensilsCrossed size={20} />
              View Full Menu
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href="tel:+916265338614"
              className="btn btn-secondary flex-center gap-2 group"
            >
              <Phone size={20} />
              Call Now for Quick Stop
            </a>
          </div>
        </AnimateSection>
     
      </div>
      {/* Scroll indicator */}
      <div className="ax-center bottom-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
