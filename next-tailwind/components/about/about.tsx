import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full h-screen bg-half py-44 text-revogreen'>
      <div className='container-small grid grid-cols-2'>
        <div className='container-small col-start-1'>
          <h2 className='text-2xl sm:text-3xl pb-7 uppercase font-bold'>
            Quem Somos
          </h2>
          <p className='sm:text-2xl'>
            Nossa operação incorpora enorme experiência e conhecimento do setor por meio da nossa expertise e parceiros estratégicos que possuem vasto histórico de atuação no Setor de Energia Renovável.
          </p>
        </div>

        <div className="container-small flex flex-col items-center col-start-2">
          <div className="topo flex gap-4 items-center pb-7">
            <div className="w-auto flex items-center">
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
    </div>
  )
}

export default About