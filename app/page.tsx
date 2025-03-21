//--Imports
import clsx from "clsx";

//--Components
import AboutSection from "@/components/sections/AboutSection";
import LocaleSection from "@/components/sections/LocaleSection";
import PromSection from "@/components/sections/PromSection";
import TitleSection from "@/components/sections/TitleSection";
import UponsSection from "@/components/sections/UponsSection";

export default function Home() {
  return (
    <main className={clsx('w-full flex flex-col items-center', 'px-3 md:px-6 py-7', 'gap-8 md:gap-20')}>
      <TitleSection />
      <AboutSection />
      <LocaleSection />
      <PromSection />
      <UponsSection />
    </main>
  );
}
