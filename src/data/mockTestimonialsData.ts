// src/data/mockTestimonialsData.ts
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Kumar Shrestha",
    role: "CEO",
    company: "Himalayan Capital Ltd.",
    content:
      "Digi Hub transformed our brokerage operations. Their platform reduced our order execution time by 87% and increased client satisfaction dramatically.",
    rating: 5,
  },
  {
    id: "2",
    name: "Sita Devi Joshi",
    role: "Head of Trading",
    company: "Everest Securities",
    content:
      "The mobile trading app they built for us is now used by over 120,000 retail investors. Best decision we ever made.",
    rating: 5,
  },
  {
    id: "3",
    name: "Krishna Bahadur Thapa",
    role: "Chief Compliance Officer",
    company: "Global IME Broker",
    content:
      "Their real-time risk engine has completely automated our compliance monitoring. No more manual reports — pure efficiency.",
    rating: 5,
  },
  {
    id: "4",
    name: "Anita Sharma",
    role: "Managing Director",
    company: "Sagarmatha Trading House",
    content:
      "We went from legacy systems to a modern, scalable platform in just 4 months. Their team is world-class.",
    rating: 5,
  },
  {
    id: "5",
    name: "Bishnu Prasad Acharya",
    role: "CTO",
    company: "Nepal Investment Mega Bank",
    content:
      "Their backend infrastructure handles peak trading volume without breaking a sweat. 100% uptime during Dashain rush — incredible.",
    rating: 5,
  },
  {
    id: "6",
    name: "Prakash Man Singh",
    role: "Director",
    company: "Kathmandu Finance",
    content:
      "The AI trading bots increased our proprietary trading profits by 43% in the first quarter. Game changer.",
    rating: 5,
  },
];
