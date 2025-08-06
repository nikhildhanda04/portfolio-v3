import { Moon } from 'lucide-react'

export default function Navbar() {
    return(
        <>
        <div className="flex flex-row justify-between px-24 py-6 items-center backdrop-blur-xl">

            <div className="font-secondary font-bold text-3xl">
                ND
            </div>

            <div className="font-primary gap-6 flex flex-row  items-center text-xl font-medium text-neutral-500">
                <a>
                    Home
                </a>
                <a>
                    Projects
                </a>
                <a>
                    Experience
                </a>
                <div className='p-2 bg-zinc-200 rounded-full items-center'>
                    <Moon 
                    size= "20"
                    color="black"

                    />
                </div>
            </div>

        </div>
        </>
    )
}