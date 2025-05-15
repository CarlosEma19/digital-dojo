"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Schedule = () => {
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
        duration: 3,
      },
    },
  };
  return (
    <div className="bg-revogreen text-white py-24">
      <motion.div
        className="container-small text-center flex flex-col justify-center items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.4, once: true }}
        variants={cardVariants}
      >
        <div className="">
          <h3 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold my-20">
            <span className="text-revolime">AGENDE AGORA</span>
            <span className="text-white"> MESMO</span>
            <span className="block text-white">SUA VISITA!</span>
          </h3>
        </div>

        <div className="button flex h-12 w-60 text-revogreen bg-revolime rounded-4xl justify-center items-center p-3.5">
          <button className="mx-2">Faça uma simulação</button>
          <Image
            className="arrow"
            src="/Icon.svg"
            alt="button arrow"
            width={10}
            height={10}
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Schedule;
