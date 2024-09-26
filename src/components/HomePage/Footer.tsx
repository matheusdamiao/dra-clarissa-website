import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from './../../../public/icons/logo-text-white-2.svg'
import mail from './../../../public/icons/mail.svg'
import phone from './../../../public/icons/phone.svg'
import map from './../../../public/icons/map.svg'


const Footer = () => {
  return (
    <footer className='bg-[#373435] w-full h-full lg:h-[750px]'>
      <div className='max-w-7xl w-full mx-auto flex flex-col justify-between h-full px-10'>

        <div className='flex justify-between lg:gap-0 gap-10 flex-wrap pt-[80px]'>
            <div className='flex flex-col h-[450px] justify-between'>

                <div>
                    <Image src={logo} alt='logo' width={331} className='w-[400px]' height={100}/>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className='text-[#FFFFFF]'> Horário de atendimento</p>
                    <small className='text-sm text-[#acacac]'>Seg - Sex: 8h - 18h </small>
                </div>


                <div className='flex flex-col gap-6  '>
                    <div className='flex  gap-5'>
                        <Image src={phone} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>(21) 92272-3020</p>
                    </div>
                    <div className='flex gap-5'>
                        <Image src={mail} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>contato@draclarissadias.com.br</p>
                    </div>
                    <div className='flex gap-5'>
                         <Image src={map} alt='icone' width={27} height={27}/>
                        <p className='text-[#CDCDCD] text-sm'>Av. Ernani do Amaral Peixoto, 207 - Sala 1315 - Centro, Niterói - RJ</p>
                    </div>
                </div>

            </div>

            <div className='flex gap-20 lg:gap-4 flex-wrap flex-col lg:flex-row lg:flex-nowrap pt-[50px] pb-14 lg:pb-0 w-[450px] justify-between'>
                <div className='flex flex-col gap-8'>
                    <h5 className='text text-white' >Menu do Site</h5>
                    <ul className='flex flex-col gap-4 text-[#aaaaaa]'>
                        <li><Link href='/#depoimentos'>Depoimentos</Link></li>
                        <li><Link href='/#especialidades'>Especialidades</Link></li>
                        <li><Link href='/#depoimentos'>Diferenciais</Link></li>
                        <li><Link href='/#depoimentos'>Sobre o Escritório</Link></li>
                        <li><Link href='/#depoimentos'>Entre em contato</Link></li>

                    </ul>
                </div>
                <div className='flex flex-col gap-8 text-white'>
                    <h5>Áreas do Direito</h5>
                    <ul className='flex flex-col gap-4 text-[#aaaaaa]'>
                        <li><Link href='/#depoimentos'>Direito Civil</Link></li>
                        <li><Link href='/#especialidades'>Direito do Consumidor</Link></li>
                        <li><Link href='/#depoimentos'>Direito de Família</Link></li>
                        <li><Link href='/#depoimentos'>Direito à Saúde</Link></li>
                        <li><Link href='/#depoimentos'>Direito Trabalhista</Link></li>

                    </ul>
                </div>
            </div>


        </div>

        <div className='flex text-xs justify-center lg:justify-between gap-4 flex-wrap py-8 text-[#CDCDCD]'>

            <small> Todos os direitos Reservados - 2024</small>

            <small>Clarissa Dias - Advocacia e Consultoria Jurídica </small>

            <small>Desenvolvido por Matheus Damião</small>
        </div>

      </div>
    </footer>
  )
}

export default Footer
