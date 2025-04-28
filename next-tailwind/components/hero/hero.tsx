import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero w-full h-screen bg-black relative">
      <Image
        className="hero-image w-full h-full object-cover opacity-50"
        src="/heroImg.png"
        alt="Imagem de fundo do hero"
        width={1440}
        height={868}
        priority
      />

      <div className="absolute inset-0 grid grid-cols-12 items-center">
        <div className="col-start-4 col-span-6">
          <h2 className="text-7xl font-bold text-white text-center uppercase mb-6">
            A REVO ENERGIA OFERECE O <span className="text-lime-300">MELHOR EM ENERGIA SOLAR</span>
          </h2>
 
          <p className="text-white text-center normal-case font-bold text-2xl">
            A Revo trabalha com os melhores equipamentos do mundo é parceira oficial da Huawei, líder em solar no mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero