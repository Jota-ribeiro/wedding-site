import TitleSection from "@/components/sections/TitleSection";
import clsx from "clsx";
import Image from "next/image";

export default function Home() {
  return (
    <main className={clsx('w-full flex flex-col items-center', 'px-6 py-7',)}>
      <TitleSection />
    </main>
  );
}
