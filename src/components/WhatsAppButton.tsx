import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '916265338614';
  const message = encodeURIComponent(
    'Hello! I would like to know more about Shree Ganesh Restaurant & Dhaba.'
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        {/* Button */}
        <div className="relative bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group-hover:shadow-green-500/50 group-hover:shadow-xl">
          <MessageCircle size={26} fill="white" />
        </div>
      </div>
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-text-dark px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us!
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
      </div>
    </a>
  );
}
