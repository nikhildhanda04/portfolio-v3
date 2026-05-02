'use client'

import { Mail, Phone} from 'lucide-react'
import { motion, easeIn } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Footer() {
    const [visitors, setVisitors] = useState<number | null>(null);

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const hasCounted = sessionStorage.getItem('hasCounted');
                // Using counterapi.dev as a reliable alternative to countapi.xyz
                const endpoint = hasCounted 
                    ? 'https://api.counterapi.dev/v1/projects/nikhildhanda-vercel-app/counters/visitors/' 
                    : 'https://api.counterapi.dev/v1/projects/nikhildhanda-vercel-app/counters/visitors/up';
                
                const response = await fetch(endpoint);
                const data = await response.json();
                
                if (data && data.count) {
                    setVisitors(866 + data.count);
                    if (!hasCounted) {
                        sessionStorage.setItem('hasCounted', 'true');
                    }
                }
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
            }
        };

        fetchVisitors();
    }, []);

    return(
        <>
        <div className="flex flex-col px-6 pt-12 mask-b-from-70%">

            <motion.div 
                initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
                className="flex flex-col md:flex-row gap-12 md:gap-24 md:px-44"
            >
                {/* Left side: Reach Out Info */}
                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-primary text-zinc-800 dark:text-zinc-200">
                        Get in Touch
                    </h2>
                    <p className="font-secondary text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm tracking-tighter">
                        If you have any inquiries, please feel free to reach out. You can contact me via email or phone.
                    </p>

                    <div className="flex flex-col gap-3 mt-2">
                        <div className="flex flex-row gap-5 font-secondary text-zinc-800 dark:text-zinc-300 text-sm md:text-base hover:underline hover:italic transition-all duration-200 ease-in items-center">
                            <Mail className="w-5 h-5"/> nikhildhanda84@gmail.com
                        </div>
                        <div className="flex flex-row gap-5 font-secondary text-zinc-800 dark:text-zinc-300 text-sm md:text-base hover:underline hover:italic transition-all duration-200 ease-in items-center">
                            <Phone className="w-5 h-5"/> +91 9215593793
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-auto pt-4 font-secondary text-stone-500 text-xs uppercase tracking-widest opacity-60">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />
                        Visitors #{visitors ? visitors.toLocaleString() : '923'} 
                    </div>
                </div>

                {/* Right side: Contact Form */}
                <div className="flex-1 w-full">
                    <form className="flex flex-col gap-4 font-secondary tracking-tighter" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors"
                            />
                            <input 
                                type="tel" 
                                placeholder="Phone No" 
                                className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors"
                            />
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors"
                        />
                        <textarea 
                            placeholder="Message" 
                            rows={4}
                            className="w-full bg-transparent border border-stone-300 dark:border-stone-800 rounded-md px-4 py-3 text-sm text-stone-800 dark:text-stone-200 focus:outline-none focus:border-stone-500 dark:focus:border-stone-500 transition-colors resize-none"
                        />
                        <button 
                            type="submit"
                            className="w-full bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 font-semibold rounded-md px-4 py-3 mt-2 hover:opacity-90 transition-opacity"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </motion.div>

            <div className='font-[poltawaski] font-bold text-6xl md:text-8xl mt-16 md:mt-24 -mb-10 text-zinc-800 dark:text-zinc-300 tracking-wider relative text-center '>
                NIKHIL DHANDA
            </div>

        </div>
        </>
    )
}