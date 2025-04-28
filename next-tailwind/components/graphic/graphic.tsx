import Image from 'next/image'
import React from 'react'

const Graphic = () => {
  return (
    <div className='bg-[#20392F]'>
      <div className='w-full h-screen flex flex-col pt-32 pb-10'>
        <h2 className="text-5xl text-white font-bold text-center uppercase mb-16">Como Funciona</h2>

        <div className='content text-white grid grid-cols-12 auto-rows-auto gap-10'>
          <div className='col-start-5 col-span-4 row-start-1 row-span-2 flex justify-center items-center'>
            <div className='img'>
              <Image
                className="hero-image w-full h-full object-cover"
                src="/ilustra.svg"
                alt="grafico do funcionamento dos serviços da revo"
                width={386}
                height={386}
                priority
              />
            </div>
          </div>

          <div className='col-start-2 col-span-3 row-start-1'>
            <h3 className='text-[#C1DE36] text-3xl uppercase'>
              1.
              <br />
              Oferta
              <br />
              personalizada
            </h3>

            <p className=''>Nosso time entende a sua necessidade e monta um projeto personalizado com os melhores equipamentos.</p>
          </div>

          <div className='col-start-2 col-span-3 row-start-2'>
            <h3 className='text-[#C1DE36] text-3xl uppercase'>
              4.
              <br />
              Pós-Venda e
              <br />
              Garantia de
              <br />
              Qualidade
            </h3>

            <p>Temos uma equipe especializada na sua região disponível para qualquer suporte técnico que você precise</p>
          </div>


          <div className='col-start-9 col-span-3 row-start-1'>
            <h3 className='text-[#C1DE36] text-3xl uppercase'>
              2.
              <br />
              instalação
            </h3>

            <p>A Revo desenvolve e instala sua usina fotovoltaica com os melhores profissionais do setor.</p>
          </div>

          <div className='col-start-9 col-span-3 row-start-2'>
            <h3 className='text-[#C1DE36] text-3xl uppercase'>
              3. <br />
              economia
            </h3>

            <p>Você passa a gerar a sua própria energia de forma sustentável reduzindo o valor da conta.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Graphic