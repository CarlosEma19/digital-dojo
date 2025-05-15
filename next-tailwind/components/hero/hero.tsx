"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Hero = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  return (
    <section className="hero w-full h-screen bg-black relative">
      <Image
        className="hero-image w-full h-full object-cover opacity-50"
        src="/heroImg.png"
        alt="Imagem de fundo do hero"
        width={1440}
        height={868}
        priority
      />
      <motion.div
        className="absolute container-small inset-0 flex justify-center items-center text-justify lg:grid lg:grid-cols-12"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0, once: true }}
        variants={cardVariants}
      >
        <div className="w-4/6 lg:w-full md:col-start-2 md:col-span-9 lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6  ">
          <h2 className="font-bold text-white text-center uppercase mb-6 text-3xl sm:text-5xl md:text-6xl xl:text-7xl">
            A REVO ENERGIA OFERECE O{" "}
            <span className="text-revolime">MELHOR EM ENERGIA SOLAR</span>
          </h2>

          <p className="text-white text-center normal-case font-bold lg:text-2xl">
            A Revo trabalha com os melhores equipamentos do mundo é parceira
            oficial da Huawei, líder em solar no mundo.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
