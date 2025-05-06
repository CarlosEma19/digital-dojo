import Image from 'next/image'
import React from 'react'

const Graphic = () => {
  return (
    <div className="bg-revogreen">
  <div className="w-full min-h-screen flex flex-col pt-32 pb-10">
    <h2 className="text-5xl text-white font-bold text-center uppercase mb-16">Como Funciona</h2>

    <div className="container-small text-white grid grid-cols-1 md:grid-cols-10 auto-rows-auto gap-10">

      <div className="order-1 md:order-none md:col-start-4 md:col-span-4 md:row-start-1 md:row-span-2 flex justify-center items-center">
        <div className="img w-full max-w-sm md:max-w-full">
          <Image
            className="hero-image w-full h-auto object-contain"
            src="/ilustra.svg"
            alt="grafico do funcionamento dos serviços da revo"
            width={386}
            height={386}
            priority
          />
        </div>
      </div>

      <div className="order-2 md:order-none md:col-start-1 md:col-span-3 md:row-start-1">
        <h3 className="text-revolime text-3xl uppercase flex flex-col">
          <span>1.</span>
          <span>Oferta</span>
          <span>personalizada</span>
        </h3>
        <p>Nosso time entende a sua necessidade e monta um projeto personalizado com os melhores equipamentos.</p>
      </div>

      <div className="order-3 md:order-none md:col-start-8 md:col-span-3 md:row-start-1">
        <h3 className="text-revolime text-3xl uppercase flex flex-col">
          <span>2.</span>
          <span>instalação</span>
        </h3>
        <p>A Revo desenvolve e instala sua usina fotovoltaica com os melhores profissionais do setor.</p>
      </div>

      <div className="order-4 md:order-none md:col-start-8 md:col-span-3 md:row-start-2">
        <h3 className="text-revolime text-3xl uppercase flex flex-col">
          <span>3.</span>
          <span>economia</span>
        </h3>
        <p>Você passa a gerar a sua própria energia de forma sustentável reduzindo o valor da conta.</p>
      </div>

      <div className="order-5 md:order-none md:col-start-1 md:col-span-3 md:row-start-2">
        <h3 className="text-revolime text-3xl uppercase flex flex-col">
          <span>4.</span>
          <span>Pós-Venda e</span>
          <span>Garantia de</span>
          <span>Qualidade</span>
        </h3>
        <p>Temos uma equipe especializada na sua região disponível para qualquer suporte técnico que você precise</p>
      </div>

    </div>
  </div>
</div>

  )
}

export default Graphic