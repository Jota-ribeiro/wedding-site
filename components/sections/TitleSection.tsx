'use client'
import clsx from "clsx";
import Image from "next/image";
import florImg from '@/public/img/img-flor.svg'


export default function TitleSection() {

    const refSection = (id: string) => {
        const section = document.getElementById(id)

        setTimeout(() => {
            section?.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            })

        }, 200);


    }

    return (
        <div className={clsx('w-full flex flex-col items-center')}>
            <Image className={clsx('w-2/12 md:w-1/12')} src={florImg} alt="imagem de flor" />
            <div className={clsx('w-full flex flex-col items-center', 'font-beau text-musgo', 'text-4xl md:text-9xl')}>
                <p>Alessandra Bittencourt</p>
                <p className={clsx('font-ephesis')}>&</p>
                <p className={clsx('leading-6 md:leading-[80px]')}>Luiz Lima</p>
            </div>
            <section className={clsx('w-full flex flex-row justify-center md:justify-evenly mt-8 md:mt-16', 'font-cinzel font-bold text-[#1426017D] text-[10px] gap-2 md:text-2xl', 'cursor-pointer')}>
                <p className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Início</p>
                <p onClick={() => refSection('about-section')} className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>O Casal</p>
                <p onClick={() => refSection("locale-section")} className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Confirmar Presença</p>
                <p onClick={() => refSection("prom-section")} className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Cerimônia</p>
                <p onClick={() => refSection("upon-section")} className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Presentes</p>
            </section>
            <div className={clsx('w-5/12 h-[0.5px] bg-[#14260163] mt-6 md:mt-16')} />

        </div>
    )
}