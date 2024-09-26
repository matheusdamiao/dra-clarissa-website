'use client';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from './../../public/icons/logo-text-white-2.svg'
import Link from 'next/link'
import useWindowDimensions from '@/utils/useWindowDimensions';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  let size = useWindowDimensions();

  useEffect(() => {
    if(size){
    if (size.width > 800) {
      setIsOpen(false);
    }
    }
}, [size, isOpen]);

const handleMenuMobile = () =>{
  setIsOpen(!isOpen)
}


  return (
    <nav className=' lg:max-w-7xl w-full mx-auto z-[88888888888] h-[80px] sm:h-0 bg-menu-mobile fixed sm:relative'>
      <Link href='/' className='px-4 pt-[10px] lg:pt-[20px] fixed lg:absolute z-[999999999999999999]'>
        <Image src={logo} width={379} height={115} alt='logo' className='w-[200px] lg:w-[300px] '/>
      </Link>

      <ul className='absolute right-0 hidden sm:flex pt-[40px] pr-6 lg:pt-[60px] items-center justify-between w-[400px] text-white'>
        <li><Link href='sobre'> Sobre o Escritório</Link></li>
        <li><Link href='areas-de-atuacao'> Áreas de Atuação</Link></li>
        <li><Link href='/#contato'> Contato</Link></li>

      </ul>


      <div onClick={()=> handleMenuMobile()} className={`fixed z-[99999999] right-6 top-6 bg-gray-100 border  transition-colors  sm:hidden w-[44px] h-[44px] !flex-shrink-0 rounded-full  flex items-center justify-center gap-1 flex-col`}>
        <span className={`${isOpen ? 'translate-y-[3px] rotate-45 !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-gray-600 block rounded-lg `}> </span>
        <span className={`${isOpen ? 'hidden' : ''} w-[14px] h-[2px] bg-gray-600 block rounded-lg !flex-shrink-0`}> </span>
        <span className={`${isOpen ? 'translate-y-[-3px] rotate-[-45deg] !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-gray-600 block rounded-lg `}> </span>
      </div>


      {isOpen ?  
        <div className='absolute top-0 translate-x-[0px] duration-500 transition-all bg-menu-aberto mt-[80px] text-white w-full h-[300px]'>
          <ul className='px-[20px] pt-[95px] flex flex-col gap-4 items-center ' >
            <li className='py-spacing-lg px-spacing-xl'>
              <a href='/sobre' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute after:bottom-[-10px]'>Sobre o Escritório</a>
            </li>
            <li className='py-spacing-lg px-spacing-xl'>
              <a href='/areas-de-atuacao' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute after:bottom-[-10px]'>Áreas de Atuação</a>
            </li>
            <li className='py-spacing-lg px-spacing-xl '>
              <a href='/#contato' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-700 after:absolute after:bottom-[-10px]' > Contato </a>
            </li>
          
          </ul>
        </div>
        :
        <div className={` transition-all absolute top-0 translate-x-[-1000px] duration-1000 w-full  h-[80svh]`}>
        </div>
      }



    </nav>
  )
}

export default Menu
