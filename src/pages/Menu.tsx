import { useState, useMemo } from "react";
import { Leaf, Phone, Users } from "lucide-react";
import AnimateSection from "../components/AnimateSection";
import SearchBar from "@/components/ui/SearchBar";
import CategoryTabs from "@/components/ui/CategoryTabs";
import MenuGrid from "@/components/sections/MenuGrid";
import EmptyState from "@/components/ui/EmptyState";
import { categories, menuItems } from "@/utils/content";
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

export default function MenuPage() {
  const schema = {
    "@graph": [
      websiteSchema(),
      organizationSchema(),
      restaurantSchema(),
      localBusinessSchema(),
      faqSchema(),
    ],
  };

  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCat = category === "all" || item.category === category;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <>
      <SEO {...seoData.menu} schema={schema} />

      {/* Header */}
      <PageHeader
        subtitle="Explore Our"
        title="Food Menu"
        description="All items are pure vegetarian and prepared fresh. Prices are inclusive of all taxes."
      />

      <div className="container py-8">
        {/* Search Bar */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          active={category}
          onChange={setCategory}
        />

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm">
            Showing <b>{filtered.length}</b> items
            {category !== "all" && (
              <span>
                {" "}
                in{" "}
                <span className="font-semibold text-primary capitalize">
                  {category}
                </span>
              </span>
            )}
          </p>
          <div className="flex items-center gap-1 text-green-dark text-xs font-semibold">
            <Leaf size={14} /> 100% Pure Veg
          </div>
        </div>

        {/* Menu Grid or Empty State */}
        {filtered.length > 0 ? (
          <MenuGrid items={filtered} />
        ) : (
          <EmptyState
            onReset={() => {
              setCategory("all");
              setSearch("");
            }}
          />
        )}

        {/* Note */}
        <AnimateSection className="mt-12">
          <div className="bg-saffron/10 border border-saffron/20 rounded-2xl p-4 md:p-6 text-center">
            <p className="text-text-dark font-medium mb-1">📋 Note</p>
            <p className="text-text-light text-sm">
              All prices are in INR (₹) and inclusive of GST. Menu items and
              prices may change seasonally. Please confirm availability by
              calling us. Custom spice levels available on request.
            </p>
          </div>
        </AnimateSection>
      </div>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <AnimateSection>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Hungry? Book Your Table Now!
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Call us or visit us for a delicious meal that you'll never forget.
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
                href="https://wa.me/6265338614?text=Hello Shree Ganesh Restaurant  & Dhaba, I would like to inquire about your menu and room availability."
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
