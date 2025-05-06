import Image from 'next/image'
import React from 'react'

const Schedule = () => {
  return (
    <div className="bg-green text-white">
      <div className='container-small text-center flex flex-col justify-center items-center'>
        <div className='mt-15'>
          <h3 className='text-7xl font-bold'>
            <span className="text-lime-300">AGENDE AGORA</span>
            <span className="text-white"> MESMO</span>
            <span className="block text-white">SUA VISITA!</span>
          </h3>
        </div>

        <div className="button flex h-12 w-60 text-[#0D3928] bg-lime-300 rounded-4xl justify-center items-center p-3.5 m-15">
          <button className='mx-2'>Faça uma simulação</button>
          <Image
            className="arrow"
            src="/Icon.svg"
            alt="button arrow"
            width={10}
            height={10}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule