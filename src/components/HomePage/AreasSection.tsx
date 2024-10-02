'use client';
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import foto from './../../../public/images/foto-areas-de-atuacao.png'
import Link from 'next/link'
import useAnimateOnView from '@/utils/useAnimateOnView'
import { motion } from 'framer-motion'

const AreasSection = () => {

    const { animationControls, ref } = useAnimateOnView()


  return (
    <div id='especialidades' className='pb-[100px]'>

        
        <div className='flex-col h-full items-center justify-center w-full relative overflow-hidden '>
            <Image src={foto} alt='foto' width={594} height={894} className='w-[500px] object-cover top-32 rounded-[7px] lg:block hidden absolute right-[80px]'/>
            <div className='flex flex-col px-6 gap-5 justify-center max-w-7xl mx-auto'>
                <small className='text-[#585858] text-xs lg:text-lg opacity-50 py-1 border-[#F5886C] text-center rounded-lg border-[1px] max-w-[160px] sm:max-w-[270px] w-full' >
                    Áreas de atuação
                </small>
                <h2 className='text-blackTitle font-bold  text-3xl lg:text-[50px] max-w-[720px] leading-[123%]'>
                    Somos especialistas em ajudar você
                </h2>

                <div ref={ref} className='pt-[50px] max-w-[900px] w-full grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-10 gap-x-5 gap-y-5'>
                    <motion.div
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
                        transition={{delay: 0.2, duration: 1}}
                        className='w-full gap-4 col-span-1 sm:col-span-3 lg:col-span-5 flex flex-col px-10 py-10 border-[#F5886C] border-[1px] rounded-[7px]'>
                        <p id='consumidor' className='font-bold text-xl text-[#393939]'>Direito do Consumidor</p>
                        <ul className=''>
                            <li className='text-base text-[#454545]'>Juros Abusivos</li>
                            <li className='text-base text-[#454545]'>Empréstimos fraudulentos</li>
                            <li className='text-base text-[#454545]'>Revisões contratuais</li>
                            <li className='text-base text-[#454545]'>Indenização por danos morais e materiais </li>
                        </ul>
                    
                    </motion.div>

                    <motion.div
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
                        transition={{delay: 0.4, duration: 1}}
                    
                        className='col-span-1 gap-4 sm:col-span-3 lg:col-span-5 bg-white z-50 flex items-start justify-center flex-col px-10 py-10 border-[#F5886C] border-[1px] rounded-[7px]'>
                        <p id='saude' className='font-bold text-xl text-[#393939] text-left'>Direito à Saúde</p>
                        <ul className=''>
                            <li className='text-base text-[#454545]'>Ações contra Planos de Saúde</li>
                            <li className='text-base text-[#454545]'>Defesa em casos de negativa de cobertura</li>
                            <li className='text-base text-[#454545]'>Pedidos de medicamento</li>
                            <li className='text-base text-[#454545]'>Home care</li>
                            <li className='text-base text-[#454545]'>Direitos médicos</li>

                        </ul>
                    
                    </motion.div>

                    <motion.div
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
                        transition={{delay: 0.6, duration: 1}}
                    
                        className='col-span-1 gap-4 sm:col-span-3 lg:col-span-4 flex flex-col px-10 py-10 border-[#F5886C] border-[1px] rounded-[7px]'>
                        <p id='civil' className='font-bold text-xl text-[#393939]'>Direito Civil</p>
                        <ul className=''>
                            <li  className='text-base text-[#454545]'>Usucapião</li>
                            <li  className='text-base text-[#454545]'>Reintegração de posse</li>
                            <li  className='text-base text-[#454545]'>Ações indenizatórias por danos materiais e morais</li>

                        </ul>
                    
                    </motion.div>

                    
                    <motion.div
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
                        transition={{delay: 0.8, duration: 1}} 
                        className='col-span-1 gap-4 sm:col-span-3 lg:col-span-5 bg-white z-50 flex flex-col  px-10 py-10 border-[#F5886C] border-[1px] rounded-[7px]'>
                        <p id='familia' className='font-bold text-xl text-[#393939]' >Direito de Família e Sucessões</p>
                        <ul className=''>
                            <li  className='text-base text-[#454545]'>Inventários judiciais e extrajudiciais</li>
                            <li  className='text-base text-[#454545]'>Testamentos e planejamento sucessório</li>
                            <li  className='text-base text-[#454545]'> Consultoria em planejamento sucessório</li>
                        </ul>
                    
                    </motion.div>


                    
                    <motion.div
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
                        transition={{delay: 1, duration: 1}}
                    
                        className='col-span-1 gap-4 sm:col-span-2 lg:col-span-5 flex flex-col px-10 py-10 border-[#F5886C] border-[1px] rounded-[7px]'>
                        <p id='previdenciario' className='font-bold text-xl text-[#393939]'>Direito Previdenciário</p>
                        <ul className=''>
                            <li  className='text-base text-[#454545]'>LOAS</li>
                            <li  className='text-base text-[#454545]'>Aposentadoria</li>
                            <li  className='text-base text-[#454545]'>Pensão por morte</li>
                            <li  className='text-base text-[#454545]'> Revisão de PASEP</li>

                        </ul>
                    
                    </motion.div>

                    
                    <motion.div
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
                        transition={{delay: 1.2, duration: 1}} 
                    
                        className=' sm:col-span-4 gap-4 lg:col-span-5 flex bg-white z-50 flex-col  px-10 py-10 border-[#F5886C] border-[1px] rounded-[7px]'>
                        <p  id='trabalhista' className='font-bold text-xl text-[#393939]'>Direito Trabalhista</p>
                        <ul className=''>
                            <li  className='text-base text-[#454545]'>Reclamação Trabalhista </li>                       
                            <li  className='text-base text-[#454545]'>  Rescisão indireta</li>
                            <li  className='text-base text-[#454545]'>   Homologação de acordos e convenções coletivas</li>
            

                           
                        </ul>
                    
                    </motion.div>
                </div>    

                <Link href='/areas-de-atuacao'><Button margin='mt-[25px]' textColor='#0000' size='max-w-[350px]' bgColor='bg-[#F4E1D2]'> Todas as áreas de atuação</Button></Link>
            </div>
        </div>

    </div>        
  )
}

export default AreasSection
