
import { ExperienceItem, CaseCompItem, ProjectItem, PORItem } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Flipkart",
    role: "Business Strategy Intern",
    period: "07/2025 – 12/2025",
    logo: "https://lh3.googleusercontent.com/d/1SV0e0Wl6gikND4_-E0QdsHA4JoEpljR6",
    description: [
      "Recommended 150+ SKUs by analyzing 10L+ search queries, conversion using 5+ parameters to identify high intent demand gaps.",
      "Identified null result searches to map them to substitutes and adjacent categories, uncovering assortment gaps across 10K+ SKUs.",
      "Improved category performance & BPC GTM using RCA on 10K+ SKUs across 50+ brands using 1K+ consumer data points.",
      "Identified 5+ potential growth opportunities by benchmarking BPC trends for >$200B TAM across 5 global markets."
    ],
    skills: [
      "Data-Driven Decision Making & RCA",
      "Market Sizing (TAM) & Growth Opportunity Identification",
      "GTM Strategy & Assortment Optimization"
    ]
  },
  {
    company: "Balwaan Krishi",
    role: "UX Design and Data Analytics Intern",
    period: "05/2024 – 07/2024",
    logo: "https://lh3.googleusercontent.com/d/1ECxgdH1Hx3mXJ8GRM1T4n_FUWjvEmLuo",
    description: [
      "Analyzed 1K+ user interactions using Excel pivot tables and LOOKUPs to evaluate landing page and navigation barriers.",
      "Audited website using 22 UX laws; proposed a Figma-based redesign projected to improve bounce rate by 20%.",
      "Researched 10+ categories of agricultural tools to analyze and suggest functional and visual content improvements."
    ],
    skills: [
      "UX Research & Behavior Analysis",
      "Wireframing & Figma Prototyping",
      "UX Audits & Conversion Optimization"
    ],
    links: [
      { label: "Figma Prototype", url: "https://www.figma.com/design/9VCljSrZavglqLVbuNQJAS/Untitled?node-id=13-53&p=f&t=1bE5kss5OgykW8fQ-0" },
      { label: "View Deck", url: "https://drive.google.com/file/d/1XR4uQ-lq1v91em-nDqwtwsvVNCgAyJ11/view" }
    ]
  }
];

export const CASE_COMPS: CaseCompItem[] = [
  {
    title: "GenAI Travel Assistant – Neovate (ISB)",
    description: "Final round Shortlisted; designed a MVP roadmap for a GenAI travel assistant, using context planning and collaborative optimisation.",
    image: "https://lh3.googleusercontent.com/d/1joh-Y53sXDQYGXGVjjV6m2KH1UFgiqn8",
    deckUrl: "https://drive.google.com/file/u/2/d/1EML3_4FOIJQTV3-ZQVvD68hCkOKne66e/view?usp=sharing"
  },
  {
    title: "Jio creative hackathon",
    description: "Selected in the top 100 out of 28.2k participants, securing a pre-internship interview for developing GTM for Jio in dishwashers.",
    image: "https://lh3.googleusercontent.com/d/1o3TnnjP_I5nqIENZAq0AJoyNrPB7mt9i",
    deckUrl: "https://drive.google.com/file/u/2/d/1ZuwEmhhyu0sE3BFGr43VR1PahqLNZtEu/view"
  },
  {
    title: "HumanLink - Advitiya 2026, IIT Ropar - Product Case Competition",
    description: "Selected in top 3 among 400+ registrations by proposing a real time human verification for trusting digital platforms to avoid bots.",
    image: "https://lh3.googleusercontent.com/d/1JwJ8Aga-rz8xRxexR01BNVtkJFCl74sm",
    deckUrl: "https://drive.google.com/file/d/1VbwJHqsOMNFYN4CuniokoC3H5WghbLPP/view"
  },
  {
    title: "Product Teardown- Tata Neu (IIM Sambhalpur)",
    description: "Audited Tata Neu's fashion section and proposed wireframes, addressing 7+ UX issues to boost engagement and conversions.",
    image: "https://lh3.googleusercontent.com/d/17A9tojFnkb5CSA_cABJVhOUDVIOxrx_b",
    deckUrl: "https://drive.google.com/file/d/13LBEa7HE8R8NbrciO0pui1I7BJzE98v9/view"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "FinTrack UX Case Study",
    description: "A comprehensive redesign of a personal finance app focusing on accessibility and financial literacy for young adults.",
    image: "https://picsum.photos/id/10/800/450",
    tags: ["UX Research", "Figma", "Accessibility"],
    link: "#"
  },
  {
    title: "Market Insight Dashboard",
    description: "A Python-based visualization tool for tracking consumer sentiment trends across social media platforms.",
    image: "https://picsum.photos/id/20/800/450",
    tags: ["Data Analytics", "Python", "Tableau"],
    link: "#"
  }
];

export const PORS: PORItem[] = [
  {
    organization: "TEDxBITSGoa",
    position: "Coordinator & Licensee",
    link: "https://www.ted.com/tedx/events/61565",
    image: "https://lh3.googleusercontent.com/d/1is407bFwy1paTmRtF-cmLAp0fMw3Ailk",
    description: [
      "Led India’s oldest institutional TEDx conference, managing 50+ members across publicity, design, sponsorship, and content.",
      "Spearheaded a ₹16.5L budget, driving 35% YoY revenue growth through strategic financial planning and execution.",
      "Generated ₹38L+ in sponsorships through strategic outreach and stakeholder management, enhancing event scale and quality.",
      "Boosted social media presence by 55% YoY with 1M+ Instagram impressions, enhancing brand visibility and audience engagement.",
      "Executed a successful on-campus merchandise campaign with 1,800+ unit sales, amplifying brand affinity among attendees."
    ]
  },
  {
    organization: "PMP Mentor",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_mHtaHHyZbNIW_pFWaP1I2QqNXkur4dFyRMGZonKcivTA=s900-c-k-c0x00ffffff-no-rj",
    description: [
      "Guided and supported first-year students, offering tailored academic advice and facilitating their exploration of college life.",
      "Mentored individuals to excel academically, engage in campus life, and overcome initial challenges for a smooth college experience."
    ]
  }
];
