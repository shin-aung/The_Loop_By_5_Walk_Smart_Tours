export interface Tour {
  id: number;
  name: string;
  slug: string;
  theme: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  duration: string;
  bestTime: string;
  image: string;
  highlights: string[];
  learningObjectives: string[];
  member?: string;
}

export const tours: Tour[] = [
  {
    id: 1,
    name: "Haji Lane: The Lane Edit",
    slug: "haji-lane-the-lane-edit",
    theme: "Street Art, Boutique Culture & Heritage",
    shortDescription:
      "Explore Haji Lane through street art, indie boutiques, cafes, and cultural heritage.",
    fullDescription:
      "Haji Lane: The Lane Edit is a student-friendly cultural walking tour that introduces visitors to one of Singapore's most creative and colourful streets. The tour weaves through vibrant murals, independent fashion boutiques, heritage cafés, and the unique atmosphere of Kampong Glam. You will discover how art, culture, and modern creativity coexist on a single iconic lane.",
    location: "Haji Lane, Kampong Glam",
    duration: "1.5 to 2 hours",
    bestTime: "Morning or late afternoon",
    image: "/media/images/tours/haji-lane.jpg", // Source: Newsletter cover, Haji Lane street art
    highlights: [
      "Street art and murals",
      "Indie boutiques and creative shops",
      "Heritage cafés and local flavours",
      "Creative photo spots",
      "Kampong Glam cultural atmosphere",
    ],
    learningObjectives: [
      "Understand how street art communicates culture and identity",
      "Explore how small businesses build brand identity in heritage areas",
      "Learn how heritage and modern creativity connect in Singapore",
      "Experience the visual storytelling of a culturally rich neighbourhood",
    ],
    member: "Sathya Subhavi Ravindra",
  },
  {
    id: 2,
    name: "Gardens by the Bay & Marina Bay Sands",
    slug: "gardens-by-the-bay-marina-bay",
    theme: "Architecture, Innovation & Urban Design",
    shortDescription:
      "Discover Singapore's iconic architecture and forward-thinking urban innovation along Marina Bay.",
    fullDescription:
      "This tour takes students on a walk through Singapore's most celebrated architectural landmarks. From the futuristic Supertrees of Gardens by the Bay to the iconic silhouette of Marina Bay Sands, the tour explores how Singapore has become a global leader in sustainable design and urban innovation. Students will gain insight into how architecture shapes identity and inspires city development.",
    location: "Gardens by the Bay & Marina Bay",
    duration: "2 to 2.5 hours",
    bestTime: "Late afternoon or early evening",
    image: "/media/images/tours/gardens-bay.jpg", // Source: Presentation Slide 7 — Gardens by the Bay supertrees
    highlights: [
      "Supertree Grove at Gardens by the Bay",
      "Marina Bay Sands skyline views",
      "Sustainable design and green architecture",
      "Bay waterfront promenade",
      "Night light and garden spectacle",
    ],
    learningObjectives: [
      "Understand sustainable architecture and green building concepts",
      "Explore how iconic landmarks build national identity",
      "Learn about Singapore's urban planning vision",
      "Observe how public space design encourages community interaction",
    ],
    member: "Shin Thant Aung",
  },
  {
    id: 3,
    name: "Kampong Glam Cultural Heritage",
    slug: "kampong-glam-cultural-heritage",
    theme: "Art, Creativity & Cultural Heritage",
    shortDescription:
      "Walk through Kampong Glam and experience Singapore's Malay heritage, art, and multicultural spirit.",
    fullDescription:
      "The Kampong Glam Cultural Heritage tour takes students deep into one of Singapore's oldest and most vibrant heritage districts. From the Sultan Mosque to Arab Street and colourful shophouses, the walk reveals layers of Malay, Arab, and multicultural history. Students will appreciate how Singapore preserves its cultural roots while embracing modern creativity.",
    location: "Kampong Glam, Arab Street",
    duration: "1.5 to 2 hours",
    bestTime: "Morning to afternoon",
    image: "/media/images/tours/kampong-glam.jpg", // Source: Presentation Slide 9 — Kampong Glam Tour
    highlights: [
      "Sultan Mosque and Malay heritage",
      "Arab Street and textile traders",
      "Colourful heritage shophouses",
      "Bussorah Street café culture",
      "Multicultural art and architecture",
    ],
    learningObjectives: [
      "Understand the Malay-Arab cultural heritage of Singapore",
      "Explore how multicultural communities shape urban identity",
      "Learn how heritage conservation balances tradition and modernity",
      "Experience storytelling through architecture and street life",
    ],
    member: "Shweta Suryawanshi",
  },
  {
    id: 4,
    name: "Singapore Sustainability & Retail Walk",
    slug: "sustainability-retail-walk",
    theme: "Sustainability, Retail & City Development",
    shortDescription:
      "Explore how Singapore blends sustainable practices with dynamic retail environments across the city.",
    fullDescription:
      "This tour explores the intersection of sustainability and retail in Singapore's evolving cityscape. Students will discover how Singapore integrates green practices into commercial spaces, shopping districts, and mixed-use developments. From eco-friendly retail concepts to innovative city planning, this walk reveals how sustainability is woven into everyday Singapore life.",
    location: "Central Singapore",
    duration: "1.5 to 2 hours",
    bestTime: "Weekday morning or afternoon",
    image: "/media/images/tours/architecture-city.jpg", // Source: Presentation Slide 8 — Architecture & City Development
    highlights: [
      "Eco-friendly commercial spaces",
      "Singapore's green retail concepts",
      "Mixed-use urban development examples",
      "Sustainable city infrastructure",
      "Student-friendly shopping and learning spots",
    ],
    learningObjectives: [
      "Understand how sustainability is embedded in retail design",
      "Explore Singapore's approach to green city development",
      "Learn how consumer spaces communicate brand and values",
      "Observe sustainable urban planning in practice",
    ],
    member: "Aung Min Thant",
  },
  {
    id: 5,
    name: "Technology & Innovation Circuit",
    slug: "technology-innovation-circuit",
    theme: "Technology, Smart City & Digital Innovation",
    shortDescription:
      "Discover how Singapore leads the world in smart city technology and digital innovation.",
    fullDescription:
      "The Technology and Innovation Circuit introduces students to Singapore's Smart Nation initiative and the visible signs of digital transformation across the city. From smart transport systems to data centres and innovation hubs, the tour illustrates how technology shapes modern urban living. Students will explore how Singapore positions itself as a global technology leader.",
    location: "Singapore Tech Districts",
    duration: "1.5 to 2 hours",
    bestTime: "Weekday morning",
    image: "/media/images/tours/marina-bay.jpg", // Source: Presentation Slide 7 — Marina Bay Sands
    highlights: [
      "Smart Nation infrastructure examples",
      "Innovation hubs and tech campuses",
      "Digital public services in action",
      "Smart transport and mobility systems",
      "Singapore's digital future vision",
    ],
    learningObjectives: [
      "Understand Singapore's Smart Nation strategy",
      "Explore how digital technology reshapes public life",
      "Learn how innovation culture is built in a city-state",
      "Observe examples of human-centred technology design",
    ],
    member: "Su Sandy Myint",
  },
];
