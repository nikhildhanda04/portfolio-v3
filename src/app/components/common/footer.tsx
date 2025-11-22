'use client'

import { Mail, Phone} from 'lucide-react'
import { motion, easeIn } from 'framer-motion'

export default function Footer() {
    return(
        <>
        <div className="flex flex-col px-5 pt-12 mask-b-from-70%">

            <motion.div 
            initial={{y: -20, filter: "blur(10px)"}}
                whileInView={{y:0, filter: "blur(0px)"}}
                transition={{duration: 0.4, ease: easeIn}}
            className="flex flex-col gap-8 md:px-36">

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

            </motion.div>

            <div className='font-[poltawaski] font-bold text-6xl md:text-8xl mt-6 -mb-10 text-zinc-800 dark:text-zinc-300 tracking-wider relative text-center '>
                NIKHIL DHANDA
            </div>

        </div>
        </>
    )
}