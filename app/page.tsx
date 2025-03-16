import TitleSection from "@/components/sections/TitleSection";
import clsx from "clsx";
import Image from "next/image";

import casalImg from '@/public/img/img-casal.png'
import imgFlor from '@/public/img/img-flor-2.svg'

export default function Home() {
  return (
    <main className={clsx('w-full flex flex-col items-center', 'px-6 py-7', 'gap-10 md:gap-20')}>
      <TitleSection />
      <section className={clsx('w-full flex flex-col items-center', 'gap-5 md:gap-10')}>
        <p className={clsx('font-beau text-musgo', 'text-3xl md:text-8xl')}>O Casal</p>
        <Image className={clsx('w-8/12 md:w-auto')} src={casalImg} alt="" />
        <div className={clsx('w-full max-h-64 md:max-h-none overflow-auto md:overflow-hidden px-3 md:px-48', 'font-cinzel leading-6 text-[10px] md:text-base text-center', 'flex flex-col gap-8')}>
          <p>Está chegando o grande dia de dividirmos nosso momento com as pessoas mais importantes das nossas vidas. Para que esse dia chegasse, houve muita dedicação, apoio de amigos e familiares, carinho (uma breve distância), e acima de tudo muito amor.</p>
          <p>Nossa história se iniciou como amigos, que dividiam interesses em comum: paixão por jogos, conversas no corredor da empresa e uma grande admiração que só cresceu com o passar do tempo. Não demorou muito para que esse sentimento se transformasse em algo ainda maior.</p>
          <p>O pedido de namoro aconteceu muito distante de onde tudo se iniciou, na Austrália, onde longe de tudo que conhecíamos e que nos era familiar. Nos amparamos um no outro, aprendemos a viver juntos e a partir daí, não foi mais possível imaginar uma vida separados.</p>
          <p>Hoje, olhando para trás o que passou, vemos que tudo valeu a pena. A Alessandra e o Luiz do passado nunca imaginariam o que o destino os aguardava, desde aquele fatídico encontro na nos corredores de Lagoa Santa e nem o quão importante seriam um para o outro dali para frente. Não faziam ideia de que a pequena família composta por dois humanos e dois felinos seria o maior tesouro que pudemos construir até hoje.</p>
          <p className={clsx('text-[#000000] font-bold')}>Obrigado a todos por fazerem parte da nossa história, por torcerem por nossa felicidade!</p>
        </div>
        <Image className={clsx('w-2/12 md:w-auto')} src={imgFlor} alt="" />
      </section>
    </main>
  );
}
