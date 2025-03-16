import AboutSection from "@/components/sections/AboutSection";
import TitleSection from "@/components/sections/TitleSection";
import clsx from "clsx";
import Image from "next/image";
import iconLupa from '@/public/img/icon-lupa.svg'
import iconCalender from '@/public/img/icon-calendar.svg'



export default function Home() {
  return (
    <main className={clsx('w-full flex flex-col items-center', 'px-3 md:px-6 py-7', 'gap-8 md:gap-20')}>
      <TitleSection />
      <AboutSection />
      <section className={clsx('w-full flex flex-col items-center md:-mt-8', 'gap-2 md:gap-5', 'text-[#142601]')}>
        <p className={clsx('font-beau', 'text-3xl md:text-8xl')}>Junte-se a nós no nosso casamento</p>
        <p className={clsx('font-cinzel md:text-4xl')}>16 de Junho de 2025</p>
        <p className={clsx('font-cinzel md:text-4xl')}>às 16h00</p>
        <p className={clsx('font-cinzel md:text-4xl')}>Lake House - Pampulha/BH</p>

        <div className={clsx('w-full md:w-4/12 px-3 gap-3 flex flex-row justify-center')}>
          <div className={clsx('w-6/12 bg-white', 'py-3 flex flex-row justify-center items-center gap-2', 'rounded', 'cursor-pointer')}>
            <Image src={iconLupa} alt="" />

            <p className={clsx('text-[11px] md:text-xs font-semibold')}>Como Chegar</p>
          </div>
          <div className={clsx('w-6/12 bg-[#142601]', 'py-3 flex flex-row justify-center items-center gap-2', 'rounded', 'cursor-pointer')}>
            <Image src={iconCalender} alt="" />

            <p className={clsx('text-[11px] md:text-xs text-white font-semibold')}>Confirmar Presença</p>
          </div>
        </div>
      </section>
    </main>
  );
}
