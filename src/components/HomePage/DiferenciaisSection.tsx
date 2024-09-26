import Image from 'next/image'
import React from 'react'
import chat from './../../../public/icons/chat.svg'
import dialog from './../../../public/icons/dialog.svg'
import diploma from './../../../public/icons/diploma.svg'

const DiferenciaisSection = () => {
  return (
    <div className='py-[100px]'>

        
        <div className='flex-col px-6 h-full items-center justify-center w-full max-w-7xl mx-auto'>
            <div className=' mx-auto flex flex-col gap-5 justify-center max-w-[1000px]'>
                <small className='text-[#585858] text-xs lg:text-lg opacity-50 py-1 border-[#F5886C] text-center rounded-lg border-[1px] max-w-[160px] sm:max-w-[270px]' >
                    Nossos diferenciais
                </small>
                <h2 className='text-blackTitle font-bold text-3xl lg:text-[50px] max-w-[620px] leading-[123%]'>
                    Compromisso com você em todos os momentos
                </h2>
            </div>
            
            <div className='flex sm:flex-row flex-col flex-wrap items-center gap-[80px] pt-[50px] sm:pt-[80px] w-ful justify-center'>
                <div className='flex flex-col items-center justify-center gap-[25px] max-w-[280px]'>
                    <Image src={dialog} width={68} height={68} alt='dialog' />
                    <p className='font-bold text-blackTitle text-base text-center'>A atenção que você precisa</p>
                    <p className='text-center text-[#434343] text-sm'>Acompanhamos você durante todo seu processo. com comunicação clara e objetiva.</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-[25px] max-w-[280px]'>
                    <Image src={diploma}  width={68} height={68} alt='diploma'/>
                    <p className='font-bold text-blackTitle text-base text-center' >Especialistas experientes</p>
                    <p className='text-center text-[#434343] text-sm'> Análise detalhada e meticulosa de seus processos para orientar as melhores soluções possíveis.</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-[25px] max-w-[280px]'>
                    <Image src={chat}  width={68} height={68} alt='chat'/>
                    <p className='font-bold text-blackTitle text-base text-center'>Descomplicamos o jurídico </p>
                    <p className='text-center text-[#434343] text-sm'> Sentamos, conversamos e te explicamos cada etapa do seu processo.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiferenciaisSection