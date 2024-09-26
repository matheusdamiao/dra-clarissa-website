import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import foto from './../../../public/images/foto-secao-about-da-home.png'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className='lg:py-[100px] max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] xl:gap-x-[100px] px-6 h-full w-full '>
            <div className='order-2 lg:order-1 mx-auto flex flex-col gap-5 pb-[50px] lg:pb-[150px] pt-[40px] lg:pt-[80px]  max-w-[1000px]'>
                <small className='text-[#585858] text-xs lg:text-lg opacity-50 py-1 border-[#F5886C] text-center rounded-lg border-[1px] max-w-[160px] sm:max-w-[270px]' >
                    Nossos escritório
                </small>
                <h2 className='text-blackTitle font-bold text-3xl lg:text-[50px] max-w-[620px] leading-[123%]'>
                    Dedicação Absoluta na Defesa dos seus Interesses
                </h2>
                <p className='max-w-[420px] text-[#585858]'>
                    Com mais de 10 anos de experiência em Direito Cível, Dra. Clarissa Dias oferece soluções jurídicas personalizadas, priorizando sempre o bem-estar e a tranquilidade de seus clientes.
                </p>

                <Link href='/sobre'><Button margin='mt-[25px]' textColor='#0000' size='max-w-[300px]' bgColor='bg-[#F4E1D2]'> Conheça nossa história</Button></Link>

            </div>

            <Image src={foto} alt='' className='order-1 lg:order-2 w-full lg:h-[500px] lg:w-[800px] object-cover mt-[100px] lg:mt-0 '>

            </Image>
        </div>
    </div>
  )
}

export default AboutSection
