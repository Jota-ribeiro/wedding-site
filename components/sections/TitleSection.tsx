import clsx from "clsx";
import Image from "next/image";
import florImg from '@/public/img/img-flor.svg'


export default function TitleSection() {
    return (
        <>
            <Image className={clsx('w-2/12 md:w-1/12')} src={florImg} alt="imagem de flor" />
            <div className={clsx('w-full flex flex-col items-center', 'font-beau text-musgo', 'text-5xl md:text-9xl')}>
                <p>Alessandra Bittencourt</p>
                <p className={clsx('font-ephesis')}>&</p>
                <p className={clsx('leading-6 md:leading-[80px]')}>Luiz Lima</p>
            </div>
            <section className={clsx('w-full flex flex-row justify-center md:justify-evenly', 'font-cinzel font-bold text-[#1426017D] text-[10px] gap-2 md:text-2xl', 'cursor-pointer')}>
                <p className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Início</p>
                <p className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>O Casal</p>
                <p className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Confirmar Presença</p>
                <p className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Cerimônia</p>
                <p className={clsx('hover:text-[#142601] hover:underline transition-all ease-in-out')}>Presentes</p>
            </section>
        </>
    )
}