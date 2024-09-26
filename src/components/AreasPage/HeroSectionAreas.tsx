import React from 'react'
import Button from '../Button'

const HeroSectionAreas = () => {
  return (
    <div className='relative h-[95svh] lg:h-[85svh] w-full bg-black' >
      <div className='max-w-7xl mx-auto flex  flex-col h-full items-center justify-center'>
      
        <video className='absolute opacity-40 top-0 w-full left-0 object-cover h-full' muted loop autoPlay>
            <source  src='/videos/video-hero-areas.mp4' type="video/mp4" className=''/>

        </video>
        <div className='px-6 max-w-[800px] z-30 w-full mx-auto flex pt-[50px] flex-col h-[400px] justify-center gap-8 relative'>
            <h1 className="text-white text-[40px] lg:text-[60px] z-[31] leading-[120%] font-bold">Expertise Jurídica com Segurança e Eficiência </h1>
            <p className='leading-[150%] text-[#E0E0E0] z-[32] text-base lg:text-xl max-w-[660px] font-medium'>Nosso escritório atua em diversas áreas do Direito, oferecendo consultoria e soluções jurídicas completas, sempre com clareza, segurança e um atendimento personalizado. </p>
            <Button bgColor="bg-main-orange" textColor='text-black '> Agende uma reunião </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionAreas;
