import clsx from "clsx";
import Image from "next/image";
import ProductExample from '@/public/img/img-example.png'


export default function ShopCard() {
    return (
        <div className={clsx('w-40 md:w-52 flex flex-col', 'rounded-xl border-[1px] border-[#14260173]')}>
            <Image className={clsx('rounded-t-xl max-h-44')} src={ProductExample} alt="" />
            <div className={clsx('w-full flex flex-col', 'p-4')}>
                <p className={clsx('text-[#1D1B20] text-sm font-medium')}>Aluguel de Carro para a Lua de Mel</p>
                <p className={clsx('text-[#49454F] text-xs font-medium')}>R$ 1.653,00</p>
                <div className={clsx('w-fit self-center mt-8 flex justify-center bg-[#142601]', 'text-white', 'py-2 px-6 rounded-full', 'cursor-pointer')}>
                    <p className={clsx('text-xs')}>Presentear</p>
                </div>
            </div>
        </div>
    )
}