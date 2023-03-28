import { FunctionComponent, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiHomeLine } from 'react-icons/ri'
import { BiCategoryAlt } from 'react-icons/bi'
import { VscWand } from 'react-icons/vsc'
import { MdOutlineInbox } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex">
            <nav className="w-1/8 bg-[#FEFEFF] h-screen border-2 border-[#E4E7E8] flex flex-col space-y-2 p-4 items-center ">
                <Image src="/assets/logo.svg" alt="Logo" width="24" height="24" className=' my-3 ' />
                <div className="flex items-center justify-center h-auto flex-col ">
                    <RiHomeLine className='nav-icons' />
                    <BiCategoryAlt className='nav-icons' />
                    <VscWand className='nav-icons' />
                    <MdOutlineInbox className='nav-icons' />
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center justify-center h-auto flex-col">
                    <CgProfile className='nav-icons' />
                    <FiSettings className='nav-icons' />
                </div>
            </nav>
            <main className="w-full">{children}</main>
        </div>
    )
}
