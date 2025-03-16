import AboutSection from "@/components/sections/AboutSection";
import LocaleSection from "@/components/sections/LocaleSection";
import TitleSection from "@/components/sections/TitleSection";
import clsx from "clsx";
import Image from "next/image";




export default function Home() {
  return (
    <main className={clsx('w-full flex flex-col items-center', 'px-3 md:px-6 py-7', 'gap-8 md:gap-20')}>
      <TitleSection />
      <AboutSection />
      <LocaleSection />
    </main>
  );
}
