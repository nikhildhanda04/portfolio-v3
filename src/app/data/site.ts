export type Job = {
  company: string;
  role: string;
  period: string;
  logo: string;
  points: string[];
};

export const site = {
  name: "Nikhil Dhanda",
  firstName: "Nikhil",
  location: "India",
  timezone: "Asia/Kolkata",
  email: "nikhildhanda84@gmail.com",
  phone: "+91 9215593793",
  bannerImage: "/quote.jpg",
  profileImage: "/Profile.png",

  titles: ["Full Stack Developer", "Design Engineer", "Developer", "Builder"],

  about: [
    "A design engineer focused on creating high performance, user centric, engaging web applications.",
    "Having an experience of over 2 years, and catering to an industry that I am passionate about, I like building flows that capture audience and look and feel highly professional.",
    "Let’s connect and collaborate.",
  ],

  socials: {
    github: "https://github.com/nikhildhanda04",
    linkedin: "https://www.linkedin.com/in/nikkhildhanda/",
    twitter: "https://x.com/nikhildhanda",
    email: "mailto:nikhildhanda84@gmail.com",
    resume: "/Nikhil_Dhanda_Resume_FullStack_Dev.pdf",
  },

  github: { username: "nikhildhanda04" },

  experience: [
    {
      company: "ForkLyft",
      logo: "/newC.png",
      role: "Full Stack Developer (SDE)",
      period: "May 2026 – Present",
      points: [
        "Built a retail shelf-audit platform for ITC using Node.js, Express 5, PostgreSQL, React 19, AWS Rekognition, and Amazon S3, delivering 26 REST endpoints across five database tables and passwordless phone-OTP authentication.",
        "Engineered an asynchronous ML classification pipeline that batches shelf-audit scans and starts model inference on demand instead of running continuously, cutting inference-hour costs by roughly 90%.",
        "Built a 3-surface retail POS ecosystem independently — a Windows Electron register, a 124-endpoint REST API, and a React back office — spanning approximately 165K LOC and 147 production releases on a 60+ table PostgreSQL/RDS schema.",
        "Architected an offline-first transaction system using SQLite and an outbox-based synchronization layer, keeping checkout uninterrupted during network outages and syncing reliably once connectivity returns.",
        "Integrated Datacap NETePay EMV for credit/debit, EBT Food and Cash, WIC, and batch closing, alongside Dejavoo SPIn payment terminals, Zebra MP7001 scales/scanners via a custom C#/.NET CoreScanner sidecar, Epson TM-T88V ESC/POS receipt printing, and Zebra ZPL label printing.",
        "Delivered end-to-end POS capabilities including weighed-item, PLU, and variable-measure checkout, promotions, eight split-tender types, cash management, Z-reports, inventory, vendor management, and a finance ledger, alongside a 30-module back office, with automated Windows installer builds and auto-updates via electron-updater.",
      ],
    },
    {
      company: "Freelancing",
      logo: "/freelance.svg",
      role: "Full Stack Developer",
      period: "Dec 2024 – Present",
      points: [
        "Delivered production-ready full-stack web solutions for 10+ clients, including high-conversion landing pages, interactive dashboards, and scalable e-commerce platforms with secure payment gateways.",
        "Built and deployed scalable applications using React, Next.js, Node.js, PostgreSQL, and MongoDB with responsive UI, SEO optimization, and cross-browser compatibility.",
        "Implemented authentication systems, RESTful APIs, database schemas, order management workflows, and third-party integrations following clean architecture and industry best practices.",
        "Improved business outcomes by enabling online sales, lead generation, and workflow automation, increasing engagement, conversions, and operational efficiency.",
        "Collaborated directly with non-technical stakeholders to gather requirements, translate business needs into technical solutions, and deliver projects on time with high client satisfaction.",
      ],
    },
    {
      company: "Oscode",
      logo: "/oscode.svg",
      role: "Full Stack Web Intern",
      period: "Oct 2024 – May 2025",
      points: [
        "Designed and developed effective web solutions, delivering high-quality services to meet client requirements.",
        "Collaborated in cross-functional teams and participated in client meetings to ensure alignment with user needs and adherence to project deadlines.",
        "Worked closely with teams and attended client meetings to facilitate seamless project execution and client satisfaction.",
      ],
    },
    {
      company: "WebscraftMedia",
      logo: "/wcm-.png",
      role: "Front-end Development Intern",
      period: "Aug 2024 – Oct 2024",
      points: [
        "Supported maintenance of 5+ websites, ensuring 100% uptime.",
        "Learned working in a time bound environment and meeting my deadlines on time.",
        "Gained experience on technologies like React, Tailwind, and Typescript.",
        "Learned about how a corporate startup works.",
      ],
    },
  ] as Job[],

  quotes: [
    { text: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.", author: "Bhagavad Gita 2.47" },
    { text: "Perform your duty with equanimity, abandoning attachment to success or failure. Such evenness of mind is called yoga.", author: "Bhagavad Gita 2.48" },
    { text: "Yoga is skill in action.", author: "Bhagavad Gita 2.50" },
    { text: "For the soul there is neither birth nor death at any time.", author: "Bhagavad Gita 2.20" },
    { text: "Better is one's own duty, though imperfectly performed, than the duty of another well performed.", author: "Bhagavad Gita 3.35" },
    { text: "Elevate yourself through the power of your mind, and do not degrade yourself, for the mind can be the friend and also the enemy of the self.", author: "Bhagavad Gita 6.5" },
  ],
};
