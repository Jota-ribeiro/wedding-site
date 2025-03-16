import ShopCard from "@/components/cards/ShopCard";
import AboutSection from "@/components/sections/AboutSection";
import LocaleSection from "@/components/sections/LocaleSection";
import PromSection from "@/components/sections/PromSection";
import TitleSection from "@/components/sections/TitleSection";
import clsx from "clsx";
import Image from "next/image";




export default function Home() {
  return (
    <main className={clsx('w-full flex flex-col items-center', 'px-3 md:px-6 py-7', 'gap-8 md:gap-20')}>
      <TitleSection />
      <AboutSection />
      <LocaleSection />
      <PromSection />
      <section className={clsx('w-full flex flex-col items-center justify-center')}>
        <p className={clsx('font-beau text-[#142601]', 'text-3xl md:text-8xl')}>Lista de Presentes</p>
        <div className={clsx('grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-32 gap-y-14', 'py-16')}>
          {
            Array.from({ length: 6 }).map((e, i) => (
              <ShopCard key={i} />
            ))
          }
        </div>
      </section>
    </main>
  );
}
