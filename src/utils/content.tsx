import {
  Category,
  ContactItem,
  FAQType,
  Feature,
  MenuItem,
  Room,
  RoomFeature,
  SpecialItem,
  Testimonial,
} from "@/types";
import {
  BedDouble,
  Car,
  Leaf,
  MapPin,
  Phone,
  Users,
  Clock,
  Award,
  Heart,
  Mail,
} from "lucide-react";

// Home Page Content

export const features: Feature[] = [
  {
    icon: Leaf,
    title: "100% Pure Veg",
    desc: "100% vegetarian food prepared with fresh ingredients and traditional recipes",
  },
  {
    icon: Users,
    title: "Family Friendly",
    desc: "Safe, clean, and comfortable environment perfect for families and children",
  },
  {
    icon: BedDouble,
    title: "Rooms Available",
    desc: "Clean AC & Non-AC rooms for travelers to rest and refresh on the highway",
  },
  {
    icon: Car,
    title: "Parking Available",
    desc: "Free parking space for cars, trucks, and buses with 24/7 security",
  },
];

export const specialItems: SpecialItem[] = [
  {
    name: "Special Thali",
    desc: "Complete meal with dal, sabzi, roti, rice, salad, raita & sweet — perfect for a satisfying lunch or dinner.",
    price: " 180",
    image: "/images/menuItems/special-thali.jpg",
    badge: "Best Seller",
  },
  {
    name: "Sev Tamatar",
    desc: "Tangy and spicy tomato curry topped with crispy sev — a true Rajasthani delight.",
    price: "120",
    badge: "Popular",
    image: "/images/menuItems/sev-tamatar.jpg",
  },
  {
    name: "Dal Tadka",
    desc: "Yellow lentils tempered with cumin, garlic & ghee — simple, comforting, and flavorful.",
    price: "100",
    image: "/images/menuItems/dal-tadka.jpg",
    badge: "Must Try",
  },
  {
    name: "Poha Jalebi",
    desc: "Light and fluffy poha served with crispy, sweet jalebi — the perfect morning treat.",
    price: "60",
    image: "/images/menuItems/poha-jalebi.jpg",
    badge: "Popular",
  },
];

export const roomFeatures: RoomFeature[] = [
  { text: "Clean beds with fresh linens" },
  { text: "Attached bathroom with hot water" },
  { text: "24-hour check-in available" },
  { text: "Room service available" },
  { text: "AC & Non-AC options" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Truck Driver",
    text: "Best dhaba on this highway! The food is always fresh and tasty. We stop here every time we travel. The Special Thali is amazing!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Business Traveler",
    text: "Clean rooms and great food. Perfect stop for families. Staff is very polite and helpful. Highly recommended for highway travelers.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Family Traveler",
    text: "Pure veg food that tastes like home. The Poha Jalebi is the best I have ever had. Will visit again for sure!",
    rating: 4,
  },
  {
    name: "Sunita Verma",
    role: "Tourist",
    text: "Loved the ambiance and the food. The staff made us feel very welcome. A must-visit if you're passing through this area.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Local Resident",
    text: "Been coming here for years. The quality has always been consistent. The Paneer Butter Masala is a personal favorite.",
    rating: 5,
  },
];

export const faqs: FAQType[] = [
  { question: 'Is the food pure vegetarian?', answer: 'Yes, absolutely! We are a 100% pure vegetarian restaurant. No meat, egg, or non-veg ingredients are ever used in our kitchen. We take great pride in serving authentic and delicious vegetarian Indian food.' },
  { question: 'Do you have parking for large vehicles?', answer: 'Yes! We have a large parking area that can easily accommodate cars, trucks, buses, and tempos. The parking area is well-lit and secure throughout the night.' },
  { question: 'Can I book a room in advance?', answer: 'Yes, you can call us anytime to book a room in advance. We recommend pre-booking during peak travel seasons and festival times to ensure availability.' },
  { question: 'What payment methods do you accept?', answer: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), debit cards, and credit cards. We want to make payment as convenient as possible for all our guests.' },
  { question: 'Is the restaurant open at night?', answer: 'Yes, we are open 24 hours, 7 days a week, 365 days a year! Whether you are traveling late at night or early morning, hot food and clean rooms are always available.' },
  { question: 'Do you serve Jain food?', answer: 'Yes, we can prepare Jain food (without onion and garlic) on request. Please inform our staff while placing your order and we will be happy to accommodate.' },
];


