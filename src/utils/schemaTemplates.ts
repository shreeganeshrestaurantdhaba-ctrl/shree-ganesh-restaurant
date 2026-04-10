export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Shree Ganesh Restaurant & Dhaba",
  "image": "https://shreeganeshrestaurant.vercel.app/images/logo.png",
  "url": "https://shreeganeshrestaurant.vercel.app",
  "telephone": "+916265338614",
  "servesCuisine": "Vegetarian",
  "priceRange": "₹100-₹300",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH Highway",
    "addressLocality": "Madhya Pradesh",
    "addressCountry": "India"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "120"
  }
});

// ================= WEBSITE SCHEMA =================
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shree Ganesh Restaurant & Dhaba",
  url: "https://shreeganeshrestaurant.vercel.app",
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "Shree Ganesh Restaurant & Dhaba",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://shreeganeshrestaurant.vercel.app/menu?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

// ================= ORGANIZATION SCHEMA =================
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shree Ganesh Restaurant & Dhaba",
  url: "https://shreeganeshrestaurant.vercel.app",
  logo: "https://shreeganeshrestaurant.vercel.app/logo.png",
  sameAs: [
    "https://facebook.com/yourpage",
    "https://instagram.com/yourpage",
    "https://wa.me/916265338614",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6265338614",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
});

// ================= RESTAURANT (LOCAL BUSINESS) SCHEMA =================
export const restaurantSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",

  name: "Shree Ganesh Restaurant & Dhaba",
  image: [
    "https://shreeganeshrestaurant.vercel.app/images/restaurant.jpg",
    "https://shreeganeshrestaurant.vercel.app/images/food.jpg",
  ],
  url: "https://shreeganeshrestaurant.vercel.app",
  "@id": "https://shreeganeshrestaurant.vercel.app",
  telephone: "+91-6265338614",
  servesCuisine: ["Indian", "Vegetarian", "Chinese", "Fast Food"],
  priceRange: "₹100-₹300",
  menu: "https://shreeganeshrestaurant.vercel.app/menu",

  address: {
    "@type": "PostalAddress",
    streetAddress: "NH-347BG Highway, khandwa–Indore Road",
    addressLocality: "Baswa",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.7196",
    longitude: "75.8577",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
  ],
  // ⭐ GOOGLE REVIEWS (IMPORTANT)
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "120",
  },
  acceptsReservations: "True",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking Available",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "AC Rooms",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Family Friendly",
      "value": true
    }
  ],

  sameAs: ["https://facebook.com/yourpage", "https://instagram.com/yourpage"],
});


//FAQ SCHEMA )
export const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is your dhaba pure veg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we serve 100% pure vegetarian food."
      }
    },
    {
      "@type": "Question",
      "name": "Are rooms available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, AC and Non-AC rooms are available 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "Is parking available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, parking is available for cars, trucks, and buses."
      }
    }
  ]
});