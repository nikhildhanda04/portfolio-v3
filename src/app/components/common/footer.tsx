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
            className="flex flex-col gap-8 md:px-44">

                <div className='font-secondary font-bold text-3xl text-zinc-800 dark:text-zinc-300'>
                    Reach Out:
                </div>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-row gap-5 text-secondary text-zinc-800 dark:text-zinc-300 text-lg hover:underline hover:italic tranistion-all duration-200 ease-in">
                        <Mail/> nikhildhanda84@gmail.com
                    </div>
                    <div className="flex flex-row gap-5  text-secondary text-zinc-800 dark:text-zinc-300 text-lg hover:underline hover:italic tranistion-all duration-200 ease-in">
                        <Phone/> +91 9215593793
                    </div>

                </div>

                <div className="flex items-center gap-2 mt-4 font-secondary text-stone-500 text-xs uppercase tracking-widest opacity-60">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-pulse" />
                    Visitors #{visitors ? visitors.toLocaleString() : '923'} 
                </div>

            </motion.div>

            <div className='font-[poltawaski] font-bold text-6xl md:text-8xl mt-6 -mb-10 text-zinc-800 dark:text-zinc-300 tracking-wider relative text-center '>
                NIKHIL DHANDA
            </div>

        </div>
        </>
    )
}