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
    const [showAside, setShowAside] = useState(true);

    return (
        <section className={clsx("relative w-full flex flex-col md:hidden min-h-[50vh]")}>
            {/* Imagem de fundo */}
            <div className={clsx("absolute inset-0 w-full h-full")}>
                <Image
                    src={imgCasal}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
            </div>

            {/* texto absoluto sobre a img */}
            <div className={clsx("absolute inset-0 flex flex-col items-center justify-center text-center z-10")}>
                <h1 className={clsx("text-white font-beau text-6xl md:text-8xl drop-shadow-lg")}>Alessandra & Luiz</h1>
                <p className={clsx("text-white font-cinzel text-xl md:text-2xl drop-shadow-lg")}>29 de março de 2025</p>
            </div>

            {/* o aside precisou ser absoluto, pra não empurrar os demais conteúdos pra baixo */}
            <aside className={clsx(
                'absolute top-0 left-0 h-screen font-abhaya font-semibold text-Cinza_main_100 text-xl',
                'overflow-hidden w-64 bg-white border-r shadow-sm z-30 transition-all duration-500',
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
                    <div className={clsx("w-auto h-full flex flex-col py-6 px-8 gap-8")}>
                        <p className="cursor-pointer">Home</p>
                        <p className="cursor-pointer">O Casal</p>
                        <p className="cursor-pointer">Cerimônia</p>
                        <p className="cursor-pointer">Presentes</p>
                        <p className="cursor-pointer">Recados</p>
                    </div>
                </div>
            </aside>

            {/* Botão de menu */}
            <div className={clsx("p-2 relative z-30 self-end")}>
                <div className={clsx("p-2 rounded h-fit cursor-pointer bg-[#40495195]")} onClick={() => setShowAside(!showAside)}>
                    <AlignJustify color="white" size={32} />
                </div>
            </div>
        </section>
    );
}
