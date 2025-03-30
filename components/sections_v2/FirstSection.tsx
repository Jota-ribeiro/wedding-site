//--Imports
import Image from "next/image";
import { useState } from "react";

//--Libs
import { ArrowLeftFromLineIcon, AlignJustify } from 'lucide-react'
import clsx from "clsx";

//--Assets
import imgCasal from '@/public/img/img-casal-example.jpg'
import luizele from '@/public/img/img-casal.png'

export default function FirstSection() {

    const [showAside, setShowAside] = useState(true)

    return (
        <section className="relative w-full flex flex-col md:hidden h-screen">
            {/* bg casal */}
            <div className="absolute inset-0 w-full h-3/6">
                <Image
                    src={imgCasal}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <h1 className="text-white font-beau text-6xl md:text-8xl drop-shadow-lg">Alessandra & Luiz</h1>
                    <p className="text-white font-cinzel text-2xl md:text-2xl drop-shadow-lg">29 de março de 2025</p>
                </div>

            </div>

            {/* aside sobreposto a img */}
            <div className="relative z-10 flex justify-between">
                <aside className={clsx(
                    'transition-all ease-in-out duration-500 h-screen font-abhaya font-semibold text-Cinza_main_100 text-xl',
                    'overflow-hidden w-64 bg-white border-r shadow-sm z-20',
                    !showAside && 'w-0 opacity-0 translate-x-[-100%]'
                )}>
                    <div className="h-full flex flex-col">
                        <div className="h-auto flex flex-col bg-[#f2fcfc] py-6 px-8 gap-2">
                            <div onClick={() => setShowAside(false)} className="self-end cursor-pointer">
                                <ArrowLeftFromLineIcon />
                            </div>
                            <Image className="w-5/12" src={luizele} alt="" />
                            <p className="text-lg">Alessandra <span className="text-red-400">&</span> Luiz Lima</p>
                        </div>
                        <div className="w-auto h-full flex flex-col py-6 px-8 gap-8">
                            <p className="cursor-pointer">Home</p>
                            <p className="cursor-pointer">O Casal</p>
                            <p className="cursor-pointer">Cerimônia</p>
                            <p className="cursor-pointer">Presentes</p>
                            <p className="cursor-pointer">Recados</p>
                        </div>
                    </div>
                </aside>

                {/* btn alignjustify */}
                <div className="p-2 relative z-20">
                    <div className="p-2 rounded h-fit cursor-pointer bg-[#40495195]" onClick={() => setShowAside(!showAside)}>
                        <AlignJustify color="white" size={32} />
                    </div>
                </div>
            </div>
        </section>
    )
}