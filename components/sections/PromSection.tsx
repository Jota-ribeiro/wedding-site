import clsx from "clsx";

export default function PromSection() {
    return (
        <section className={clsx('w-full flex flex-col justify-center items-center', 'gap-12')}>
            <p className={clsx('font-beau text-[#142601]', 'text-3xl md:text-8xl')}>A Cerimônia</p>
            <div className={clsx('w-full px-5 md:px-44 flex flex-row justify-center', 'gap-10 md:gap-20')}>
                <div className={clsx('flex flex-col gap-5 md:gap-8', 'w-3/12')}>
                    <p className={clsx('font-cinzel md:text-4xl text-[#1D1B20]')}>Traje</p>
                    <p className={clsx('text-[#49454F] text-sm md:text-base')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className={clsx('flex flex-col gap-5 md:gap-8', 'w-3/12')}>
                    <p className={clsx('font-cinzel md:text-4xl text-[#1D1B20]')}>Clima</p>
                    <p className={clsx('text-[#49454F] text-sm md:text-base')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
                <div className={clsx('flex flex-col gap-5 md:gap-8', 'w-3/12')}>
                    <p className={clsx('font-cinzel md:text-4xl text-[#1D1B20]')}>Festa</p>
                    <p className={clsx('text-[#49454F] text-sm md:text-base')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
        </section>
    )
}