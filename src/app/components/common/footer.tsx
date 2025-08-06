import { Mail, Phone} from 'lucide-react'

export default function Footer() {
    return(
        <>
        <div className="flex flex-col ">

            <div className="flex flex-col gap-8 px-28">

                <div className='font-secondary font-bold text-3xl'>
                    Reach Out:
                </div>
                <div className="flex flex-col gap-3">

                    <div className="flex flex-row gap-5 text-secondary text-lg hover:underline hover:italic tranistion-all duration-200 ease-in">
                       <Mail/> nikhildhanda84@gmail.com
                    </div>
                    <div className="flex flex-row gap-5  text-secondary text-lg hover:underline hover:italic tranistion-all duration-200 ease-in">
                       <Phone/> +91 9215593793
                    </div>

                </div>

            </div>

            <div className='font-[poltawaski] font-bold text-[9.4vw] text-center -mb-[90vw]'>
                NIKHIL DHANDA
            </div>

        </div>
        </>
    )
}