import { ElementType } from "react";

export interface Feature {
  icon: ElementType;
  title: string;
  desc: string;
}

export interface SpecialItem {
  name: string;
  desc: string;
  price: string;
  image: string;
  badge?: string;
}

export interface RoomFeature {
  text: string;
}

export interface InfoItem {
  icon: ElementType;
  text: string;
}

export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQType {
  question: string;
  answer: string;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
  emoji: string;
}

export interface Category {
  id: string;
  label: string;
  emoji: string;
}

export interface Room {
  id: string;
  name: string;
  image: string;
  price: number;
  desc: string;
  features: string[];
  popular?: boolean;
}

export interface ContactItem {
  title: string;
  details: string[];
  action?: string | null;
  actionLabel?: string | null;
  icon: React.ReactNode;
}
