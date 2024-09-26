import React from 'react'

const AllAreasSection = () => {
  return (
    <div className='max-w-7xl w-full mx-auto'>

        <div className='flex flex-col items-center py-[100px] w-full gap-16'>


            <div className='px-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap items-center lg:gap-24'>
                <div className='flex items-center justify-center lg:w-[350px] w-full h-[150px] lg:h-[250px] border-[#F5886C] border-[1px] rounded-[7px]'>
                    <h3 className='text-3xl font-bold'>Direito do Consumidor</h3>
                </div>

                <ul className='list-disc lg:w-[510px] px-6 pt-6 lg:pt-0'>
                    <li> Ações contra práticas abusivas de empresas e fornecedores    </li>
                    <li>  Defesa em casos de empréstimos indevidos e fraudulentos   </li>
                    <li>  Revisão de contratos e cláusulas abusivas   </li>
                    <li>   Cobranças indevidas e restituição de valores pagos  </li>
                    <li>   Ações de indenização por danos morais e materiais relacionados ao consumo  </li>
                    <li>  Defesa em ações relacionadas a produtos com defeito ou serviços não prestados  </li>
                </ul>
            </div>


            <div className='px-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap items-center lg:gap-24'>
                <div className='flex items-center justify-center lg:w-[350px] w-full h-[150px] lg:h-[250px] border-[#F5886C] border-[1px] rounded-[7px]'>
                     <h3 className='text-3xl font-bold'>Direito à Saúde</h3>
                </div>

                <ul className='list-disc lg:w-[510px] px-6 pt-6 lg:pt-0'>
                    <li> Defesa em casos de negativa de cobertura por planos de saúde   </li>
                    <li>  Pedidos judiciais para fornecimento de medicamentos  </li>
                    <li>  Solicitação de home care e tratamentos domiciliares  </li>
                    <li>   Ações relacionadas a erro médico e responsabilidade médica  </li>
                    <li>   Ações contra planos de saúde por reajustes abusivos  </li>
                    <li>  Ações para garantir tratamentos e procedimentos não cobertos   </li>

                </ul>
            </div>


             <div className='px-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap items-center lg:gap-24'>
                <div className='flex items-center justify-center  lg:w-[350px] w-full h-[150px] lg:h-[250px] border-[#F5886C] border-[1px] rounded-[7px]'>
                   <h3 className='text-3xl font-bold'>Direito Previdenciário</h3>
                </div>

                <ul className='list-disc lg:w-[510px] px-6 pt-6 lg:pt-0'>
                    <li> Revisão de aposentadoria e benefícios previdenciários    </li>
                    <li> Aposentadoria por idade, tempo de contribuição e invalidez  </li>
                    <li> Revisão de PASEP e PIS para correção de valores   </li>
                    <li> Concessão de LOAS (Benefício Assistencial ao Idoso e Deficiente)  </li>
                    <li>  Pensão por morte e auxílio-doença  </li>
                    <li>  Planejamento previdenciário para garantir os melhores benefícios   </li>

                </ul>
            </div>


             <div className='px-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap items-center lg:gap-24'>
                <div className='flex items-center justify-center  lg:w-[350px] w-full h-[150px] lg:h-[250px] border-[#F5886C] border-[1px] rounded-[7px]'>
                     <h3 className='text-3xl font-bold text-center'>Direito de Família e Sucessões</h3>
                </div>

                <ul className='list-disc lg:w-[510px] px-6 pt-6 lg:pt-0'>
                    <li> Inventários judiciais e extrajudiciais   </li>
                    <li>  Ações de divórcio, separação e partilha de bens   </li>
                    <li> Ações de guarda, visitação e pensão alimentícia  </li>
                    <li>  Reconhecimento e dissolução de união estável  </li>
                    <li>  Testamentos e planejamento sucessório  </li>
                    <li>  Ações de exoneração ou revisão de pensão alimentícia  </li>

                </ul>
            </div>


             <div className='px-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap items-center lg:gap-24'>
                <div className='flex items-center justify-center  lg:w-[350px] w-full h-[150px] lg:h-[250px] border-[#F5886C] border-[1px] rounded-[7px]'>
                    <h3 className='text-3xl font-bold'>Direito Civil</h3>
                </div>

                <ul className='list-disc lg:w-[510px] px-6 pt-6 lg:pt-0'>
                    <li> Reintegração de posse e usucapião   </li>
                    <li> Ações indenizatórias por danos materiais e morais  </li>
                    <li>  Revisão e elaboração de contratos civis   </li>
                    <li>  Cobrança de dívidas e execuções judiciais  </li>
                    <li>  Ações de obrigação de fazer e de não fazer  </li>
                    <li>  Responsabilidade civil em casos de acidentes e danos   </li>

                </ul>
            </div>



             <div className='px-6 flex flex-wrap flex-col lg:flex-row lg:flex-nowrap items-center lg:gap-24'>
                <div className='flex items-center justify-center  lg:w-[350px] w-full h-[150px] lg:h-[250px] border-[#F5886C] border-[1px] rounded-[7px]'>
                     <h3 className='text-3xl font-bold'>Direito Trabalhista</h3>
                </div>

                <ul className='list-disc lg:w-[510px] px-6 pt-6 lg:pt-0'>
                    <li> Reclamações trabalhistas e rescisão indireta   </li>
                    <li>  Ações de horas extras, adicional de insalubridade e periculosidade  </li>
                    <li> Homologação de acordos e convenções coletivas  </li>
                    <li>   Defesa em casos de justa causa ou demissão sem justa causa </li>
                    <li>   Ações de reconhecimento de vínculo empregatício  </li>
                    <li>  Reversão de demissões discriminatórias e rescisões irregulares   </li>

                </ul>
            </div>    


        </div>
      
    </div>
  )
}

export default AllAreasSection
