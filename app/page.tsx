'use client'

//--Imports
import clsx from "clsx";

//--Components
import Header from "@/components/sections_v2/Header";
import FirstSection from "@/components/sections_v2/FirstSection";

export default function Home() {

  return (
    <main>
      <Header />

      {/* section com img, aside e btn que aparecerá somente no mobile */}
      <FirstSection />

      <section className={clsx('relative flex justify-center items-center')}>
        {/* <Image className={clsx('w-full')} src={imgCasal} alt="" />
        <div className={clsx('flex flex-col absolute', 'justify-center items-center')}>
          <h1 className={clsx('text-white font-beau text-8xl')}>Alessandra & Luiz</h1>
          <p className={clsx('text-white font-cinzel text-2xl')}>29 de março de 2025</p>
        </div> */}

      </section>
    </main>
  );
}
