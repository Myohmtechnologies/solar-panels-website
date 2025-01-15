export interface City {
  name: string;
  code: string;
  population: number;
  sunshineHours?: number;
  description?: string;
  solarAdvantages?: string[];
  localIncentives?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  slug?: string;
  reviews?: Review[];
  installation?: Installation;
  heroImage?: {
    url: string;
    alt: string;
  };
  faq?: FAQItem[];
  regulations?: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface Installation {
  customerName: string;
  city: string;
  monthlySavings: number;
  systemSize: number;
  panelsCount: number;
  invertersCount: number;
  testimonial: string;
  rating: number;
  imageUrl: string;
}

export interface Review {
  author: string;
  location: string;
  comment: string;
  rating: number;
}

export interface Department {
  name: string;
  code: string;
  coverImage: {
    url: string;
    alt: string;
  };
  cities: Record<string, City>;
}

export interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[];
  category?: 'technique' | 'aides' | 'local' | 'general';
}

export interface DepartmentFAQ {
  commonQuestions: FAQItem[];
  citySpecificQuestions: {
    [cityCode: string]: FAQItem[];
  };
}
