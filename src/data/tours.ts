export interface ItineraryItem {
  time: string;
  activity: string;
  duration: string;
  description?: string;
}

export interface UsefulLink {
  label: string;
  sublabel?: string;
  url: string;
}

export interface Tour {
  id: number;
  name: string;
  slug: string;
  planLabel?: string;
  theme: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  duration: string;
  timeRange?: string;
  specialNote?: string;
  bestTime: string;
  image: string;
  planImage?: string;
  highlights: string[];
  learningObjectives: string[];
  itinerary?: ItineraryItem[];
  howToGetThere?: string[];
  goodToKnow?: string[];
  makeItMemorable?: string[];
  usefulLinks?: UsefulLink[];
  member?: string;
}

export const tours: Tour[] = [

  /* ══════════════════════════════════════════════════
     1 · KAMPONG GLAM TOUR — by Sathya
  ══════════════════════════════════════════════════ */
  {
    id: 1,
    name: "Kampong Glam Tour",
    slug: "kampong-glam-cultural-heritage",
    theme: "Art, Creativity & Cultural Heritage · Famous for Murals",
    shortDescription:
      "Explore bold murals, the golden-domed Sultan Mosque, Arab Street, and the vibrant Malay-Muslim heritage of Kampong Glam.",
    fullDescription:
      "Kampong Glam is Singapore's historic Malay-Muslim quarter, reborn as its liveliest and most creative cultural district. This Walk Smart Tour winds through Arab Street and Haji Lane, past the unmissable Sultan Mosque — a golden-domed landmark built in 1932 — and into streets lined with bold murals painted by local and international artists. Students will discover how identity, heritage, diversity, and modern creativity coexist on every wall and corner of this iconic neighbourhood.",
    location: "Kampong Glam, Arab Street, Singapore",
    duration: "2 – 2.5 hours",
    timeRange: "10:00 AM – 12:30 PM",
    bestTime: "Morning or early afternoon",
    image: "/media/images/tours/kampong-glam.jpg",
    highlights: [
      "Sultan Mosque — golden-domed landmark built in 1932",
      "Bold street murals by local & international artists",
      "Arab Street textile traders and heritage shopfronts",
      "Haji Lane — indie boutiques and creative culture",
      "Bussorah Street café culture and Peranakan houses",
    ],
    learningObjectives: [
      "Understand the Malay-Muslim cultural heritage of Singapore",
      "Explore how murals communicate identity, diversity and social issues",
      "Learn how 1989 conservation preserved Kampong Glam's five-foot walkways",
      "Experience how heritage and modern creativity share the same streets",
    ],
    itinerary: [
      { time: "10:00 AM", activity: "Meet & Briefing", duration: "10 min", description: "Bugis MRT Exit B · Attendance & safety briefing" },
      { time: "10:10 AM", activity: "Sultan Mosque", duration: "30 min", description: "Explore the golden-domed landmark and learn about the Malay royal heritage of Kampong Glam" },
      { time: "10:40 AM", activity: "Arab Street & Textile Row", duration: "25 min", description: "Walk through historic fabric merchants, heritage shopfronts and the five-foot covered walkways" },
      { time: "11:05 AM", activity: "Mural Walk — Haji Lane", duration: "40 min", description: "Discover bold street art, indie boutiques and the stories told through murals on every wall" },
      { time: "11:45 AM", activity: "Bussorah Street", duration: "20 min", description: "Stroll the café strip, observe Peranakan houses and reflect on the neighbourhood's evolution" },
      { time: "12:05 PM", activity: "Group Closing", duration: "15 min", description: "Group photo, Q&A reflection and end at Bugis MRT" },
    ],
    howToGetThere: [
      "Take MRT to Bugis Station (East West Line / Downtown Line)",
      "Use Exit B — turn left and walk along Victoria Street (5 min)",
      "Enter Arab Street from the North Bridge Road junction",
      "Sultan Mosque is visible on your right as the starting point",
    ],
    goodToKnow: [
      "All outdoor areas are free to enter",
      "Dress modestly when near the Sultan Mosque",
      "Wear comfortable walking shoes — streets are uneven",
      "Best visited on weekday mornings to avoid weekend crowds",
    ],
    makeItMemorable: [
      "Find your favourite mural and write down what story it tells",
      "Try a local café on Bussorah Street after the walk",
      "Look for the Istana Kampong Gelam — the former Malay royal palace",
    ],
    member: "Sathya Subhavi Ravindra",
  },

  /* ══════════════════════════════════════════════════
     2 · MARINA BAY: TECH, ARCHITECTURE & INNOVATION — by Shin (Plan A)
  ══════════════════════════════════════════════════ */
  {
    id: 2,
    name: "Marina Bay: Tech, Architecture & Innovation Walk",
    slug: "marina-bay-tech-architecture-walk",
    planLabel: "Plan A",
    theme: "Technology · Architecture · Sustainability · Retail Innovation",
    shortDescription:
      "Explore Green Heart Marina One and the iconic Floating Apple Store — two futuristic landmarks showcasing Singapore's smart urban design.",
    fullDescription:
      "Plan A takes students on a fascinating evening walk through two of Marina Bay's most forward-thinking landmarks. First stop is Green Heart Marina One — a 65,000+ sq ft sustainable urban garden inside a futuristic office tower, LEED Platinum certified with energy-efficient systems and rainwater harvesting. Then the group walks the waterfront promenade to Apple's iconic glass dome store, floating on the bay at Marina Bay Sands. The tour covers technology, architecture, sustainability, and retail innovation in one compact walk.",
    location: "Marina One & Apple Store, Marina Bay Sands",
    duration: "2 – 2.5 hours",
    timeRange: "4:00 – 6:30 PM",
    bestTime: "Late afternoon (4:00 PM start recommended)",
    image: "/media/images/tours/marina-bay-tech-plan.jpg",
    planImage: "/media/images/tours/shin-tour-plan-full.jpg",
    highlights: [
      "Green Heart Marina One — 65,000+ sq ft sustainable urban garden",
      "LEED Platinum & Green Mark Platinum certified building",
      "Floating Apple Store — built on water with glass dome & bridge",
      "Free 'Today at Apple' sessions at the store",
      "Iconic Marina Bay waterfront promenade walk",
    ],
    learningObjectives: [
      "Smart building systems, energy efficiency, lighting & water management",
      "Biophilic design, curved structures, space planning & materials use",
      "Green roofs, heat island reduction & sustainability certifications",
      "Customer experience, minimalist design & tech integration in retail",
    ],
    itinerary: [
      { time: "4:00 PM", activity: "Meet & Briefing", duration: "10 min", description: "Marina One / Marina Bay MRT · Attendance & safety briefing" },
      { time: "4:10 PM", activity: "Green Heart (Marina One)", duration: "45 min", description: "Explore green architecture, terraces, water features & public spaces" },
      { time: "4:55 PM", activity: "Move to Apple Store", duration: "30 min", description: "Walk along the waterfront promenade or take MRT to Bayfront (if raining)" },
      { time: "5:25 PM", activity: "Apple Marina Bay Sands", duration: "50 min", description: "Observe design, technology, retail experience & reflections" },
      { time: "6:15 PM", activity: "Group Closing", duration: "15 min", description: "Reflection, Q&A, group photo & end at Bayfront MRT" },
    ],
    howToGetThere: [
      "Start: Marina Bay MRT (Circle / North–South Line)",
      "Walk to Marina One via underground link (5–10 min)",
      "Walk waterfront promenade to Apple Store (20–35 min)",
      "Or take MRT to Bayfront (1 stop) if raining",
    ],
    goodToKnow: [
      "Wear comfortable shoes",
      "Bring water & umbrella (just in case)",
      "Toilets available at Marina One, The Shoppes at MBS & MRT stations",
      "All areas are public & free to explore",
    ],
    makeItMemorable: [
      "Look up through the Apple Store's glass oculus from below",
      "Walk across the floating bridge to reach the store",
      "Spot the reflection of the skyline on the bay at sunset",
    ],
    usefulLinks: [
      { label: "Green Heart Marina One", sublabel: "YouTube Short", url: "https://youtube.com/shorts/iTAyO4CcTPO7Ji=s3p3M-MS-Njhro3t" },
      { label: "Floating Apple Store", sublabel: "YouTube Short", url: "https://youtube.com/shorts/5QozCri09B4gPsi=SV3LKW1BCYSi2ASb" },
      { label: "Sentosa Sensoryscape", sublabel: "YouTube Short", url: "https://youtube.com/shorts/Z_hgJKVD3YQhsi=3TjBKzsiA-Qk27n" },
    ],
    member: "Shin Thant Aung",
  },

  /* ══════════════════════════════════════════════════
     3 · SENTOSA ISLAND: ART, LIGHT & CULTURE — by Shin (Plan B)
  ══════════════════════════════════════════════════ */
  {
    id: 3,
    name: "Sentosa Island: Art, Light & Culture",
    slug: "sentosa-island-art-light-culture",
    planLabel: "Plan B",
    theme: "Art · Culture · Immersive Technology · Leisure",
    shortDescription:
      "An evening adventure across Sentosa — scenic boardwalk, the ImagiNite light show at Sensoryscape, and optional beach time.",
    fullDescription:
      "Plan B is an evening adventure that begins at HarbourFront MRT and takes students across the scenic Sentosa Boardwalk to the island. The highlight is Sensoryscape ImagiNite — an immersive 15-minute light and sound experience that blends nature, art, and interactive technology. Students can also enjoy the Sentosa beaches for a group chill and sunset reflection. The tour is free, family-friendly, and designed to inspire creative thinking through real-world design and art experiences.",
    location: "Sentosa Island (HarbourFront MRT → Sensoryscape)",
    duration: "3.5 – 4 hours",
    timeRange: "5:00 – 9:00 PM",
    specialNote: "ImagiNite Show: 7:30 PM daily",
    bestTime: "Late afternoon start (5:00 PM) to catch the ImagiNite show",
    image: "/media/images/tours/sentosa-island-plan.jpg",
    planImage: "/media/images/tours/shin-tour-plan-full.jpg",
    highlights: [
      "Sentosa Boardwalk — scenic elevated walkway from VivoCity",
      "Sea views, cable cars & skyline photo spots along the boardwalk",
      "Sensoryscape ImagiNite — immersive light & sound show at 7:30 PM",
      "Blends nature, art & interactive technology",
      "Optional Sentosa beaches — Siloso, Palawan or Tanjong",
    ],
    learningObjectives: [
      "Understand creative placemaking and immersive public art",
      "Explore how art and technology combine to create experiences",
      "Learn about sustainable, walking-friendly island design",
      "Observe how public spaces inspire community and leisure",
    ],
    itinerary: [
      { time: "5:00 PM", activity: "Meet at Harbourfront MRT / VivoCity", duration: "15 min", description: "Attendance & briefing" },
      { time: "5:15 PM", activity: "Sentosa Boardwalk Walk", duration: "35 min", description: "Scenic walk to Sentosa Island" },
      { time: "5:50 PM", activity: "Move Toward Sensoryscape", duration: "30 min", description: "Walk through Sentosa (signage) toward Lookout Loop" },
      { time: "6:20 PM", activity: "Sensoryscape (Daytime Visit)", duration: "50 min", description: "Explore installations & interactive zones before the show" },
      { time: "7:10 PM", activity: "Beach Break & Blue Hour", duration: "20 min", description: "Relax at the beach, photos & snacks" },
      { time: "7:30 PM", activity: "ImagiNite Show Begins", duration: "15 min", description: "Enjoy the 15-min immersive light & sound experience" },
      { time: "8:30 PM", activity: "Group Reflection & Exit", duration: "30 min", description: "Final sharing, photo & head back (Use Sentosa Express / Bus if needed)" },
    ],
    howToGetThere: [
      "HarbourFront MRT — Take MRT to HarbourFront Station (North-East / Circle Line)",
      "VivoCity — Follow signs to Sentosa Boardwalk (Level 3)",
      "Sentosa Boardwalk — Walk across the boardwalk to Sentosa Island",
      "Sensoryscape — Enter via Lookout Loop (5–15 min walk from Beach Station)",
    ],
    goodToKnow: [
      "Wear comfortable shoes & bring light snacks",
      "Check weather before you go",
      "ImagiNite show starts at 7:30 PM daily — don't be late!",
      "Free Sentosa Bus A & B within the island",
    ],
    makeItMemorable: [
      "Photograph the cable cars over the boardwalk at golden hour",
      "Arrive at Sensoryscape early to explore before ImagiNite begins",
      "Watch ImagiNite from the central viewing area for the best experience",
    ],
    usefulLinks: [
      { label: "Green Heart Marina One", sublabel: "YouTube Short", url: "https://youtube.com/shorts/iTAyO4CcTPO7Ji=s3p3M-MS-Njhro3t" },
      { label: "Floating Apple Store", sublabel: "YouTube Short", url: "https://youtube.com/shorts/5QozCri09B4gPsi=SV3LKW1BCYSi2ASb" },
      { label: "Sentosa Sensoryscape", sublabel: "YouTube Short", url: "https://youtube.com/shorts/Z_hgJKVD3YQhsi=3TjBKzsiA-Qk27n" },
    ],
    member: "Shin Thant Aung",
  },

  /* ══════════════════════════════════════════════════
     4 · GARDENS BY THE BAY — by Sandy
  ══════════════════════════════════════════════════ */
  {
    id: 4,
    name: "Gardens by the Bay",
    slug: "gardens-by-the-bay",
    theme: "Nature, Futuristic Design & Sustainable Innovation",
    shortDescription:
      "Walk among the iconic Supertrees, cross the OCBC Skywalk, and discover how Gardens by the Bay merges nature with futuristic design.",
    fullDescription:
      "Gardens by the Bay is one of Singapore's most iconic and imaginative landmarks — a world-class horticultural park where nature meets cutting-edge design. This Walk Smart Tour takes students through the Supertree Grove, the 128-metre OCBC Skywalk suspended high above the ground, and the world's largest glass greenhouse, the Flower Dome. Students will explore how Singapore uses sustainable architecture, biophilic design, and innovation to create spaces that inspire both locals and visitors.",
    location: "18 Marina Gardens Drive, Singapore 018953",
    duration: "2 – 2.5 hours",
    timeRange: "4:00 PM – 6:30 PM",
    specialNote: "Garden Rhapsody Light Show: 7:45 PM & 8:45 PM",
    bestTime: "Late afternoon to catch both day and night views",
    image: "/media/images/tours/gardens-bay.jpg",
    highlights: [
      "Supertree Grove — giant vertical gardens that light up at night",
      "OCBC Skywalk — 128-metre suspended walkway above the canopy",
      "Flower Dome — world's largest glass greenhouse with 38,000+ plants",
      "Cloud Forest — misty mountain paradise with grand waterfall",
      "Garden Rhapsody — free nightly light & music show on the Supertrees",
    ],
    learningObjectives: [
      "Understand biophilic design and how nature is integrated into urban spaces",
      "Explore sustainable architecture, cooling systems and green infrastructure",
      "Learn how public landmarks shape Singapore's national identity",
      "Observe how innovative design attracts global tourism and community life",
    ],
    itinerary: [
      { time: "4:00 PM", activity: "Meet & Briefing", duration: "10 min", description: "Main Entrance — Arches by the Bay · Attendance & safety briefing" },
      { time: "4:10 PM", activity: "Supertree Grove", duration: "30 min", description: "Walk among the towering Supertrees and learn how they harvest rainwater and generate solar energy" },
      { time: "4:40 PM", activity: "OCBC Skywalk", duration: "25 min", description: "Walk the 128-metre elevated walkway connecting two Supertrees for aerial views of the bay" },
      { time: "5:05 PM", activity: "Flower Dome (Exterior)", duration: "20 min", description: "Observe the world's largest glass greenhouse and its award-winning architectural design" },
      { time: "5:25 PM", activity: "Cloud Forest (Exterior)", duration: "20 min", description: "View the misty mountain façade and learn about the Cloud Forest's waterfall and tropical plants" },
      { time: "5:45 PM", activity: "Bay Waterfront Walk", duration: "25 min", description: "Walk along the Marina Bay waterfront for views of the MBS skyline and ArtScience Museum" },
      { time: "6:10 PM", activity: "Group Closing", duration: "20 min", description: "Group photo at the Supertrees, Q&A reflection and end near Gift Shop / Bayfront MRT" },
    ],
    howToGetThere: [
      "Take MRT to Bayfront Station (Circle / Downtown Line), Exit B",
      "Follow signs to Gardens by the Bay (5 min walk through The Shoppes)",
      "Enter via the main Arches by the Bay entrance (free outdoor access)",
      "Supertree Grove is immediately visible on the right after entry",
    ],
    goodToKnow: [
      "Outdoor areas (Supertree Grove, Skywalk base) are free",
      "OCBC Skywalk has a small entry fee — check the Gardens website",
      "Flower Dome & Cloud Forest are ticketed indoor conservatories",
      "Wear comfortable shoes — paths can be wet from mist features",
      "Stay for the free Garden Rhapsody light show at 7:45 PM if time allows",
    ],
    makeItMemorable: [
      "Catch the free Garden Rhapsody light & sound show at 7:45 PM",
      "Walk the Cloud Forest waterfall route for the best indoor experience",
      "Photograph the Supertrees reflected in the bay at sunset",
    ],
    member: "Su Sandy Myint",
  },

  /* ══════════════════════════════════════════════════
     5 · MARINA BAY SANDS — by Sandy
  ══════════════════════════════════════════════════ */
  {
    id: 5,
    name: "Marina Bay Sands",
    slug: "marina-bay-sands",
    theme: "Iconic Landmark & Luxury Experience · Where Luxury Meets Iconic Views",
    shortDescription:
      "Experience panoramic 360° skyline views, the iconic SkyPark, ArtScience Museum, and the free Spectra light & water show.",
    fullDescription:
      "Marina Bay Sands is one of the most photographed and recognisable landmarks in the world — a masterpiece of modern architecture that towers over Singapore's waterfront. This Walk Smart Tour takes students from The Shoppes at MBS through the iconic hotel exterior, up to the SkyPark Observation Deck for 360° views of Singapore's skyline, across to the ArtScience Museum's distinctive lotus shape, and ends with the free Spectra light and water show at the Event Plaza. Students will explore luxury design, architectural engineering, and how world-class public spaces are built to inspire.",
    location: "10 Bayfront Avenue, Singapore 018956",
    duration: "2 – 2.5 hours",
    timeRange: "5:00 PM – 7:30 PM",
    specialNote: "Spectra Light & Water Show: 8:00 PM & 9:00 PM (free)",
    bestTime: "Late afternoon for sunset views from SkyPark",
    image: "/media/images/tours/marina-bay-sands.jpg",
    planImage: "/media/images/tours/marina-bay-sands-plan.jpg",
    highlights: [
      "SkyPark Observation Deck — panoramic 360° views of Singapore's skyline",
      "Infinity Pool view from the Observation Deck (hotel guests only)",
      "ArtScience Museum — iconic lotus-shaped exterior by Moshe Safdie",
      "Spectra Light & Water Show — free show at the Event Plaza",
      "The Shoppes at MBS — luxury boutiques, restaurants & world-class dining",
    ],
    learningObjectives: [
      "Understand how iconic architecture builds a city's global identity",
      "Explore the engineering behind the SkyPark cantilevered platform",
      "Learn how luxury retail and public spaces coexist in one development",
      "Observe how light, water and design create memorable public experiences",
    ],
    itinerary: [
      { time: "5:00 PM", activity: "Meet & Briefing", duration: "10 min", description: "The Shoppes at Marina Bay Sands main entrance · Attendance & safety briefing" },
      { time: "5:10 PM", activity: "The Shoppes & Hotel Exterior", duration: "20 min", description: "Walk through The Shoppes, observe the luxury retail environment and the iconic three-tower façade" },
      { time: "5:30 PM", activity: "SkyPark Observation Deck", duration: "40 min", description: "Enjoy panoramic 360° views of Singapore's stunning skyline and observe the infinity pool from above (ticketed)" },
      { time: "6:10 PM", activity: "Infinity Pool View from Deck", duration: "15 min", description: "Observe and photograph the world-famous infinity pool from the Observation Deck" },
      { time: "6:25 PM", activity: "ArtScience Museum (Exterior)", duration: "25 min", description: "Walk to the lotus-shaped ArtScience Museum, learn about its design and its role as a cultural landmark" },
      { time: "6:50 PM", activity: "Spectra Light & Water Show", duration: "15 min", description: "Watch the dazzling free Spectra show of lights, music and water at the Event Plaza" },
      { time: "7:15 PM", activity: "Group Closing", duration: "15 min", description: "Group photo at the Event Plaza, final reflections and exit via Bayfront MRT" },
    ],
    howToGetThere: [
      "Take MRT to Bayfront Station (Circle / Downtown Line), Exit A or C",
      "Follow signs to Marina Bay Sands — The Shoppes entrance (2 min walk)",
      "SkyPark Observation Deck: take the dedicated lifts in Tower 3 (ticketed)",
      "ArtScience Museum: walk along the waterfront from The Shoppes (5 min)",
    ],
    goodToKnow: [
      "SkyPark Observation Deck access is ticketed — check MBS website for prices",
      "Infinity pool access is for hotel guests only",
      "Spectra Light & Water Show is free and open to all (8:00 PM & 9:00 PM)",
      "Smart casual dress recommended for The Shoppes area",
      "Toilets are available at multiple points throughout The Shoppes",
    ],
    makeItMemorable: [
      "Watch sunset from the SkyPark Observation Deck for the best views",
      "Enjoy fine dining with a view at the Event Plaza restaurants",
      "End your day with the free Spectra light and water show",
    ],
    member: "Su Sandy Myint",
  },

  /* ══════════════════════════════════════════════════
     6 · SUSTAINABILITY & RETAIL WALK — by Shweta
  ══════════════════════════════════════════════════ */
  {
    id: 6,
    name: "Sustainability & Retail Walk",
    slug: "sustainability-retail-walk",
    theme: "Sustainability · Retail Innovation · City Development",
    shortDescription:
      "Explore how Singapore weaves sustainability into its retail environments, commercial spaces, and city planning.",
    fullDescription:
      "This Walk Smart Tour explores how Singapore leads the way in embedding sustainability into everyday retail and commercial life. Students will walk through green-certified shopping developments, observe eco-friendly building design, and discover how Singapore's city planners balance commercial growth with environmental responsibility. From green rooftops and rainwater systems to sustainable retail concepts and mixed-use urban developments, this tour shows that sustainability and style can coexist beautifully.",
    location: "Central Singapore — Orchard Road to Dhoby Ghaut",
    duration: "2 – 2.5 hours",
    timeRange: "10:00 AM – 12:30 PM",
    bestTime: "Weekday morning to avoid shopping crowds",
    image: "/media/images/tours/architecture-city.jpg",
    highlights: [
      "Green-certified commercial buildings and shopping developments",
      "Sustainable architecture features — green roofs, sky gardens, passive cooling",
      "Retail innovation — how brands communicate sustainability through design",
      "Mixed-use urban development combining retail, office and green space",
      "Singapore's Green Mark certification system in practice",
    ],
    learningObjectives: [
      "Understand how sustainability is designed into Singapore's retail spaces",
      "Explore Singapore's Green Mark certification and green building standards",
      "Learn how consumer spaces communicate brand values through architecture",
      "Observe how mixed-use developments balance commerce and community",
    ],
    itinerary: [
      { time: "10:00 AM", activity: "Meet & Briefing", duration: "10 min", description: "Dhoby Ghaut MRT Exit A · Attendance & introduction to sustainable retail" },
      { time: "10:10 AM", activity: "Plaza Singapura / Orchard Area", duration: "35 min", description: "Observe green-certified shopping developments, passive cooling design and sustainable retail features" },
      { time: "10:45 AM", activity: "Orchard Road Green Corridor", duration: "30 min", description: "Walk the iconic boulevard and observe sky gardens, green walls and eco-friendly building facades" },
      { time: "11:15 AM", activity: "313@somerset / TripleOne Somerset", duration: "30 min", description: "Study mixed-use retail design, Green Mark features and how brands present sustainability to shoppers" },
      { time: "11:45 AM", activity: "Student Reflection Walk", duration: "20 min", description: "Group discussion — what sustainable features did we spot? How does design communicate values?" },
      { time: "12:05 PM", activity: "Group Closing", duration: "20 min", description: "Group photo, Q&A and end at Somerset MRT" },
    ],
    howToGetThere: [
      "Take MRT to Dhoby Ghaut Station (North-South / Circle / North-East Lines)",
      "Use Exit A — Plaza Singapura is directly connected to the MRT",
      "The tour walks north along Orchard Road toward Somerset",
      "Tour ends near Somerset MRT (North-South Line)",
    ],
    goodToKnow: [
      "All outdoor walking areas are free to access",
      "Comfortable walking shoes recommended — 2+ km of walking",
      "Bring water — Orchard Road has limited free water fountains",
      "Weekday mornings are cooler and less crowded than weekends",
    ],
    makeItMemorable: [
      "Count how many Green Mark certified buildings you can spot on Orchard Road",
      "Find a retail space that uses plants, water or natural light as design elements",
      "Ask shop staff how their brand approaches sustainability",
    ],
    member: "Shweta Suryawanshi",
  },

  /* ══════════════════════════════════════════════════
     7 · JOO CHIAT TOUR — by Sathya
  ══════════════════════════════════════════════════ */
  {
    id: 7,
    name: "Joo Chiat Tour",
    slug: "joo-chiat-cultural-heritage",
    theme: "Peranakan Heritage · Colourful Shophouses · Living Culture",
    shortDescription:
      "Walk through Joo Chiat's famous Peranakan shophouses, intricate heritage tiles, carved wooden shutters, and vibrant multicultural community.",
    fullDescription:
      "Joo Chiat is one of Singapore's most beautifully preserved heritage neighbourhoods and a UNESCO-recognised Peranakan cultural stronghold. Famous for its pastel-coloured shophouses decorated with hand-painted tiles, intricate wooden shutters, and floral motifs, the area reflects a unique blend of Chinese, Malay, and European influences. This Walk Smart Tour invites students to experience a living Peranakan community — from traditional food stalls and fabric merchants to evolving local businesses and community spaces that keep heritage alive.",
    location: "Joo Chiat Road, East Singapore",
    duration: "2 – 2.5 hours",
    timeRange: "10:00 AM – 12:30 PM",
    bestTime: "Morning — best lighting for photography and cooler temperatures",
    image: "/media/images/tours/joo-chiat.jpg",
    highlights: [
      "Peranakan shophouse architecture with pastel façades",
      "Hand-painted heritage tiles and intricate carved wooden shutters",
      "Traditional Peranakan food culture and local businesses",
      "Unique blend of Chinese, Malay and European cultural heritage",
      "Living community spaces where heritage is still practised daily",
    ],
    learningObjectives: [
      "Understand Peranakan cultural identity and its origins in Singapore",
      "Observe how heritage conservation keeps communities and traditions alive",
      "Explore the visual language of Peranakan decorative arts and architecture",
      "Learn how cultural exchange between communities shapes a neighbourhood",
    ],
    itinerary: [
      { time: "10:00 AM", activity: "Meet & Briefing", duration: "10 min", description: "Paya Lebar MRT Exit A · Attendance & introduction to Peranakan heritage" },
      { time: "10:10 AM", activity: "Joo Chiat Road Shophouses", duration: "40 min", description: "Walk the iconic stretch of Peranakan shophouses — observe tiles, shutters, colours and architectural details up close" },
      { time: "10:50 AM", activity: "Koon Seng Road", duration: "25 min", description: "Explore Koon Seng Road — one of Singapore's most photographed Peranakan terraces with perfectly preserved pastel facades" },
      { time: "11:15 AM", activity: "Traditional Food & Businesses", duration: "25 min", description: "Visit traditional local businesses, kueh stalls and fabric merchants still operating in the neighbourhood" },
      { time: "11:40 AM", activity: "Cultural Reflection Walk", duration: "25 min", description: "Group walk and discussion — what stories do the tiles, colours and buildings tell about this community?" },
      { time: "12:05 PM", activity: "Group Closing", duration: "20 min", description: "Group photo at a heritage shophouse, Q&A reflection and end near Paya Lebar MRT" },
    ],
    howToGetThere: [
      "Take MRT to Paya Lebar Station (East West / Circle Line)",
      "Use Exit A — walk along Paya Lebar Road south (8 min)",
      "Turn onto Joo Chiat Road — the heritage shophouses begin immediately",
      "Koon Seng Road is a 5-minute walk from the start of Joo Chiat Road",
    ],
    goodToKnow: [
      "All outdoor areas are free to explore",
      "Bring a camera — Joo Chiat is one of Singapore's most photogenic streets",
      "Morning is the best time for photography (golden light, fewer cars)",
      "Try traditional Peranakan kueh from a local bakery along the route",
    ],
    makeItMemorable: [
      "Find your favourite tile pattern and sketch or photograph it",
      "Spot the differences between Chinese, Malay and European architectural details",
      "Try a traditional Nonya kueh from a heritage bakery on the route",
    ],
    member: "Sathya Subhavi Ravindra",
  },
];
