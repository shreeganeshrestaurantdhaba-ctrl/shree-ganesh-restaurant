import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product" | string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  locale?: string;
  siteName?: string;
};

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author = "Shree Ganesh Restaurant & Dhaba",
  publishedTime,
  modifiedTime,
  schema,
  canonical,
  noindex = false,
  nofollow = false,
  locale = "en_IN",
  siteName = "Shree Ganesh Restaurant & Dhaba",
}: SEOProps) => {
  // 🔥 DEFAULT VALUES
  const defaultTitle =
    "Shree Ganesh Restaurant & Dhaba | Pure Vegetarian Highway Dhaba";
  const defaultDescription =
    "Enjoy delicious Indian veg food, clean rooms, and a family-friendly environment at Shree Ganesh Restaurant.";
  const defaultImage = "https://shreeganeshrestaurant.vercel.app/images/og-image.jpg";
  const defaultUrl = "https://shreeganeshrestaurant.vercel.app";
  const defaultKeywords =
    "restaurant in Sanawad, veg restaurant, Indian food, dhaba, best thali, pure veg dhaba, highway restaurant, dhaba rooms, vegetarian food MP";

  const seo = {
    title: title ? `${title} | ${siteName}` : defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: url || defaultUrl,
    keywords: keywords || defaultKeywords,
    canonical: canonical || url || defaultUrl,
  };

  // 🔍 ROBOTS TAG
  const robotsContent = `${noindex ? "noindex" : "index"}, ${
    nofollow ? "nofollow" : "follow"
  }`;

  return (
    <Helmet>
      {/* ================= PRIMARY META TAGS ================= */}
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={author || siteName} />
      <meta name="robots" content={robotsContent} />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.canonical} />

      {/* ================= OPEN GRAPH (FACEBOOK, WHATSAPP) ================= */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Article Times (optional) */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* ================= TWITTER CARD ================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />

       {/* ================= EXTRA ADVANCED SEO ================= */}
      <meta httpEquiv="Content-Language" content="en-IN" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      

      {/* ================= FAVICON (OPTIONAL) ================= */}
      <link rel="icon" href="/favicon.ico" />

      {/* ================= STRUCTURED DATA (JSON-LD) ================= */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
       {/* ================= PWA / APP SEO ================= */}
      <meta name="application-name" content={siteName} />
      {/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
      {/* <meta name="apple-mobile-web-app-status-bar-style" content="default" /> */}
      {/* ================= SECURITY SEO ================= */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
  );
};

export default SEO;
