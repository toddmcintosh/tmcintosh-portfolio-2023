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
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "History",
    hash: "#history",
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
    title: "Completed BA",
    company: "York University",
    location: "Vaughn, ON",
    description:
      "Completed bachelor's degree at York. Had opportunities to learn HTML and CSS coding, animation and early web design skills in an Interactive Multimedia course.",
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
      "Initally as front-end developer, and then later as a full stack developer, I was part of the core team at this agency that built web sites for high end clients such as Cineplex Galaxy Theatres.",
    icon: React.createElement(CgWorkAlt),
    date: "2003-2006",
  },
  {
    title: "Co-Founder/Full-Stack Developer",
    company: "Connect Media Solutions",
    location: "Markham, ON",
    description:
      "Launched and managed local advertising program (iShopLocally.ca) in Markham Region. Built company web site to serve ads and coupons for local businesses.",
    icon: React.createElement(CgWorkAlt),
    date: "2006-2009",
  },
  {
    title: "Principal/Full-Stack Developer",
    company: "Resonance Media + Design",
    location: "Markham, ON",
    description: `Built and supported numerous web applications for many clients, as well as some marketing
web sites. Manage Vercel, Linode, and Planetscale accounts for React applications, VPS (Windows
Server/Plesk) for .NET applications, and client domains via OpenSRS registry service.
`,
    icon: React.createElement(FaReact),
    date: "2006-present",
  },
] as const;

