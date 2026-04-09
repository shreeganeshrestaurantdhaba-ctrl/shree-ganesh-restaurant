import { UtensilsCrossed, ShieldCheck } from "lucide-react";
import AnimateSection from "../components/AnimateSection";
import SectionDivider from "@/components/ui/SectionDivider";
import PageHeader from "@/components/PageHeader";
import { aboutValues, stats, timeline } from "@/utils/content";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  websiteSchema,
  organizationSchema,
  restaurantSchema,
  localBusinessSchema,
  faqSchema,
} from "@/utils/schemaTemplates";
import seoData from "@/config/seoPages.json";

import SEO from "@/components/SEO";

export default function AboutPage() {
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
      <SEO {...seoData.about} schema={schema} />
      {/* Header */}
      <PageHeader
        subtitle="Know Our Story"
        title="About Us"
        description="From a small food stall to one of the most trusted highway dhabas
              — our journey of taste and trust."
      />

      {/* Our Story */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateSection animation="fade-in-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-saffron to-saffron-dark rounded-2xl p-8 text-white">
                  <span className="text-6xl mb-4 block">🙏</span>
                  <h3 className="font-heading text-2xl mb-2">Our Story</h3>
                  <p className="text-white/90 leading-relaxed">
                    What started as a small food stall in 1995 has grown into a
                    beloved highway destination. With God's blessings (Ganesh)
                    and your love, we have been serving pure vegetarian food for
                    over 18 years.
                  </p>
                </div>
                {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                  🍛
                </div> */}
                <div className="absolute bottom-0 md:-bottom-6 -right-4 flex items-center gap-4 p-4 bg-orange-50 border border-orange-100 rounded-2xl shadow-sm">
                  <ShieldCheck className="text-green-600 shrink-0" size={32} />
                  <div>
                    <h4 className="font-bold">Hygiene First Policy</h4>
                    <p className="text-sm text-gray-500">
                      Regular kitchen inspections and 24/7 staff training.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateSection>

            <AnimateSection animation="fade-in-right">
              <span className="text-primary font-heading text-lg">
                Since 1995
              </span>
              <h2 className="font-heading text-3xl text-text-dark mt-2 mb-6">
                A Journey of Taste & Trust
              </h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  Shree Ganesh Restaurant & Dhaba was founded with a simple
                  mission — to serve clean, tasty, and affordable vegetarian
                  food to highway travelers. Located on NH-347BG, we have been a
                  trusted stop for thousands of travelers going between major
                  cities.
                </p>
                <p>
                  Our founder, Shri Rup Singh Solanki ji, started this dhaba
                  with just 4 tables and a dream. His belief was simple: "If you
                  serve good food with a clean heart, people will always come
                  back." And they did — for 18+ years.
                </p>
                <p>
                  Today, we serve 100+ customers daily, offer comfortable rooms,
                  and have become one of the highest-rated highway dhabas in the
                  region. But our commitment to quality remains the same as day
                  one.
                </p>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container">
          <AnimateSection className="text-center mb-12">
            <span className="text-primary font-heading text-lg">
              What We Stand For
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-text-dark mt-2">
              Our Mission & Values
            </h2>
            <SectionDivider />
          </AnimateSection>

          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center mb-12">
            <AnimateSection>
              <UtensilsCrossed
                size={40}
                className="mx-auto mb-4 text-saffron"
              />
              <h3 className="font-heading text-2xl mb-4">Our Mission</h3>
              <p className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
                To provide every traveler with clean, delicious,
                homemade-quality vegetarian food at fair prices, and comfortable
                rooms for rest — making every journey memorable.
              </p>
            </AnimateSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutValues.map((value, i) => (
              <AnimateSection key={value.title} delay={i * 100}>
                <div className="bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <span className="text-4xl block mb-3">{value.icon}</span>
                  <h3 className="font-heading text-lg text-text-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-cream">
        <div className="container">
          <AnimateSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-text-dark">
              Our Numbers Speak
            </h2>
            <SectionDivider />
          </AnimateSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimateSection key={stat.label} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-primary mb-1">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-xl md:text-4xl font-bold"
                    />
                  </div>
                  <p className="text-text-light text-sm">{stat.label}</p>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-white">
        <div className="max-w-3xl container">
          <AnimateSection className="text-center mb-12">
            <span className="text-primary font-heading text-lg">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-text-dark mt-2">
              Milestones
            </h2>
            <SectionDivider />
          </AnimateSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimateSection
                  key={item.year}
                  animation={i % 2 === 0 ? "fade-in-left" : "fade-in-right"}
                  delay={i * 100}
                >
                  <div
                    className={`relative flex items-start gap-6 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 z-10 ring-4 ring-cream" />

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-cream rounded-2xl p-4 shadow-sm">
                        <span className="text-primary font-bold text-lg">
                          {item.year}
                        </span>
                        <p className="text-text-light text-sm mt-1">
                          {item.event}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <AnimateSection>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Come Visit Us!
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              We promise you a meal that feels like home and a stay that
              refreshes your journey.
            </p>
            <div className="flex-center w-fit m-auto border border-primary-light  rounded-xl p-6 gap-2">
              <ShieldCheck size={24} className="text-green-600" />
              <span className="font-medium">
                Trusted by 50,000+ customers since 1995
              </span>
            </div>
          </AnimateSection>
        </div>
      </section>
    </>
  );
}
