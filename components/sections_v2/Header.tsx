//--Imports
import clsx from "clsx";

export default function Header() {
    return (
        <nav className={clsx(
            'w-full hidden md:flex flex-row',
            'justify-center gap-16 items-center',
            'px-40 py-4', 'font-abhaya font-semibold',
            'text-xl text-Cinza_main_100'
        )}>
            <p className={clsx('cursor-pointer hover:underline transition-all ease-in-out duration-200')}>Home</p>
            <p className={clsx('cursor-pointer hover:underline transition-all ease-in-out duration-200')}>O Casal</p>
            <p className={clsx('cursor-pointer hover:underline transition-all ease-in-out duration-200')}>Cerimônia</p>
            <p className={clsx('cursor-pointer hover:underline transition-all ease-in-out duration-200')}>Presentes</p>
            <p className={clsx('cursor-pointer hover:underline transition-all ease-in-out duration-200')}>Recados</p>

        </nav>
    )
}