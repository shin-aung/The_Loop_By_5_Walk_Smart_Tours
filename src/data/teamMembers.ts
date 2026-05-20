export interface TeamMember {
  id: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  focusArea: string;
  image: string;
  description: string;
  isPending?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "shin-thant-aung",
    name: "Shin Thant Aung",
    shortName: "Shin",
    country: "Myanmar",
    flag: "🇲🇲",
    focusArea: "Technology & Smart City",
    image: "/media/images/team/shin-thant-aung.jpg",
    description:
      "Shin leads the Technology & Innovation Circuit tour, exploring Singapore's Smart Nation initiative and digital transformation. His passion for technology drives the group's digital presence and website development.",
    isPending: false,
  },
  {
    id: "su-sandy-myint",
    name: "Su Sandy Myint",
    shortName: "Sandy",
    country: "Myanmar",
    flag: "🇲🇲",
    focusArea: "Technology & Digital Media",
    image: "/media/images/team/su-sandy-myint.jpg",
    description:
      "Sandy focuses on technology and digital media, bringing creativity to the group's content strategy. She contributes to the team's online presence and tour storytelling through digital platforms.",
    isPending: false,
  },
  {
    id: "aung-min-thant",
    name: "Aung Min Thant",
    shortName: "Aung",
    country: "Myanmar",
    flag: "🇲🇲",
    focusArea: "Sustainability & Retail",
    image: "/media/images/team/aung-min-thant.jpg",
    description:
      "Aung specialises in sustainability and retail, curating the Sustainability & Retail Walk tour. He explores how Singapore integrates green practices into commercial environments and city development.",
    isPending: false,
  },
  {
    id: "shweta-suryawanshi",
    name: "Shweta Suryawanshi",
    shortName: "Shweta",
    country: "India",
    flag: "🇮🇳",
    focusArea: "Architecture & Urban Design",
    image: "/media/images/team/shweta-suryawanshi.jpg",
    description:
      "Shweta leads the Kampong Glam Cultural Heritage tour with a keen eye for architecture and urban design. She explores how Singapore's built environment preserves culture while embracing modernity.",
    isPending: false,
  },
  {
    id: "sathya-subhavi-ravindra",
    name: "Sathya Subhavi Ravindra",
    shortName: "Sathya",
    country: "Sri Lanka",
    flag: "🇱🇰",
    focusArea: "Art & Culture",
    image: "/media/images/team/sathya-subhavi-ravindra.jpg",
    description:
      "Sathya brings the art and culture perspective to The Loop by 5, curating the Haji Lane: The Lane Edit tour. Her love for creative expression and cultural storytelling shapes the group's visual identity.",
    isPending: false,
  },
];
