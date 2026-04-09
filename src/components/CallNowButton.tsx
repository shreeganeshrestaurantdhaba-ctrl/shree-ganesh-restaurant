import { Phone } from 'lucide-react';

export default function CallNowButton() {
  return (
    <a
      href="tel:+916265338614"
      className="fixed bottom-4 right-4 z-50 md:hidden bg-primary text-white px-5 py-3 rounded-full shadow-lg hover:bg-primary-light transition-all duration-200 hover:scale-105 flex items-center gap-2 font-semibold text-sm animate-pulse-glow"
    >
      <Phone size={18} />
      Call Now
    </a>
  );
}
