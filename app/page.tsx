'use client'

//--Imports
import clsx from "clsx";
import imgCasal from '@/public/img/img-casal-example.jpg'
import luizele from '@/public/img/img-casal.png'
import chevronDown from '@/public/img/chevron-down.svg'
//--Components
import Header from "@/components/sections_v2/Header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [showAside, setShowAside] = useState(true)

  return (

    <main>
      <Header />
      <aside className={clsx(
        'transition-all ease-in-out duration-500 h-screen font-abhaya font-semibold text-Cinza_main_100 text-xl',
        'overflow-hidden w-64',
        !showAside && 'w-0 opacity-0 translate-x-[-100%]' // Encolher e sumir para a esquerda
      )}>
        <div className={clsx('h-full flex flex-col bg-white border-r shadow-sm')}>
          <div className={clsx('h-auto flex flex-col bg-[#f2fcfc] py-6 px-8 gap-2')}>
            <div onClick={() => setShowAside(false)} className="self-end rotate-90 cursor-pointer">
              <Image src={chevronDown} alt="" />
            </div>
            <Image className="w-5/12" src={luizele} alt="" />
            <p className="text-lg">Alessandra <span className="text-red-400">&</span> Luiz Lima</p>
          </div>
          <div className="w-auto h-full flex flex-col py-6 px-8 gap-8">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">O Casal</p>
            <p className="cursor-pointer">Cerimônia</p>
            <p className="cursor-pointer">Presentes</p>
            <p className="cursor-pointer">Recados</p>
          </div>
        </div>
      </aside>


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