// Menu Page Content
export const categories = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "popular", label: "Popular", emoji: "🔥" },
  { id: "special", label: "Special", emoji: "⭐" },
  { id: "breakfast", label: "Breakfast", emoji: "🍳" },
  { id: "snacks", label: "Snacks", emoji: "🍟" },
  { id: "sabji", label: "Sabji", emoji: "🍛" },
  { id: "dal", label: "Dal", emoji: "🍲" },
  { id: "roti", label: "Roti", emoji: "🫓" },
  { id: "rice", label: "Rice", emoji: "🍚" },
  { id: "thali", label: "Thali", emoji: "🥘" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
];

export const menuItems = [
  // BREAKFAST
  {
    id: 1,
    name: "Poha",
    description: "Light poha with peanuts & lemon",
    price: 20,
    category: "breakfast",
    popular: true,
    emoji: "🍛",
  },
  {
    id: 2,
    name: "Jalebi",
    description: "Hot crispy jalebi (4 pcs)",
    price: 20,
    category: "breakfast",
    popular: true,
    emoji: "🍯",
  },
  {
    id: 3,
    name: "Aloo Paratha",
    description: "Stuffed paratha with curd",
    price: 30,
    category: "breakfast",
    popular: true,
    emoji: "🫓",
  },
  {
    id: 4,
    name: "Chole Bhature",
    description: "Chole with 2 bhature",
    price: 50,
    category: "breakfast",
    emoji: "🍛",
  },
  {
    id: 5,
    name: "Idli Sambhar",
    description: "2 idli with sambhar",
    price: 30,
    category: "breakfast",
    emoji: "🥥",
  },

  // SNACKS
  {
    id: 6,
    name: "Samosa",
    description: "2 pcs aloo samosa",
    price: 15,
    category: "snacks",
    popular: true,
    emoji: "🥟",
  },
  {
    id: 7,
    name: "Kachori",
    description: "2 pcs dal kachori",
    price: 20,
    category: "snacks",
    emoji: "🥟",
  },
  {
    id: 8,
    name: "Bread Pakora",
    description: "2 pcs stuffed pakora",
    price: 20,
    category: "snacks",
    emoji: "🍞",
  },
  {
    id: 9,
    name: "Aloo Tikki",
    description: "2 pcs crispy tikki",
    price: 20,
    category: "snacks",
    emoji: "🥔",
  },
  {
    id: 10,
    name: "Pav Bhaji",
    description: "Bhaji with 2 pav",
    price: 40,
    category: "snacks",
    popular: true,
    emoji: "🍞",
  },

  // SABJI
  {
    id: 11,
    name: "Sev Tamatar",
    description: "Spicy tomato curry with sev",
    price: 60,
    category: "sabji",
    popular: true,
    emoji: "🍅",
  },
  {
    id: 12,
    name: "Aloo Gobi",
    description: "Potato & cauliflower sabji",
    price: 50,
    category: "sabji",
    emoji: "🥔",
  },
  {
    id: 13,
    name: "Mix Veg",
    description: "Seasonal vegetable curry",
    price: 60,
    category: "sabji",
    emoji: "🥕",
  },
  {
    id: 14,
    name: "Paneer Masala",
    description: "Paneer in spicy gravy",
    price: 100,
    category: "sabji",
    popular: true,
    emoji: "🧀",
  },
  {
    id: 15,
    name: "Kadhi Pakora",
    description: "Kadhi with pakora",
    price: 50,
    category: "sabji",
    emoji: "🍲",
  },

  // DAL
  {
    id: 16,
    name: "Dal Tadka",
    description: "Dal with garlic tadka",
    price: 50,
    category: "dal",
    popular: true,
    emoji: "🍲",
  },
  {
    id: 17,
    name: "Dal Fry",
    description: "Simple fried dal",
    price: 40,
    category: "dal",
    emoji: "🍲",
  },
  {
    id: 18,
    name: "Moong Dal",
    description: "Light yellow dal",
    price: 40,
    category: "dal",
    emoji: "🍲",
  },

  // ROTI
  {
    id: 19,
    name: "Tawa Roti",
    description: "Plain wheat roti",
    price: 8,
    category: "roti",
    emoji: "🫓",
  },
  {
    id: 20,
    name: "Butter Roti",
    description: "Roti with butter",
    price: 10,
    category: "roti",
    emoji: "🧈",
  },
  {
    id: 21,
    name: "Naan",
    description: "Soft naan",
    price: 20,
    category: "roti",
    emoji: "🫓",
  },

  // RICE
  {
    id: 22,
    name: "Plain Rice",
    description: "Steamed rice",
    price: 40,
    category: "rice",
    emoji: "🍚",
  },
  {
    id: 23,
    name: "Jeera Rice",
    description: "Rice with jeera",
    price: 50,
    category: "rice",
    popular: true,
    emoji: "🍚",
  },
  {
    id: 24,
    name: "Khichdi",
    description: "Dal rice mix",
    price: 40,
    category: "rice",
    emoji: "🍲",
  },

  // THALI
  {
    id: 25,
    name: "Simple Thali",
    description: "2 roti, sabji, dal, rice",
    price: 70,
    category: "thali",
    emoji: "🥘",
  },
  {
    id: 26,
    name: "Special Thali",
    description: "3 roti, 2 sabji, dal, rice, salad",
    price: 100,
    category: "thali",
    popular: true,
    emoji: "🍱",
  },

  // DRINKS
  {
    id: 27,
    name: "Chai",
    description: "Hot tea",
    price: 10,
    category: "drinks",
    popular: true,
    emoji: "☕",
  },
  {
    id: 28,
    name: "Lassi",
    description: "Sweet cold lassi",
    price: 30,
    category: "drinks",
    emoji: "🥛",
  },
  {
    id: 29,
    name: "Chaas",
    description: "Salted buttermilk",
    price: 20,
    category: "drinks",
    emoji: "🥛",
  },
  {
    id: 30,
    name: "Nimbu Pani",
    description: "Fresh lemon drink",
    price: 15,
    category: "drinks",
    emoji: "🍋",
  },
  // ⭐ SPECIAL ITEMS
{
  id: 31,
  name: "Paneer Butter Masala",
  description: "Rich creamy paneer gravy (Dhaba Special)",
  price: 120,
  category: "special",
  popular: true,
  emoji: "🧈",
},
{
  id: 32,
  name: "Dal Bati Churma",
  description: "Traditional MP/Rajasthan special combo",
  price: 100,
  category: "special",
  popular: true,
  emoji: "🥘",
},
{
  id: 33,
  name: "Special Paneer Thali",
  description: "Paneer, 3 roti, dal, rice, salad",
  price: 130,
  category: "special",
  popular: true,
  emoji: "🍱",
},
{
  id: 34,
  name: "Egg Curry",
  description: "Spicy egg masala (4 eggs)",
  price: 90,
  category: "special",
  emoji: "🥚",
},
{
  id: 35,
  name: "Chicken Curry",
  description: "Desi style chicken curry",
  price: 140,
  category: "special",
  popular: true,
  emoji: "🍗",
},

// 🔥 MORE POPULAR ITEMS (enhanced)
{
  id: 36,
  name: "Maggi",
  description: "Masala maggi noodles",
  price: 30,
  category: "snacks",
  popular: true,
  emoji: "🍜",
},
{
  id: 37,
  name: "Anda Bhurji",
  description: "Spicy scrambled egg",
  price: 50,
  category: "snacks",
  popular: true,
  emoji: "🍳",
},
{
  id: 38,
  name: "Tea + Samosa Combo",
  description: "Chai with 2 samosa",
  price: 25,
  category: "breakfast",
  popular: true,
  emoji: "☕",
},
{
  id: 39,
  name: "Full Plate Poha",
  description: "Large poha serving",
  price: 30,
  category: "breakfast",
  popular: true,
  emoji: "🍛",
},
{
  id: 40,
  name: "Butter Milk (Large)",
  description: "Extra chilled chaas",
  price: 25,
  category: "drinks",
  popular: true,
  emoji: "🥛",
}
];
// Rooms Page Content
export const rooms: Room[] = [
  {
    id: "non-ac",
    name: "Non AC Room",
    image: "/images/room3.jpg",
    price: 499,
    desc: "Comfortable room with fan cooling, perfect for budget travelers. Clean bed, attached bathroom with hot water.",
    features: [
      "Double Bed",
      "Fan Cooling",
      "Attached Bathroom",
      "Hot Water",
      "Free Parking",
      "Room Service",
    ],
  },
  {
    id: "ac",
    name: "AC Room",
    image: "/images/room2.jpg",
    price: 899,
    desc: "Premium air-conditioned room for maximum comfort. Spacious room with all amenities for a relaxing stay.",
    features: [
      "Double Bed",
      "Air Conditioning",
      "Attached Bathroom",
      "Hot Water",
      "Free Parking",
      "Room Service",
      "TV",
      "Free WiFi",
    ],
    popular: true,
  },
];

