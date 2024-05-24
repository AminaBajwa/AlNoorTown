'use client'
import React, { useEffect } from 'react';
import Link from "next/link";

const Header = () => {

  const handleClick = () => {
    const collapseMenu = document.getElementById('collapseMenu');

    if (collapseMenu) {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }
  };

  return (
     <header className='shadow-md font-sans'>
      <section className='py-2 bg-[#c69840] text-white text-right px-12'>
        <p className='text-sm'><strong className="mx-2">Address:</strong>Chenab rangers road Sialkot, Punjab, Pakistan<strong className="mx-2">Contact
          No:</strong>0311 1111268</p>
      </section>


      <div className='flex flex-wrap items-center justify-between gap-4 px-10 py-4 relative bg-white min-h-[70px]'>
        <a href="javascript:void(0)"><img src="./ALnoorLogo.png" alt="logo" className='w-44' /></a>
        <div className='flex max-lg:ml-auto lg:order-1'>
          <button id="toggle" className='lg:hidden' onClick={handleClick}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <ul id="collapseMenu" className='lg:!flex lg:space-x-4 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><Link href='/'
            className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>Home</Link>
        </li>
          <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
            <Link href='/amenity'
              className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>Amenities</Link>
          </li>
        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><Link href='/projects'
            className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>Projects</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><Link href='/blogs'
            className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>Blog</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><Link href='/map'
            className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>Maps</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'><Link href='/about'
            className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>About Us</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
          <Link href='/contact'
            className='lg:hover:text-[#c69840] text-[#333] block font-semibold text-[15px]'>Contact Us</Link>
        </li>
      </ul>
    </div>
  </header>
  )
}

export default Header

