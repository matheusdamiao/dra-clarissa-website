import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import foto from './../../../public/images/foto-dra-clarissa.png'

const DraClarissaSection = () => {
  return (
    <div className='lg:py-[100px] max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] xl:gap-x-[100px] px-6 h-full w-full '>
            <div className='order-2 lg:order-1 mx-auto flex flex-col gap-5 pb-[150px] pt-[40px]  max-w-[1000px]'>
                <small className='text-[#585858] text-xs lg:text-lg opacity-50 py-1 border-[#F5886C] text-center rounded-lg border-[1px] max-w-[160px] sm:max-w-[270px]' >
                A fundadora
                </small>
                <h2 className='text-blackTitle font-bold text-3xl lg:text-[50px] max-w-[620px] leading-[123%]'>
                Dra. Clarissa Dias
                </h2>
                <p className='max-w-[520px] text-[#585858]'>
                Com mais de 8 anos de experiência jurídica, Dra. Clarissa Dias é especialista em Direito Cível, Direito do Consumidor e Direito de Família e Sucessões. 
                <br /> <br />
                Ao longo de sua carreira, tem se destacado pela atuação proativa e focada na resolução eficiente de conflitos, oferecendo consultoria jurídica especializada para pessoas físicas e jurídicas.
                <br /><br />
                Seu compromisso é sempre fornecer uma assistência jurídica preventiva e estratégica, que alia conhecimento técnico e abordagem prática para alcançar os melhores resultados possíveis para seus clientes.
                </p>

                <div className='pt-10'>
                  <h4  className='text-lg'>Formação Acadêmica</h4>
                  <ul className='list-disc pt-4 px-6 text-[#585858]'>
                    <li>
                    Pós-graduanda em Direito Previdenciário
                    </li>
                    <li>Pós-graduada em Direito Público - UCAM (2019)</li>
                    <li>Graduada em Direito - Universidade Estácio de Sá (2016)</li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-lg'>Especializações & Cursos</h4>
                  <ul className='list-disc pt-4 px-6 text-[#585858]'>
                    <li>
                      Ações em Face das Operadoras de Plano de Saúde - ESA/RJ 
                    </li>
                    <li>Reembolso de Plano de Saúde: Manual para Advogados - EBRASA</li>
                    <li>Inventário, divórcio e Partilha Extrajudicial - ESA/RJ</li>
                    <li>Inventário na Prática - OAB - Niterói</li>
                    <li>Atualização do código do Consumidor com a nova Lei do Superendividamento - Tríade Estudos Jurídicos</li>
                    <li>Curso Entendendo a Reforma da Previdência - OAB/RJ</li>
                    <li>Direito dos Contratos - EMERJ</li>
                    <li>Direito Sucessório na Prática - Judicial e Extrajudicial - Tríade Estudos Jurídicos</li>
                  </ul>

                </div>


            </div>

            <Image src={foto} alt='' className='lg:sticky lg:mb-[100px] lg:top-16 order-1 lg:order-2 w-full lg:h-[500px] lg:w-[800px] object-cover mt-[100px] lg:mt-0 '>

            </Image>
        </div>
    </div>
  )
}

export default DraClarissaSection;
