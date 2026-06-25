// Central content for REGAL 360° Property Services

export const COMPANY = {
  name: "Regal 360°",
  legalName: "Regal 360° Property Services",
  tagline: "Sri Lanka's first true one-stop property partner.",
  email: "info@regalpropertysl.com",
  phone: "+94 77 373 8943",
  address:
    "Suite 1222, Level 12, Block D (Regus), Parkland, No 33, Park Street, Colombo 02, Sri Lanka",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export const STATS = [
  { value: 250, suffix: "+", label: "Properties Closed" },
  { value: 100, suffix: "%", label: "Legal Compliance" },
  { value: 15, suffix: "+", label: "Years Combined Expertise" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const SERVICES = [
  {
    n: "001",
    title: "Residential Sales & Purchase",
    body: "From a first home to a family estate, we match the right buyer with the right property — and handle every step so the move feels effortless.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1100&q=80",
  },
  {
    n: "002",
    title: "Commercial Property",
    body: "Offices, retail and mixed-use spaces positioned to perform. We advise on location, yield and tenant fit across Colombo and beyond.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80",
  },
  {
    n: "003",
    title: "Investment Advisory",
    body: "Data-led guidance on where value is heading. We help you build a property portfolio that compounds, not just sits.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
  },
  {
    n: "004",
    title: "Legal & Documentation",
    body: "Title verification, deeds, transfers and due diligence — managed in-house so your transaction stays clean and protected.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=80",
  },
  {
    n: "005",
    title: "Development Consulting",
    body: "Advice on the existing and future potential of a property — from feasibility to a phased plan that unlocks its full value.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1100&q=80",
  },
];

export const FEATURES = [
  {
    title: "One-Stop Property Service",
    body: "Buy, sell, lease, finance and legal — every need handled under one roof, the first of its kind in Sri Lanka.",
  },
  {
    title: "In-House Legal Expertise",
    body: "We take care of titles, deeds and due diligence so you never have to chase a separate lawyer mid-deal.",
  },
  {
    title: "Future-Value Advisory",
    body: "We advise on existing and future development potential, making sure your property reaches its full potential.",
  },
  {
    title: "Residential · Commercial · Investment",
    body: "Whatever the purpose of your property, we have a dedicated team that understands that market intimately.",
  },
  {
    title: "Hassle-Free Process",
    body: "From a simple purchase to the most complicated sale, we make your task genuinely effortless.",
  },
  {
    title: "Local Insight, Global Standard",
    body: "Born for Sri Lanka's emerging market, run with the rigour you'd expect from the world's best agencies.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  span?: "tall" | "wide" | "normal";
};

export const PROJECTS: Project[] = [
  {
    slug: "azure-residences",
    title: "Azure Residences",
    category: "Residential",
    location: "Colombo 07",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1100&q=80",
    span: "tall",
  },
  {
    slug: "marino-towers",
    title: "Marino Towers",
    category: "Commercial",
    location: "Colombo 02",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1100&q=80",
    span: "normal",
  },
  {
    slug: "the-helix",
    title: "The Helix",
    category: "Mixed-Use",
    location: "Rajagiriya",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1100&q=80",
    span: "tall",
  },
  {
    slug: "horizon-offices",
    title: "Horizon Offices",
    category: "Commercial",
    location: "Colombo 03",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=80",
    span: "normal",
  },
  {
    slug: "palm-grove-villas",
    title: "Palm Grove Villas",
    category: "Residential",
    location: "Galle",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1100&q=80",
    span: "wide",
  },
  {
    slug: "lotus-square",
    title: "Lotus Square",
    category: "Investment",
    location: "Negombo",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1100&q=80",
    span: "normal",
  },
  {
    slug: "the-monolith",
    title: "The Monolith",
    category: "Commercial",
    location: "Colombo 01",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1100&q=80",
    span: "tall",
  },
  {
    slug: "serene-heights",
    title: "Serene Heights",
    category: "Residential",
    location: "Kandy",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=80",
    span: "normal",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
};

export const POSTS: Post[] = [
  {
    slug: "buying-property-sri-lanka-2026",
    title: "Buying Property in Sri Lanka: A 2026 Field Guide",
    excerpt:
      "Titles, taxes and timing — everything a first-time buyer needs to know before signing anything.",
    category: "Guides",
    date: "Jun 12, 2026",
    readingTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1100&q=80",
  },
  {
    slug: "colombo-commercial-outlook",
    title: "The Colombo Commercial Outlook",
    excerpt:
      "Where yields are heading across the capital's office and retail corridors this year.",
    category: "Market",
    date: "May 28, 2026",
    readingTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=80",
  },
  {
    slug: "due-diligence-checklist",
    title: "The Due Diligence Checklist We Use on Every Deal",
    excerpt:
      "The exact title and document checks our legal team runs before any transaction closes.",
    category: "Legal",
    date: "May 09, 2026",
    readingTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=80",
  },
  {
    slug: "investment-property-portfolio",
    title: "Building a Property Portfolio That Compounds",
    excerpt:
      "How to think about diversification, leverage and exit when investing in emerging markets.",
    category: "Investment",
    date: "Apr 21, 2026",
    readingTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
  },
  {
    slug: "staging-to-sell",
    title: "Staging to Sell: Small Moves, Big Returns",
    excerpt:
      "Low-cost interventions that consistently lift the final sale price of a residential listing.",
    category: "Guides",
    date: "Apr 02, 2026",
    readingTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1100&q=80",
  },
  {
    slug: "future-development-potential",
    title: "Reading a Property's Future Development Potential",
    excerpt:
      "Zoning, access and density — how we spot value that isn't on the listing yet.",
    category: "Market",
    date: "Mar 15, 2026",
    readingTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1100&q=80",
  },
];

export const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    caption: "Azure Residences · Colombo 07",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=900&q=80",
    caption: "Marino Towers · Colombo 02",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
    caption: "The Helix · Rajagiriya",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=900&q=80",
    caption: "Lotus Square · Negombo",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=900&q=80",
    caption: "The Monolith · Colombo 01",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    caption: "Palm Grove Villas · Galle",
    span: "normal",
  },
];