// About Page Content
export const stats = [
  {
    icon: <Clock className="text-saffron" size={28} />,
    value: 30,
    suffix: "+",
    label: "Years of Service",
  },
  {
    icon: <Users className="text-saffron" size={28} />,
    value: 50000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: <Award className="text-saffron" size={28} />,
    value: 45,
    suffix: "+",
    label: "Google Rating ",
  },
  {
    icon: <Heart className="text-saffron" size={28} />,
    value: 100,
    suffix: "%",
    label: "Pure Vegetarian",
  },
];

export const aboutInfo = [
  {
    title: "Our Story",
    desc: "Founded in 2005, Shree Ganesh Restaurant and Dhaba has been serving delicious pure veg food to travelers on the Indore - Icchapur highway for over 30 years. Our commitment to quality and hygiene has made us a trusted stop for families, truck drivers, and tourists alike.",
  },
  {
    title: "Our Mission",
    desc: "To provide tasty, hygienic, and affordable vegetarian food to highway travelers while ensuring a comfortable stay in our rooms. We strive to create a welcoming environment where everyone can enjoy a satisfying meal and a restful break.",
  },
  {
    title: "Our Values",
    desc: "Quality, Hygiene, Customer Satisfaction, and Hospitality are at the core of everything we do. We believe in treating our customers like family and maintaining the highest standards in food preparation and service.",
  },
];