export const projectsData = [
  {
    title: "NRI ERP Rebuild",
    company: "NRI Industrial Sales",
    description:
      "Core contributor on the engineering team tasked with  rebuilding the ERP system for NRI. This was an extensive platform that primarily provided inventory management for their global warehouse network. In addition, it provided backend management services for their web auction platform. I was involved in all aspects of the build, including models, dtos, tests, migrations, queries, and custom scripts in the backend, and UI, tables, Apollo GQL queries, CSS styling in the front end.",
    tags: [
      "React",
      "Next.js",
      "Laravel",
      "GraphQL",
      "Apollo",
      "Unit Testing",
      "Async Task Workflows",
      "Docker",
      "Postgres",
      "Materials UI",
    ],
    imageUrl: "/nri.png",
  },
  {
    title: "Click To Learn LMS",
    company: "Elearnology Inc.",
    description:
      "I rebuilt the Online Leader platform in 2023 to run in React/Next.js with Prisma as the ORM. I also migrated the hosting platform from a monolithic single server infrastructure, to a distributed plan with app hosting on Vercel, MySQL with version control on Planetscale, and Object storage on Linode. It is a full-featured LMS with xAPI support, and integrates with a MongoDB-driven LRS on a Linux instance on Linode.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Planetscale (MySQL)",
      "Tailwind",
      "Prisma",
      "Vercel",
      "S3 Object Storage",
      "Stripe",
    ],
    imageUrl: "/ctl2.jpg",
  },
  {
    title: "Online Leader LMS",
    company: "Elearnology Inc.",
    description:
      "I worked on this project for eight years and added many features and integrations. It provided training courses to many clients, including City of Toronto, Markham, and the County of Brant.",
    tags: [
      "ASP.NET",
      "MSSQL",
      "Zapier",
      "Vue.js",
      "jQuery",
      "Bootstrap",
      "Entity Framework",
      "Cloudflare",
      "Stripe",
    ],
    imageUrl: "/onlineleader.jpg",
  },
  {
    title: "Parks & Rec Ontario HIGH FIVE National Database",
    company: "Elearnology Inc.",
    description:
      "I provided critical support services as the developer of record for this legacy web application for over 4 years. It is an important application that manages hundreds of thousands of users' certifcations and training records for the HIGHFIVE national program. It was a challenging platform to maintain due to the complexity of the code and the lack of documentation.",
    tags: ["ASP.NET", "MSSQL", "Stored Procedures", "Table Adapters", "Legacy"],
    imageUrl: "/highfive.jpg",
  },
  {
    title: "George Brown College 'Choices' Career Course",
    company: "Elearnology Inc.",
    description:
      "I created and configured the Choices Careers course on George Brown College's Canvas LMS system. Each module in the course allowed students to save certain answers they entered, and at the end of the course create a dynamically generated Action Plan PDF that the student could keep. This feature was accomplished by adding custom Javascript calls to a purpose-built REST API I built on an external server which managed their Action Plan data. In addition, the generated pdfs were generated with fonts matching the design theme of the course content, as well as being screen-reader and AODA-compliant which was a challenging requirement.",
    tags: [
      "Javscript",
      ".NET",
      "SQL",
      "REST API",
      "Apache FOP",
      "PDF Generation",
      "AODA Compliance",
    ],
    imageUrl: "/gb3.jpg",
  },
  {
    title: "Dottlers Automated Video Rendering System",
    company: "Resonance Media + Design",
    description:
      "I built this automated video rendering solution via Python and Blender3D on an AWS EC2 instance. It allowed automated rendering of the shoe model given any texture and colour combination.",
    tags: ["AWS", "Linux", "Python", "EC2", "Automation", "Bash", "Blender3D"],
    imageUrl: "/DottlersShoeHighRes.png",
  },
  {
    title: "Engine Control Systems Distributor Warranty Portal",
    company: "Resonance Media + Design",
    description:
      "I built and supported this web application for 6 years. It allowed ECS to bring their warranty management process online and provided great value to the company by greatly reducing their paper management within the warranty process t.",
    tags: ["ASP.NET", "MSSQL", "Table Adapters", "Legacy"],
    imageUrl: "/cdti.jpg",
  },

  {
    title: "Centreville Amusement Park Web Site (centreisland.ca)",
    company: "Resonance Media + Design",
    description:
      "I designed and built this web app and supported it for three years. It was the official marketing site for Centreville Amusement Park on Toronto Island. I also built a custom integration with the Moneris payment gateway to allow for online ticket sales, with print tickets that had dynamically generated barcodes that could be scanned at the ticket counter.",
    tags: [
      "ASP.NET",
      "MSSQL",
      "eCommerce",
      "Moneris",
      "Verified By VISA",
      "Mastercard Secure",
      "Legacy",
    ],
    imageUrl: "/centreville.jpg",
  },
  {
    title: "Cineplex Galaxy Theatres (www.cineplex.ca)",
    company: "Zeppelin Communications Inc.",
    description:
      "Created the final UI design of the site that was approved by Cineplex Marketing VP. Part of team to build out the web application, focussing mostly on front end layout. Later on, became the lead developer on the project, responsible for front and back end management of the site. Monitored nightly database feed updates, and contributed daily content updates, and feature additions for over three years. ",
    tags: ["ASP.NET", "MSSQL", "Stored Procedures", "Table Adapters", "Legacy"],
    imageUrl: "/cineplex_site.jpg",
  },
] as const;

export const skillsData = {
  code: [
    "TypeScript",
    "JavaScript",
    "Laravel/PHP",
    "GraphQL",
    "Python",
    "C#",
    "Console/Bash",
    "PowerShell",
  ],
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "Material UI",
    "Apollo",
    "CSS",
    "Tailwind",
    "Prisma",
    "Bootstrap",
    "HTML5",
  ],
  backend: [
    "Laravel",
    "Docker",
    "AWS",
    "Artisan/Tinker",
    ".NET Core",
    "REST API's",
    "Node.js",
    "NextAuth.js",
  ],
  db: ["Postgres", "PlanetScale", "MongoDB", "SQL", "MySQL", "MSSQL"],
  design: ["Figma", "Illustrator", "Photoshop"],
  elearning: [
    "LMS/LRS Integrations",
    "Experience API (xAPI)",
    "SCORM",
    "Articulate Storyline360/Rise360",
  ],
  hosting: [
    "Github/Actions",
    "Docker",
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
    "neovim/vim",
    "Sublime Text",
    "Visual Studio Code",
    "Visual Studio",
    "Microsoft SQL Server Management Studio",
    "Eclipse",
  ],
  cicd: ["Git", "GitHub/Actions", "BitBucket"],

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
  ],
} as const;
