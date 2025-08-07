'use client';

import { useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';

const sections = ["hero", "projects", "experience"];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("hero");
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        html.classList.add("transition-colors", "duration-200");
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            setIsDark(true);
        }
        setTimeout(() => {
            html.classList.remove("transition-colors", "duration-200", "ease-In");
        }, 200);
    };

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
        <div className="flex border-t border-b border-r border-stone-300 flex-row fixed w-6xl z-50 justify-between px-6  md:px-24 py-6 items-center backdrop-blur-xl bg-white/30 dark:bg-black/30">
            <a
            href="#hero"
            onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
            }}
            className="font-secondary font-bold text-3xl text-dark dark:text-light transition-all duration-200 ease-in">
            ND
            </a>

            <div className="font-primary hidden gap-6 md:flex flex-row items-center text-xl font-medium text-neutral-500">
                {sections.map((id) => (
                    <a
                        key={id}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(id);
                        }}
                        href={`#${id}`}
                        className={`hover:cursor-hand transition-all duration-100 ease-in ${
                            activeSection === id
                                ? "text-dark dark:text-light "
                                : "text-neutral-500"
                        }`}
                    >
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </a>
                ))}

                <button
                    className="bg-stone-200 dark:bg-stone-800 rounded-full p-3 ml-4 hidden md:flex items-center justify-center transition-colors duration-200"
                    onClick={toggleTheme}
                    aria-label="Toggle dark mode"
                    type="button"
                >
                    {isDark ? (
                        <Sun className="inline" size={20} color="#FAF9F6" />
                    ) : (
                        <Moon className="inline" size={20} color="#09090B" />
                    )}
                </button>
            </div>
        </div>
    );
}