export const aboutValues = [
  {
    icon: "🥬",
    title: "Pure Vegetarian",
    desc: "We are a 100% pure vegetarian establishment. No onion-garlic options available on request. Fresh vegetables sourced daily.",
  },
  {
    icon: "🧹",
    title: "Clean & Hygienic",
    desc: "Kitchen and dining area cleaned regularly. Staff follows strict hygiene practices. Clean utensils and fresh ingredients always.",
  },
  {
    icon: "💰",
    title: "Fair Prices",
    desc: "Quality food at honest prices. No hidden charges. We believe great food should be affordable for everyone.",
  },
  {
    icon: "👨‍🍳",
    title: "Experienced Cooks",
    desc: "Our chefs have 30+ years of experience in Rajasthani and North Indian cuisine. Every dish is made with expertise.",
  },
  {
    icon: "🤝",
    title: "Customer First",
    desc: "Your satisfaction is our priority. We listen to feedback and continuously improve. Special requests are always welcome.",
  },
  {
    icon: "🏠",
    title: "Home-like Feel",
    desc: "We want every customer to feel at home. Warm hospitality, comfortable seating, and food that reminds you of home.",
  },
];

export const timeline = [
  {
    year: "1995",
    event: "Started as a small chai stall (gumti) on the roadside with just 2 tables, serving tea and simple snacks to travelers.",
  },
  {
    year: "1998",
    event: "Shifted to a new location and continued serving customers with dedication, building trust among daily highway travelers.",
  },
  {
    year: "2002",
    event: "Purchased own land and opened a permanent tea shop, marking the first big step toward building a long-term business.",
  },
  {
    year: "2010",
    event: "Expanded the shop into a general snack center offering chai, nashta, daily essentials, and small utility items for travelers.",
  },
  {
    year: "2015",
    event: "Became a popular highway stop known for tea, snacks, and quick service, serving thousands of regular customers.",
  },
  {
    year: "2025",
    event: "After highway redevelopment, shifted to a new location and established Shree Ganesh Restaurant & Family Dhaba with full meals, rooms, parking, and modern facilities.",
  },
];

export const contactInfo: ContactItem[] = [
  {
    icon: <Phone className="text-primary" size={24} />,
    title: "Phone",
    details: ["+91 62653 38614", "+91 97543 16114"],
    action: "tel:+916265338614",
    actionLabel: "Call Now",
  },
  {
    icon: <Mail className="text-primary" size={24} />,
    title: "Email",
    details: ["shreeganeshrestaurantdhaba@gmail.com"],
    action: "mailto:shreeganeshrestaurantdhaba@gmail.com",
    actionLabel: "Send Email",
  },
  {
    icon: <MapPin className="text-primary" size={24} />,
    title: "Address",
    details: [
      "NH-347BG Highway, khandwa–Indore Road",
      "Village Baswa, District Khargone",
      "Madhya Pradesh 451111",
    ],
    action: "https://maps.app.goo.gl/v3xDFzqjRg78zuJu9",
    actionLabel: "Get Directions",
  },
  {
    icon: <Clock className="text-primary" size={24} />,
    title: "Hours",
    details: ["Open 24 Hours", "Kitchen: 6 AM - 11 PM", "Room Service: 24/7"],
    action: null,
    actionLabel: null,
  },
];


