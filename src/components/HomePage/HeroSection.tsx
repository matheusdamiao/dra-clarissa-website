'use client'
import React from 'react'
import Button from '../Button'
import Link from 'next/link'
import useAnimateOnView from '@/utils/useAnimateOnView'
import { motion } from 'framer-motion'

const HeroSectionHome = () => {

  const {TitleAnimation, animationControls, ref } = useAnimateOnView()
  return (
    <div className='relative h-[95svh] lg:h-[85svh] w-full bg-black' >
      <div className='max-w-7xl mx-auto flex  flex-col h-full items-center justify-center'>
      
        <video className='absolute opacity-40 top-0 w-full left-0 object-cover h-full' muted loop autoPlay>
            <source  src='/videos/video-hero-3.mp4' type="video/mp4" className=''/>

        </video>
        <div ref={ref} className='px-6 max-w-[800px] z-30 w-full mx-auto flex pt-[50px] flex-col h-[400px] justify-center gap-8 relative'>
            <motion.h1
             initial='hidden'
             animate={animationControls}
              variants={{
               hidden: {
                   opacity: 0, y: '80px',
                 },
                 show: {
                   opacity: 1, y: '0'
                 }
              }}
            transition={{delay: 0.1, duration: 1}}
             
            className="text-white text-[40px] lg:text-[60px] z-[31] leading-[120%] font-bold">Soluções jurídicas com clareza, expertise e segurança. </motion.h1>
            <motion.p
            initial='hidden'
            animate={animationControls}
             variants={{
              hidden: {
                  opacity: 0, y: '80px',
                },
                show: {
                  opacity: 1, y: '0'
                }
             }}
           transition={{delay: 0.3, duration: 1.2}}
            className='leading-[150%] text-[#E0E0E0] z-[32] text-base lg:text-xl max-w-[550px] font-medium'>Ouvimos você com atenção e planejamos a melhor estratégia jurídica para resolver seus problemas da forma mais eficiente e tranquila possível. </motion.p>
            <motion.a
            href='/#contato'
            initial='hidden'
            animate={animationControls}
             variants={{
              hidden: {
                  opacity: 0, y: '20px',
                },
                show: {
                  opacity: 1, y: '0'
                }
             }}
           transition={{delay: 0.6, duration: 1.5}}
          
            ><Button bgColor="bg-main-orange" textColor='text-black '> Agende uma reunião </Button></motion.a>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionHome
