export interface Achievement {
  id: number;
  value: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    value: "5",
    title: "Walk Smart Tours",
    description: "Student-led free walking tour concepts focused on culture, art, architecture, heritage, innovation, and learning.",
    details: [
      "Architecture · Heritage · Art & Culture themes",
      "Gardens by the Bay & Marina Bay Sands",
      "Haji Lane 'The Lane Edit' — street art & boutique culture",
      "Kampong Glam Cultural Heritage",
      "All tours free, student-led, open to all PGDM students",
    ],
    icon: "🗺️",
  },
  {
    id: 2,
    value: "3",
    title: "Nations Represented",
    description: "Our diverse team brings together Myanmar, India, and Sri Lanka — 5 voices, one mission.",
    details: [
      "Myanmar · India · Sri Lanka",
      "Shweta, Sandy, Aung, Shin & Sathya",
      "Cultural diversity embedded in every tour concept",
      "Backgrounds in Corporate Communication across 3 countries",
      "Designed tours to welcome and support new international students",
    ],
    icon: "🌏",
  },
  {
    id: 3,
    value: "1",
    title: "Newsletter Published",
    description: "May 2026 Limited Edition Newsletter featuring Haji Lane: The Lane Edit tour.",
    details: [
      "Spotlights Haji Lane: street art, indie boutiques & heritage cafés",
      "Student stories and personal reflections from the tour",
      "Curated photography and artwork from the walk",
      "Distributed to all PGDM students at ACETEK College",
    ],
    icon: "📰",
  },
  {
    id: 4,
    value: "1",
    title: "Website Launched",
    description: "Online brand presence for tours, team information, and newsletter.",
    details: [
      "Tour descriptions, routes and upcoming events for all five Walk Smart Tours",
      "Professional team bios and educational backgrounds",
      "Full tour descriptions, routes and upcoming events",
      "QR codes on all materials for easy mobile access",
    ],
    icon: "🌐",
  },
];
