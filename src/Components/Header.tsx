'use client'
import Link from 'next/link'
import Image from 'next/image';
import { Code } from 'lucide-react'
const Header = () => {
  
  return (
	<div className='flex justify-center items-center shadow-md rounded-md max-w-full p-2 '>
		<nav className="flex  justify-center  gap-6 text-sm">
        <img src="/zen.jpg" className='h-6 w-6 rounded-full' alt="pic" />
        <Link href='/#' className="hover:underline">Me</Link>
        <Link  href='/About' className="hover:underline">About</Link>
        <Link href='/Blog' className="hover:underline">Blog</Link>
        <Link href='/Work' className="hover:underline"><Code/></Link>
        <Link href='/Current' className="hover:underline">Now</Link>
      </nav>
	</div>
  )
}

export default Header