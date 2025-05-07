import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    // <div className='w-full bg-revo-gradient py-36 text-revogreen grid grid-cols-1 gap-15 md:gap-30 md:grid-cols-2 bg-red'>
    //   <div className='container-small '>
    //     <h2 className='text-2xl sm:text-3xl pb-7 uppercase font-bold'>
    //       Quem Somos
    //     </h2>
    //     <p className='sm:text-2xl'>
    //       Nossa operação incorpora enorme experiência e conhecimento do setor por meio da nossa expertise e parceiros estratégicos que possuem vasto histórico de atuação no Setor de Energia Renovável.
    //     </p>
    //   </div>

    //   <div className="flex flex-col col-start-2 gap-4 justify-start pb-7">
    //     <div className='titulo flex items-center gap-2.5'>
    //       <div className="w-auto">
    //         <Image
    //           className="h-16 w-auto object-contain"
    //           src="/huaweilogo.svg"
    //           alt="logo da huawei"
    //           width={386}
    //           height={386}
    //           priority
    //         />
    //       </div>

    //       <h2 className="text-2xl sm:text-3xl uppercase font-bold">
    //         Parceria estratégica
    //       </h2>
    //     </div>
    //     <p className="sm:text-2xl">
    //       A REVO Energia é Parceira Oficial da HUAWEI, líder global de soluções de Tecnologia da Informação e Comunicação (TIC) e Energia Renovável. A divisão solar da Huawei opera em mais de 170 países em todo o mundo, com histórico comprovado de fornecer produtos e serviços de alta qualidade, incluindo inversores de string, inversores centrais, soluções PV inteligentes e sistemas de monitoramento e controle.
    //     </p>
    //   </div>
    // </div>

    <section className='block-about flex-col md:flex-row text-revogreen overflow-hidden relative'>
      <div className='container-small grid grid-cols-1 md:grid-cols-10 gap-x-10 gap-y-40 py-32'>
        <div className='md:col-span-4'>
          <h2 className='text-2xl sm:text-3xl pb-7 uppercase font-bold'>
            Quem Somos
          </h2>
          <p className='sm:text-2xl'>
            Nossa operação incorpora enorme experiência e conhecimento do setor por meio da nossa expertise e parceiros estratégicos que possuem vasto histórico de atuação no Setor de Energia Renovável.
          </p>
        </div>

        <div className='green-bg md:col-span-4 md:col-start-7 relative md:static'>
          <div className='titulo '>
            <div className="w-auto">
              <Image
                className="h-16 w-auto object-contain"
                src="/huaweilogo.svg"
                alt="logo da huawei"
                width={386}
                height={386}
                priority
              />
            </div>

            <h2 className="text-2xl sm:text-3xl uppercase font-bold">
              Parceria estratégica
            </h2>

          </div>
          <p className="sm:text-2xl">
            A REVO Energia é Parceira Oficial da HUAWEI, líder global de soluções de Tecnologia da Informação e Comunicação (TIC) e Energia Renovável. A divisão solar da Huawei opera em mais de 170 países em todo o mundo, com histórico comprovado de fornecer produtos e serviços de alta qualidade, incluindo inversores de string, inversores centrais, soluções PV inteligentes e sistemas de monitoramento e controle.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About