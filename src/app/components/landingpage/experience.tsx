'use client'

import Image from 'next/image'
import { motion, easeIn} from 'framer-motion'

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  logo: string;
  points: string[];
  isSecret?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "ForkLyft",
    role: "Full Stack Developer (SDE)",
    duration: "May 2026 – Present",
    logo: "/newC.png",
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
    role: "Full Stack Developer",
    duration: "Dec 2024 – Present",
    logo: "/freelance.svg",
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
    role: "Full Stack Web Intern",
    duration: "Oct 2024 – May 2025",
    logo: "/oscode.svg",
    points: [
      "Designed and developed effective web solutions, delivering high-quality services to meet client requirements.",
      "Collaborated in cross-functional teams and participated in client meetings to ensure alignment with user needs and adherence to project deadlines.",
      "Worked closely with teams and attended client meetings to facilitate seamless project execution and client satisfaction.",
    ],
  },
  {
    company: "WebscraftMedia",
    role: "Front-end Development Intern",
    duration: "Aug 2024 – Oct 2024",
    logo: "/wcm-.png",
    points: [
      "Supported maintenance of 5+ websites, ensuring 100% uptime.",
      "Learned working in a time bound environment and meeting my deadlines on time.",
      "Gained experience on technologies like React, Tailwind, and Typescript.",
      "Learned about how a corporate startup works.",
    ],
  },
  // {
  //   company: "News19",
  //   role: "Video Editor",
  //   duration: "Jan 2025 – Mar 2025",
  //   logo: "/news19.png",
  //   points: [
  //     "Crafting high-quality video content for news broadcasting and digital platforms.",
  //     "Utilizing professional editing software to enhance storytelling and visual appeal.",
  //     "Collaborating with production teams to meet tight deadlines and maintain editorial standards.",
  //   ],
  // }
];

export default function Experience() {
    return(
        <>
        <div id="experience" className="flex flex-col gap-20 py-12 px-6 md:px-56 ">

            <div>
                    <motion.div
                      initial={{ y: -20, filter: "blur(10px)" }}
                      whileInView={{ y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.4, ease: easeIn }}
                      className="font-primary font-medium text-lg text-stone-500">
                      Complete
                    </motion.div>
                    <motion.div
                      initial={{ y: -20, filter: "blur(10px)" }}
                      whileInView={{ y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.4, ease: easeIn }}
                      className="font-primary font-medium text-stone-800 dark:text-stone-300 text-3xl">
                      Experience
                    </motion.div>
            
                  </div>

            <div className="flex flex-col gap-16">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{y: -20, filter: "blur(10px)"}}
                        whileInView={{y:0, filter: "blur(0px)"}}
                        transition={{duration: 0.4 + (index * 0.2), ease: easeIn}}
                        className="flex flex-col gap-6 font-primary tracking-tight  py-7"
                    >
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row items-center gap-3">
                                <div className='relative w-10 h-10'>
                                    {exp.logo ? (
                                        <Image 
                                            src={exp.logo}
                                            alt={exp.company}
                                            fill
                                            className={`object-cover border border-zinc-500 p-1 bg-neutral-100 rounded-full ${exp.isSecret ? 'blur-[4px] select-none pointer-events-none' : ''}`}
                                        />
                                    ) : (
                                        <div className={`w-full h-full border border-zinc-500 bg-neutral-100 rounded-full flex items-center justify-center text-[10px] font-bold text-stone-400 ${exp.isSecret ? 'blur-[4px] select-none pointer-events-none' : ''}`}>
                                            {exp.company.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className={`text-3xl font-medium text-zinc-800 dark:text-zinc-300 ${exp.isSecret ? 'blur-md select-none pointer-events-none' : ''}`}>
                                    {exp.company}
                                </div>
                            </div>

                            <div className="text-xl text-stone-700 dark:text-stone-400">
                                {exp.role} <span className="text-sm">({exp.duration})</span>
                            </div>
                        </div>

                        <ul className="font-secondary tracking-tighter text-sm text-stone-500 dark:text-stone-500 list-disc list-inside space-y-2">
                            {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

        </div>
        </>
    )
}