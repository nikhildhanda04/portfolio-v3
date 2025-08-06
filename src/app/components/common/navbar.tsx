'use client';

import { useEffect, useState } from "react"

import { Moon, Sun } from 'lucide-react'

export default function Navbar() {

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


    return(

    
        <>
        <div className="flex border border-stone-300 flex-row fixed w-6xl z-99 justify-between px-24 py-6 items-center backdrop-blur-xl">

            <div className="font-secondary font-bold text-3xl text-dark dark:text-light">
                ND
            </div>

            <div className="font-primary  gap-6 flex flex-row  items-center text-xl font-medium text-neutral-500">
                <a>
                    Home
                </a>
                <a>
                    Projects
                </a>
                <a>
                    Experience
                </a>
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
        </>
    )
}