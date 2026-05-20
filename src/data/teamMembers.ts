export interface TeamMember {
  id: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  focusArea: string;
  professionalImage: string;
  aboutMeImage: string;
  description: string;
  portfolioUrl?: string;
  portfolioQr?: string;
  portfolioLabel?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "shin-thant-aung",
    name: "Shin Thant Aung",
    shortName: "Shin",
    country: "Myanmar",
    flag: "🇲🇲",
    focusArea: "Technology & Smart City",
    professionalImage: "/media/images/team/shin-professional.jpg",
    aboutMeImage: "/media/images/team/shin-about-me.jpg",
    description:
      "Software developer and Bachelor of IT from James Cook University Singapore. Shin leads the Technology & Innovation Circuit tour, exploring Singapore's Smart Nation initiative. Thoughtful, ambitious, and growth-minded.",
    portfolioUrl: "https://shin-thant-aung-portfolio.vercel.app/",
    portfolioQr: "/media/images/team/shin-qr.png",
    portfolioLabel: "shin-thant-aung-portfolio.vercel.app",
  },
  {
    id: "su-sandy-myint",
    name: "Su Sandy Myint",
    shortName: "Sandy",
    country: "Myanmar",
    flag: "🇲🇲",
    focusArea: "Technology & Digital Media",
    professionalImage: "/media/images/team/sandy-professional.jpg",
    aboutMeImage: "/media/images/team/sandy-about-me.jpg",
    description:
      "Bachelor of Engineering in IT from Monywa Technological University, Myanmar. Web developer with experience at OrientWebs. Sandy brings digital creativity to the group's content and online presence.",
    portfolioUrl: "https://su-sandy-myint-portfolio.vercel.app/",
    portfolioQr: "/media/images/team/sandy-qr.png",
    portfolioLabel: "su-sandy-myint-portfolio.vercel.app",
  },
  {
    id: "aung-min-thant",
    name: "Aung Min Thant",
    shortName: "Aung",
    country: "Myanmar",
    flag: "🇲🇲",
    focusArea: "Sustainability & Retail",
    professionalImage: "/media/images/team/aung-professional.jpg",
    aboutMeImage: "/media/images/team/aung-about-me.jpg",
    description:
      "Experienced in sales leadership and retail management across Myanmar. Former Assistant Manager at Jupiter Bar & Restaurant and Sales & Billing Supervisor at Mytel Telecom. Leads the Sustainability & Retail Walk tour.",
  },
  {
    id: "shweta-suryawanshi",
    name: "Shweta Suryawanshi",
    shortName: "Shweta",
    country: "India",
    flag: "🇮🇳",
    focusArea: "Architecture & Urban Design",
    professionalImage: "/media/images/team/shweta-professional.jpg",
    aboutMeImage: "/media/images/team/shweta-about-me.jpg",
    description:
      "Bachelor of Architecture (B.Arch) with 3+ years as an Architectural Designer and Project Coordinator at MNC DAR Group. Skilled in AutoCAD, Revit, Photoshop, and SketchUp. Leads the Kampong Glam Cultural Heritage tour.",
    portfolioUrl: "https://drive.google.com/file/d/12x34jBBhQoNMOxkIQftiGFxv57c8_VDV/view?usp=sharing",
    portfolioQr: "/media/images/team/shweta-qr.png",
    portfolioLabel: "View Portfolio (Google Drive)",
  },
  {
    id: "sathya-subhavi-ravindra",
    name: "Sathya Subhavi Ravindra",
    shortName: "Sathya",
    country: "Sri Lanka",
    flag: "🇱🇰",
    focusArea: "Art & Culture",
    professionalImage: "/media/images/team/sathya-professional.jpg",
    aboutMeImage: "/media/images/team/sathya-about-me.jpg",
    description:
      "Creative designer and digital artist with a Bachelor of Fine Arts from Lovely Professional University, India. Freelance designer since 2018, with solo digital art exhibition at Alliance Française de Colombo. Leads the Haji Lane: The Lane Edit tour.",
    portfolioUrl: "https://brand.site/SathyaRavindra",
    portfolioQr: "/media/images/team/sathya-qr.png",
    portfolioLabel: "brand.site/SathyaRavindra",
  },
];
