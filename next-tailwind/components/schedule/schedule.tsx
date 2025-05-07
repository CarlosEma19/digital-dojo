import Image from 'next/image'
import React from 'react'

const Schedule = () => {
  return (
    <div className="bg-revogreen text-white py-32">
      <div className='container-small text-center flex gap-7 flex-col justify-center items-center'>
        <div className=''>
          <h3 className='text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold'>
            <span className="text-revolime">AGENDE AGORA</span>
            <span className="text-white"> MESMO</span>
            <span className="block text-white">SUA VISITA!</span>
          </h3>
        </div>

        <div className="button flex h-12 w-60 text-revogreen bg-revolime rounded-4xl justify-center items-center p-3.5">
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