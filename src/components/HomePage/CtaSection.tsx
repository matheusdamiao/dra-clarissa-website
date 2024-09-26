import React from 'react'
import Button from '../Button'
import Link from 'next/link'

const CtaSection = () => {
  return (
    <div className='bg-[#EAEAEA] w-full h-[400px]'>
        <div className=' px-6 max-w-7xl mx-auto w-full flex flex-col items-center h-full justify-center gap-12'>
                <h2 className='text-blackTitle font-bold text-center text-3xl lg:text-[50px] max-w-[700px] leading-[123%]'>
                Resolva seus problemas jurídicos com tranquilidade e segurança
                </h2>
                <Link href='/#contato'><Button bgColor="bg-main-orange" textColor='text-black '> Agende uma reunião </Button></Link>
        </div>

    </div>
  )
}

export default CtaSection
