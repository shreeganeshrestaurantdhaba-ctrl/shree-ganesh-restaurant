import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="Oops! The page you are looking for does not exist. Visit Shree Ganesh Restaurant & Dhaba for delicious food and bookings."
        noindex={true}
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 text-center px-4">
        {/* 🔥 404 TEXT */}
        <h1 className="text-7xl md:text-9xl font-bold text-primary animate-float">
          404
        </h1>

        {/* 🍽️ BRAND MESSAGE */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found 😔
        </h2>

        <p className="mt-3 text-gray-600 max-w-md">
          Oops! This page is missing… but don’t worry, delicious food is still
          waiting for you at{" "}
          <span className="font-semibold text-primary">
            Shree Ganesh Restaurant & Dhaba 🍛🔥
          </span>
        </p>

        {/* 🍛 ACTION BUTTONS */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Home */}
          <Link
            to="/"
            className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary-dark transition"
          >
            🏠 Go Home
          </Link>

          {/* Menu */}
          <Link
            to="/menu"
            className="px-6 py-3 bg-yellow-500 text-white rounded-xl shadow hover:bg-yellow-600 transition"
          >
            🍽️ View Menu
          </Link>

          {/* Rooms */}
          <Link
            to="/rooms"
            className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
          >
            🛏️ Rooms
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow hover:bg-black transition"
          >
            📞 Contact Us
          </Link>
        </div>

        {/* 📍 EXTRA CTA */}
        <p className="mt-8 text-sm text-gray-500">
          📍 NH-347BG Highway, khandwa–Indore Road, Baswa, MP – Visit us today!
        </p>
      </div>
    </>
  );
};

export default NotFound;
