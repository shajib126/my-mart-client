import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <header className='h-20 fixed top-0 left-0 right-0 border-b backdrop-blur-lg bg-light/90 z-[100]'>
      <div className="wrapper w-full h-full flex justify-between items-center ">
        <nav>
          <Link href='/' className='text-xl font-semibold link-item'>My Shop</Link>
        </nav>
        <nav >
          <ul className='flex gap-5'>
            <li>
              <Link href={'/'} className='link-item'>Home</Link>
            </li>
            <li>
              <Link href={'/products'} className='link-item'>Products</Link>
            </li>
            <li>
              <Link href={'/about'} className='link-item'>About</Link>
            </li>
            <li>
              <Link href={'/contact'} className='link-item'>Contact</Link>
            </li>
          </ul>
        </nav>
        <nav>
         <Button href='/login' placeholder='Login' color='green' />
        </nav>
      </div>
    </header>
  )
}

export default Navbar