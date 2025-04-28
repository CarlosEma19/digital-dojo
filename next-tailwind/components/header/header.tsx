import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container flex justify-between items-center">
        <div className="img-logo">
          <Image
            className="revo"
            src="/revologo.svg"
            alt="revologo.svg logo"
            width={171}
            height={143}
            priority
          />
        </div>

        <div className="button flex h-12 w-60 text-[#0D3928] bg-lime-300 rounded-4xl justify-center p-3.5 m-1">
          <button>Faça sua simulação</button>
        </div>
      </div>
    </header>
  )
}

export default Header