'use client'
import { Standard } from '@typebot.io/nextjs'
import Image from 'next/image'
import React from 'react'
import logo from './../../../public/icons/logo-text-black.svg'
import zap from './../../../public/icons/zap.svg'
import phone from './../../../public/icons/phone.svg'
import mail from './../../../public/icons/mail.svg'
import location from './../../../public/icons/map.svg'
import Maps from './Maps'


const ContactSection = () => {
  return (
    <div id='contato' className='flex-col h-full items-center justify-center pt-[50px] w-full mb-[100px] max-w-7xl mx-auto relative  '>
        <div className='flex flex-col px-6 gap-5 max-w-[550px] '>
            <small className='text-[#585858] text-xs lg:text-lg opacity-50 py-1 border-[#F5886C] text-center rounded-lg border-[1px] max-w-[160px] sm:max-w-[270px] w-full' >
                Agende um consulta
            </small>
            <h2 className='text-blackTitle font-bold text-3xl lg:text-[50px] max-w-[720px] leading-[123%]'>
               Entre em contato conosco
            </h2>
            {/* <p className='text-[#585858]'>
            Busque ajuda de nossas advogadas especialistas para melhor solucionar seus problemas. Fale diretamente com nossa assistente virtual abaixo, ou, se preferir, entre em contato por telefone, WhatsApp ou e-mail.
            </p> */}

            
            
        </div>  

        <Image src={logo} alt='logo' className='hidden lg:block absolute w-[300px] right-44 top-16 '/>  

        <div className='flex pt-[50px] justify-between lg:flex-nowrap flex-wrap'>


            <div className='w-full px-6 lg:max-w-[550px] pt-10'>
                    <Standard
                        typebot="lead-generation-qoeph7s"
                        style={{ width: "100%", height: "400px", background: '#00000' }}
                        />
            </div>
      
            <div className='px-6 lg:max-w-[500px] flex flex-col gap-8 pt-[120px]'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
                    <div className='flex items-center gap-3'>
                        <Image alt='icone' src={zap} width={32} height={32}/>
                        <p className='text-base font-bold text-[#686868]'>WhatsApp</p>
                    </div>
                    <p className='text-[#686868] text-base '>(21) 97227-1885</p>
                </div>

                {/* <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
                    <div className='flex items-center gap-3'>
                        <Image alt='icone' src={phone} width={32} height={32}/>
                        <p className='text-base font-bold text-[#686868]'>Telefone</p>
                    </div>
                    <p className='text-[#686868] lg:text-base'>(21) 99383-29393</p>
                </div> */}

                <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
                    <div className='flex items-center gap-3'>
                        <Image alt='icone' src={mail} width={32} height={32}/>
                        <p className='text-base font-bold text-[#686868]'>E-mail</p>
                    </div>
                    <p className='text-[#686868] lg:text-base'> clarissadias.adv@gmail.com </p>
                </div>

                <div className='flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6'>
                    <div className='flex items-center gap-3'>
                        <Image alt='icone' src={location} width={32} height={32}/>
                        <p className='text-base font-bold text-[#686868]'>Endereço</p>
                    </div>
                    <p className='text-[#686868] lg:text-base w-[70%]'>Av. Ernani do Amaral Peixoto, 207 - 1315 - Centro, Niterói - RJ</p>
                </div>

            </div>
        </div>
        {/* <Maps/> */}

    </div>
  )
}

export default ContactSection
