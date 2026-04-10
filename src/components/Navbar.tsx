import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/menu", label: "Menu" },
  { path: "/rooms", label: "Rooms" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/30 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/images/logo-black.png"
              alt="Shree Ganesh Logo"
              className="w-full h-[50px] md:h-[70px] "
              loading="lazy"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-foreground/80 hover:text-primary font-medium transition-colors duration-300  tracking-wide relative group
                  ${location.pathname === link.path ? "text-primary font-semibold" : ""}
                  `}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="tel:+916265338614"
              className="flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-full w-full mt-2 transition-all py-2 px-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all font-body ${
                    location.pathname === link.path
                      ? "bg-primary text-white"
                      : "text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="tel:+916265338614"
                className="bg-primary hover:bg-primary-dark text-white rounded-xl w-full mt-2 transition-all flex justify-center items-center py-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
