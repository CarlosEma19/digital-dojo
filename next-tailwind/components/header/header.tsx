import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container flex justify-between  items-center sm:flex sm:flex-row ">
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

        <div className="button h-9 px-4 flex text-revogreen bg-revolime rounded-4xl justify-center sm:h-12">
          <button className='pr-1'>Faça sua simulação</button>
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
    </header>
  )
}

export default Header