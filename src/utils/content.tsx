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

export const categories: Category[] = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "popular", label: "Popular", emoji: "🔥" },
  { id: "starters", label: "Starters", emoji: "🍤" },
  { id: "breakfast", label: "Breakfast", emoji: "🍳" },
  { id: "snacks", label: "Snacks", emoji: "🍟" },
  { id: "sabji", label: "Sabji", emoji: "🍛" },
  { id: "dal", label: "Dal", emoji: "🍲" },
  { id: "roti", label: "Roti", emoji: "🫓" },
  { id: "rice", label: "Rice", emoji: "🍚" },
  { id: "thali", label: "Thali", emoji: "🥘" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
];

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: 1,
    name: "Poha",
    desc: "Flattened rice with peanuts, onion & lemon",
    price: 40,
    category: "breakfast",
    popular: true,
    emoji: "🍛",
  },
  {
    id: 2,
    name: "Jalebi",
    desc: "Hot crispy sweet jalebi (4 pieces)",
    price: 30,
    category: "breakfast",
    popular: true,
    emoji: "🧁",
  },
  {
    id: 3,
    name: "Aloo Paratha",
    desc: "Stuffed potato paratha with butter & curd",
    price: 50,
    category: "breakfast",
    popular: true,
    emoji: "🫓",
  },
  {
    id: 4,
    name: "Chole Bhature",
    desc: "Spicy chickpea curry with fluffy bhatura (2 pcs)",
    price: 80,
    category: "breakfast",
    emoji: "🍛",
  },
  {
    id: 5,
    name: "Paneer Paratha",
    desc: "Cottage cheese stuffed paratha with curd",
    price: 60,
    category: "breakfast",
    emoji: "🫓",
  },
  {
    id: 6,
    name: "Idli Sambhar",
    desc: "Steamed rice cakes with sambhar & chutney",
    price: 50,
    category: "breakfast",
    emoji: "🥘",
  },
  {
    id: 7,
    name: "Upma",
    desc: "Semolina upma with vegetables",
    price: 40,
    category: "breakfast",
    emoji: "🍛",
  },
  // Snacks
  {
    id: 8,
    name: "Samosa (2 pcs)",
    desc: "Crispy samosa filled with spicy potato mix",
    price: 20,
    category: "snacks",
    popular: true,
    emoji: "🔺",
  },
  {
    id: 9,
    name: "Kachori (2 pcs)",
    desc: "Flaky kachori with dal filling & chutney",
    price: 25,
    category: "snacks",
    emoji: "🥟",
  },
  {
    id: 10,
    name: "Pav Bhaji",
    desc: "Mashed vegetable curry with butter pav (4 pcs)",
    price: 70,
    category: "snacks",
    popular: true,
    emoji: "🍞",
  },
  {
    id: 11,
    name: "Dahi Vada",
    desc: "Lentil dumplings in sweet spiced yogurt",
    price: 50,
    category: "snacks",
    emoji: "🥛",
  },
  {
    id: 12,
    name: "Bread Pakora",
    desc: "Bread stuffed with potato, deep fried (4 pcs)",
    price: 30,
    category: "snacks",
    emoji: "🍞",
  },
  {
    id: 13,
    name: "Aloo Tikki",
    desc: "Spiced potato cutlet, shallow fried (2 pcs)",
    price: 30,
    category: "snacks",
    emoji: "🥘",
  },
  // Sabji
  {
    id: 14,
    name: "Paneer Butter Masala",
    desc: "Rich creamy tomato gravy with soft paneer",
    price: 180,
    category: "sabji",
    popular: true,
    emoji: "🧈",
  },
  {
    id: 15,
    name: "Sev Tamatar",
    desc: "Spicy tomato curry topped with crispy sev",
    price: 120,
    category: "sabji",
    popular: true,
    emoji: "🍅",
  },
  {
    id: 16,
    name: "Aloo Gobi",
    desc: "Potato & cauliflower dry curry",
    price: 100,
    category: "sabji",
    emoji: "🥔",
  },
  {
    id: 17,
    name: "Mix Veg",
    desc: "Seasonal vegetables in mild gravy",
    price: 120,
    category: "sabji",
    emoji: "🥕",
  },
  {
    id: 18,
    name: "Palak Paneer",
    desc: "Creamy spinach gravy with paneer cubes",
    price: 160,
    category: "sabji",
    popular: true,
    emoji: "🥬",
  },
  {
    id: 19,
    name: "Aloo Matar",
    desc: "Potato & green peas in tomato gravy",
    price: 100,
    category: "sabji",
    emoji: "🥔",
  },
  {
    id: 20,
    name: "Gatte ki Sabji",
    desc: "Rajasthani gram flour dumplings in yogurt gravy",
    price: 120,
    category: "sabji",
    emoji: "🍛",
  },
  {
    id: 21,
    name: "Kadhi Pakora",
    desc: "Gram flour yogurt curry with pakora",
    price: 90,
    category: "sabji",
    emoji: "🍲",
  },
  // Dal
  {
    id: 22,
    name: "Dal Tadka",
    desc: "Yellow dal tempered with cumin & garlic",
    price: 100,
    category: "dal",
    popular: true,
    emoji: "🍲",
  },
  {
    id: 23,
    name: "Dal Makhani",
    desc: "Black lentils slow cooked with butter & cream",
    price: 140,
    category: "dal",
    popular: true,
    emoji: "🧈",
  },
  {
    id: 24,
    name: "Dal Fry",
    desc: "Mixed dal fried with onion & tomato",
    price: 90,
    category: "dal",
    emoji: "🍲",
  },
  {
    id: 25,
    name: "Moong Dal",
    desc: "Light yellow moong dal with mild spices",
    price: 80,
    category: "dal",
    emoji: "🍲",
  },
  // Roti
  {
    id: 26,
    name: "Tawa Roti",
    desc: "Whole wheat roti cooked on iron tawa",
    price: 10,
    category: "roti",
    emoji: "🫓",
  },
  {
    id: 27,
    name: "Butter Roti",
    desc: "Roti topped with fresh butter",
    price: 15,
    category: "roti",
    emoji: "🧈",
  },
  {
    id: 28,
    name: "Tandoori Roti",
    desc: "Baked in clay tandoor",
    price: 15,
    category: "roti",
    emoji: "🫓",
  },
  {
    id: 29,
    name: "Naan",
    desc: "Soft leavened bread from tandoor",
    price: 20,
    category: "roti",
    emoji: "🫓",
  },
  {
    id: 30,
    name: "Butter Naan",
    desc: "Naan brushed with generous butter",
    price: 25,
    category: "roti",
    popular: true,
    emoji: "🧈",
  },
  {
    id: 31,
    name: "Missi Roti",
    desc: "Gram flour & wheat mixed roti",
    price: 15,
    category: "roti",
    emoji: "🫓",
  },
  // Rice
  {
    id: 32,
    name: "Plain Rice",
    desc: "Steamed basmati rice",
    price: 60,
    category: "rice",
    emoji: "🍚",
  },
  {
    id: 33,
    name: "Jeera Rice",
    desc: "Cumin tempered basmati rice",
    price: 80,
    category: "rice",
    popular: true,
    emoji: "🍚",
  },
  {
    id: 34,
    name: "Veg Pulao",
    desc: "Rice cooked with mixed vegetables",
    price: 100,
    category: "rice",
    emoji: "🍛",
  },
  {
    id: 35,
    name: "Dal Khichdi",
    desc: "Rice & lentil comfort food with ghee",
    price: 90,
    category: "rice",
    popular: true,
    emoji: "🍲",
  },
  // Thali
  {
    id: 36,
    name: "Simple Thali",
    desc: "2 Roti, 1 Sabji, Dal, Rice, Salad, Papad",
    price: 120,
    category: "thali",
    emoji: "🥘",
  },
  {
    id: 37,
    name: "Special Thali",
    desc: "3 Roti, 2 Sabji, Dal, Rice, Salad, Papad, Sweet, Raita, Butter",
    price: 180,
    category: "thali",
    popular: true,
    emoji: "🥘",
  },
  {
    id: 38,
    name: "Deluxe Thali",
    desc: "4 Roti, 2 Sabji, Dal Makhani, Rice, Paneer, Salad, Papad, Sweet, Raita, Lassi",
    price: 250,
    category: "thali",
    popular: true,
    emoji: "⭐",
  },
  // Drinks
  {
    id: 39,
    name: "Chai",
    desc: "Hot Indian masala tea",
    price: 20,
    category: "drinks",
    popular: true,
    emoji: "☕",
  },
  {
    id: 40,
    name: "Sweet Lassi",
    desc: "Chilled yogurt drink with sugar",
    price: 50,
    category: "drinks",
    popular: true,
    emoji: "🥛",
  },
  {
    id: 41,
    name: "Salted Lassi",
    desc: "Chilled yogurt drink with cumin & salt",
    price: 50,
    category: "drinks",
    emoji: "🥛",
  },
  {
    id: 42,
    name: "Masala Buttermilk",
    desc: "Spiced buttermilk with cumin & coriander",
    price: 30,
    category: "drinks",
    emoji: "🥛",
  },
  {
    id: 43,
    name: "Nimbu Pani",
    desc: "Fresh lemon juice with salt & sugar",
    price: 30,
    category: "drinks",
    emoji: "🍋",
  },
  {
    id: 44,
    name: "Mango Shake",
    desc: "Thick mango milkshake (seasonal)",
    price: 60,
    category: "drinks",
    emoji: "🥭",
  },
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
    value: 18,
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
    suffix: "",
    label: "Google Rating (×10)",
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
    desc: "Founded in 2005, Shree Ganesh Restaurant and Dhaba has been serving delicious pure veg food to travelers on the Indore - Icchapur highway for over 18 years. Our commitment to quality and hygiene has made us a trusted stop for families, truck drivers, and tourists alike.",
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
    desc: "Our chefs have 15+ years of experience in Rajasthani and North Indian cuisine. Every dish is made with expertise.",
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
    event: "Started as a small food stall on NH-347BG highway with just 4 tables",
  },
  {
    year: "2009",
    event: "Expanded to a full dhaba with 15 tables and a proper kitchen",
  },
  {
    year: "2012",
    event: "Added 5 clean rooms for travelers — first rooms on this highway",
  },
  {
    year: "2015",
    event: 'Featured in local newspaper as "Best Highway Dhaba" in the region',
  },
  {
    year: "2018",
    event: "Expanded to 10 rooms (AC & Non-AC) with modern facilities",
  },
  {
    year: "2021",
    event: "Crossed 50,000+ happy customers and 4.5 Google rating",
  },
  {
    year: "2024",
    event:
      "Complete renovation with modern amenities while keeping the dhaba charm",
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
      "NH-347BG Highway, Khanda–Indore Road",
      "Village Baswa, District Khargone",
      "Madhya Pradesh 451111",
    ],
    action: "https://maps.google.com/?q=24.6,73.7",
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


