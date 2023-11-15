import React from 'react'
import koinx from '../asset/koinxlogo.svg'

export default function Navbar() {
  return (
    <div className='w-full lg:h-20 md:h-16 2sm:h-16  lg:pl-[60px] md:px-6 2sm:px-6 lg:pr-[56px] bg-white border-b flex items-center justify-between fixed z-10'>
        <img src={koinx} alt="koinx logo" className='w-24 md:w-20 sm:w-20' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 lg:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        
        <div className='w-[909px] lg:flex 2sm:hidden h-full flex items-center justify-end gap-16'>
            <ul className='flex gap-8 text-base text-black font-semibold'>
                <li>Features</li>
                <li>Exchanges</li>
                <li>How It Works?</li>
                <li>Blog</li>
                <li>About us</li>
            </ul>
            <button className='w-28 h-10 border-solid border rounded border-primary text-base font-semibold text text-primary'>
                Sign In
            </button>
        </div>
    </div>
  )
}
