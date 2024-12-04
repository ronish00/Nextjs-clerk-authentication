"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navigation = () => {

    const pathname = usePathname();

  return (
    <nav className='flex justify-center items-center p-4'>
      <Link href="/" className={pathname === '/' ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>Home</Link>
      <Link href="/about" className={pathname === '/about' ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>About</Link>
      <Link href="/products/1" className={pathname === '/products/1' ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>Product 1</Link>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}

export default Navigation