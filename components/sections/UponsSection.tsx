import clsx from "clsx";
import ShopCard from "../cards/ShopCard";

export default function UponsSection() {
    return (
        <section className={clsx('w-full flex flex-col items-center justify-center')}>
            <p className={clsx('font-beau text-[#142601]', 'text-3xl md:text-8xl')}>Lista de Presentes</p>
            <div className={clsx('grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-32 gap-y-14', 'py-11 md:py-16')}>
                {
                    Array.from({ length: 6 }).map((e, i) => (
                        <ShopCard key={i} />
                    ))
                }
            </div>
        </section>
    )
}