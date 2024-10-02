'use client'
import Image from 'next/image'
import React from 'react'
import google from './../../../public/icons/google.svg'
import star from './../../../public/icons/star.svg'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
const Stars = () =>{
    return (
        <div className='flex gap-[16px]'>
            <Image src={star} width={16} height={16} alt='star'/>
            <Image src={star} width={16} height={16} alt='star'/>
            <Image src={star} width={16} height={16} alt='star'/>
            <Image src={star} width={16} height={16} alt='star'/>
            <Image src={star} width={16} height={16} alt='star'/>
        </div>
    )
}


const DepoimentosSection = () => {

    const [emblaRef] = useEmblaCarousel({loop: true, align: 'center'}, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 0.5 })
      ])
  return (
    <div id='depoimentos' className='py-[100px]'>

        
        <div className='flex-col relative h-full items-center justify-center w-full '>
            <div className='flex flex-col px-6 gap-5 justify-center items-center max-w-7xl mx-auto'>
                <small className='text-[#585858] text-xs lg:text-lg opacity-50 py-1 border-[#F5886C] text-center rounded-lg border-[1px] max-w-[270px] sm:max-w-[320px] w-full' >
                     Relatos dos nossos clientes
                </small>
                <h2 className='text-blackTitle font-bold text-center text-3xl lg:text-[50px] max-w-[620px] leading-[123%]'>
                  A confiança de saber que você está em boas mãos
                </h2>

                <div className='flex flex-col items-center justify-center max-w-[210px] gap-2'>
                    <div className='flex items-center justify-center gap-2'>
                        <Image src={google} width={44} height={44} alt='google icon'/>
                        <small className='text-[#373C38] text'>Avaliação Google</small>
                    </div>
                    <Stars/>
                    <small className='text-[#616863] text-xs text-center'>6 comentários</small>
                </div>
            </div>
            
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide shadow-xl cardsShadowCaroussel flex flex-col px-10 py-10 justify-between">
                        <p className='pt-[20px] text-xl text-[#434343]'>
                        Atendimento impecável. Muito clara e objetiva pra resolução dos seus problemas. Já acionei algumas vezes e o resultado foi sempre além do esperado. Excelente profissional.
                        </p>
                        <div className='flex justify-between'>
                            <small>Marcos Rufino</small>
                            <Stars/>
                        </div>
                    </div>
                    <div className="embla__slide shadow-xl cardsShadowCaroussel flex flex-col px-10 py-10 justify-between">
                        <p className='pt-[20px] text-xl text-[#434343]'>
                        Excelente advogada de direito Cível. grande especialista em direito do consumidor em diferentes temas. Me ajudou muito quando precisei
                        </p>
                        <div className='flex justify-between'>
                            <small>Rodrigo Abi-Ramia</small>
                            <Stars/>
                        </div>

                    </div>
                    <div className="embla__slide shadow-xl cardsShadowCaroussel flex flex-col px-10 py-10 justify-between">
                        <p className='pt-[20px] text-xl text-[#434343]'>
                        Excelente profissional e de extrema confiança.
                        </p>
                        <div className='flex justify-between'>
                            <small>Davi Costa</small>
                            <Stars/>
                        </div>

                    </div>
                    <div className="embla__slide shadow-xl cardsShadowCaroussel flex flex-col px-10 py-10 justify-between">
                        <p className='pt-[20px] text-xl text-[#434343]'>
                            Excelente profissional. Experiência ótima do início ao fim. Atua com maestria e clareza!
                        </p>
                        <div className='flex justify-between'>
                            <small>Diogo Barbosa</small>
                            <Stars/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default DepoimentosSection
