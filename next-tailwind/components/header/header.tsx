"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { onScroll } from "@/utils/scroll";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState("");
  const doSomething = (scrollPosition: number) => {
    console.log(scrollPosition);
    if (scrollPosition > 50) {
      setScrollPosition("scrolled");
      console.log("scrolled");
    } else {
      setScrollPosition("");
      console.log("Scroll position is less than or equal to 50");
    }
  };
  useEffect(() => {
    return onScroll((scrollPosition) => doSomething(scrollPosition));
  }, []);

  return (
    <header
      className={`header ${scrollPosition} header-bg fixed top-0 left-0 w-full z-50`}
    >
      <div className="container flex justify-between  items-center ">
        <div className="img-logo relative w-[171px] h-[143px] flex items-center justify-center overflow-hidden">
          <Image
            className={`absolute top-0 left-0 transition-all duration-300 ${
              scrollPosition !== ""
                ? "opacity-0 scale-0"
                : "opacity-100 scale-100"
            }`}
            src="/revologo.svg"
            alt="Logo completa"
            width={171}
            height={143}
            priority
          />
          <Image
            className={`transition-all duration-300 spinner ease-in-out${
              scrollPosition !== ""
                ? "opacity-100 rotate-[360deg] scale-100"
                : "opacity-0 scale-0"
            }`}
            src="/smallRevo.svg"
            alt="Ícone logo"
            width={70}
            height={70}
            priority
          />
        </div>

        <div className="button flex h-12 w-60 text-revogreen bg-revolime rounded-4xl justify-center items-center p-3.5">
          <button className="mx-2">Faça sua simulação</button>
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
  );
};

export default Header;
