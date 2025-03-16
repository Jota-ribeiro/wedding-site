import clsx from "clsx";
import Image from "next/image";
import iconLupa from '@/public/img/icon-lupa.svg'
import iconCalender from '@/public/img/icon-calendar.svg'
import imgFlor from '@/public/img/img-flor3.svg'


export default function LocaleSection() {
    return (
        <section id="locale-section" className={clsx('w-full flex flex-col items-center md:-mt-8', 'gap-2 md:gap-5', 'text-[#142601]')}>
            <p className={clsx('font-beau', 'text-3xl md:text-8xl')}>Junte-se a nós no nosso casamento</p>
            <p className={clsx('font-cinzel md:text-4xl')}>16 de Junho de 2025</p>
            <p className={clsx('font-cinzel md:text-4xl')}>às 16h00</p>
            <p className={clsx('font-cinzel md:text-4xl')}>Lake House - Pampulha/BH</p>

            <div className={clsx('w-full md:w-4/12 px-3 gap-3 flex flex-row justify-center')}>
                <div style={{
                    boxShadow: "0px 3.455px 3.455px 0px rgba(0, 0, 0, 0.25)",
                }} className={clsx('w-6/12 bg-white', 'py-3 flex flex-row justify-center items-center gap-2', 'rounded', 'cursor-pointer active:scale-95 ease-in-out duration-300')}>
                    <Image src={iconLupa} alt="" />

                    <p className={clsx('text-[11px] md:text-xs font-semibold')}>Como Chegar</p>
                </div>
                <div style={{
                    boxShadow: "0px 3.455px 3.455px 0px rgba(0, 0, 0, 0.25)",
                }} className={clsx('w-6/12 bg-[#142601]', 'py-3 flex flex-row justify-center items-center gap-2', 'rounded', 'cursor-pointer active:scale-95 ease-in-out duration-300')}>
                    <Image src={iconCalender} alt="" />

                    <p className={clsx('text-[11px] md:text-xs text-white font-semibold')}>Confirmar Presença</p>
                </div>
            </div>

            <Image className={clsx('w-3/12 md:w-auto mt-8 md:mt-14')} src={imgFlor} alt="" />
        </section>
    )
}