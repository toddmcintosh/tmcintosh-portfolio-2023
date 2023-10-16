import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const corpcommentImg = "/corpcomment.png";
const rmtdevImg = "/ToddPhoto2022_cropped.jpg";
const wordanalyticsImg = "/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed BFA in Music",
    company: "York University",
    location: "Vaughn, ON",
    description:
      "While studying music and audio recording at York, I was exposed to HTML and CSS coding, animation and early web design skills in an Interactive Multimedia course.",
    icon: React.createElement(LuGraduationCap),
    date: "1998",
  },
  {
    title: "Completed Diploma in Audio Engineering",
    company: "Ontario Institute of Audio Recording Technology",
    location: "London, ON",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "1999",
  },
  {
    title: "Audio Engineer, Front-End Developer",
    company: "Emmanual Recording Studios",
    location: "Scarborough, ON",
    description:
      "In addition to working as a recording engineer for the studio, I also contributed by providing Graphic Design services for CD album covers, as well as working as a Front End Developer for the company's CD album sales eCommerce web site. This was where I was introduced to dynamic server pages with PHP.",
    icon: React.createElement(CgWorkAlt),
    date: "2000 - 2002",
  },
  {
    title: "IT Technician",
    company: "Solectron Corp.",
    location: "Markham/Newmarket, ON",
    description:
      "Worked as a technician, inspecting and fixing off-lease computers and servers for refurbishment and resale.",
    icon: React.createElement(CgWorkAlt),
    date: "2002-2003",
  },

  {
    title: "Full-Stack Developer",
    company: "Zeppelin Communications",
    location: "Toronto, ON",
    description:
      "Initally as front-end developer, and then later as a full stack developer, as part of core team at this agency that built web sites for high end clients such as Cineplex Galaxy Theatres.",
    icon: React.createElement(CgWorkAlt),
    date: "2003-2006",
  },
  {
    title: "Partner/Full-Stack Developer",
    company: "Connect Media Solutions",
    location: "Markham, ON",
    description:
      "• Launched and managed local advertising program (iShopLocally.ca) in Markham Region • Built company web site to serve ads and coupons for local businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "2006-2009",
  },
  {
    title: "Principal/Full-Stack Developer",
    company: "Resonance Media + Design",
    location: "Markham, ON",
    description: `Built and supported numerous web applications for 30+ clients, as well as some marketing
web sites.
• Manage Vercel, Linode, and Planetscale accounts for React applications, VPS (Windows
Server/Plesk) for .NET applications, and client domains via OpenSRS registry service
Projects of Note:
• Elearnology Inc - Online Leader LMS,
• Parks & Rec Ontario HIGH FIVE National Database • SOS4Kids HomeAloneCourse.com • George Brown College Choices Career Course • Vanpak Wholesaler • Engine Control Systems Distributor Warranty Portal • Datamining Application for Blue Lime Consulting • Digilease Online Lease Management System • CentreIsland.ca eCommerce Website
(2007-2011)`,
    icon: React.createElement(FaReact),
    date: "2006-present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = {
  code: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C#",
    "PHP",
    "Console/Bash",
    "PowerShell",
  ],
  frontend: [
    "HTML5",
    "React",
    "Next.js",
    "CSS",
    "Tailwind",
    "Prisma",
    "Bootstrap",
    "jQuery",
  ],
  backend: [".NET Core", "REST API's", "Node.js", "NextAuth.js"],
  db: ["PlanetScale", "MongoDB", "SQL", "MySQL", "MSSQL"],
  design: ["Figma", "Illustrator", "Photoshop"],
  elearning: [
    "LMS/LRS Integrations",
    "Experience API (xAPI)",
    "SCORM",
    "Articulate Storyline360/Rise360",
  ],
  hosting: [
    "Vercel",
    "Linode",
    "AWS",
    "Cloudflare",
    "Windows Server/Plesk",
    "IIS",
    "Linux/Apache",
  ],
  ecommerce: [
    "Shopify",
    "WooCommerce",
    "Stripe API",
    "Paypal Payments API",
    "Paymentech",
    "Moneris",
  ],
  ide: [
    "Visual Studio",
    "Visual Studio Code",
    "Microsoft SQL Server Management Studio",
    "Eclipse",
    "Sublime Text",
  ],
  cicd: ["Git", "GitHub", "BitBucket"],

  other: [
    "Responsive Design",
    "WordPress",
    "Web Standards",
    "Entity Framework",
    "Google Analytics",
    "Swagger",
    "PDF Generation",
    "AODA Compliance",
    "Screen Reader Compatibility",
    "ASP.NET (Legacy)",
    "Blender 3D",
  ],
} as const;
