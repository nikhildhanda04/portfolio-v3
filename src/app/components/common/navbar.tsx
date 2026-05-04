'use client';

import { useEffect, useState } from "react";
import { ModeToggle } from "./theme-toggle";
import { motion,easeIn } from 'framer-motion'

const sections = ["hero", "projects", "experience"];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("hero");


    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    },
                    {
                        root: null,
                        rootMargin: "0px",
                        threshold: 0.6, 
                    }
                );
                observer.observe(section);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <motion.div 
        initial={{y: -20, filter: "blur(10px)"}}
        whileInView={{y:0, filter: "blur(0px)"}}
        transition={{duration: 0.4, ease: easeIn}}
        className="flex  md:rounded-none rounded-r-full md:min-w-6xl flex-row fixed z-50 justify-between px-6 md:px-56 items-center backdrop-blur-xl top-0 bg-white/30 dark:bg-black/30">
            <a
            href="#hero"
            onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
            }}
            className="font-secondary font-bold text-3xl text-dark dark:text-light transition-all duration-200 ease-in">
            ND
            </a>

            <div className="font-primary gap-6 md:flex flex-row items-center text-xl font-medium text-neutral-500">
                {sections.map((id) => (
                    <a
                        key={id}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(id);
                        }}
                        href={`#${id}`}
                        className={`hover:cursor-hand hidden md:flex transition-all duration-100 ease-in ${
                            activeSection === id
                                ? "text-dark dark:text-light "
                                : "text-neutral-500"
                        }`}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}


                <div className="ml-4 flex items-center justify-center">
                    <ModeToggle />
                </div>
                </div>

        </motion.div>
    );
}
