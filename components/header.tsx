import Link from 'next/link'
import { SiNotion } from "react-icons/si"

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6 border-b border-slate-300/10">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                    <div className='flex cursor-pointer'>
                        <div className='mr-2'>
                            <SiNotion className='inline-block text-sky-500 text-xl' />
                        </div>
                        <p className="font-semibold text-xl tracking-tight text-white">Notion Test App</p>
                    </div>
                </Link>
            </div>
        </nav>
    )
}