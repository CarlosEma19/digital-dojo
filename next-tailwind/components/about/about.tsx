"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const About = () => {
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
    <section className="block-about flex-col md:flex-row text-revogreen overflow-hidden relative">
      <div className="container-small grid grid-cols-1 md:grid-cols-10 gap-x-10 gap-y-40 py-32">
        {/* Conteúdo "Quem Somos" animado */}
        <motion.div
          className="md:col-span-4"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.1, once: true }}
          variants={cardVariants}
        >
          <h2 className="text-2xl sm:text-3xl pb-7 uppercase font-bold">
            Quem Somos
          </h2>
          <p className="sm:text-2xl">
            Nossa operação incorpora enorme experiência e conhecimento do setor
            por meio da nossa expertise e parceiros estratégicos que possuem
            vasto histórico de atuação no Setor de Energia Renovável.
          </p>
        </motion.div>

        {/* Fundo fixo + conteúdo animado */}
        <div className="green-bg md:col-span-4 md:col-start-7 relative md:static">
          <motion.div
            className="titulo"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.1, once: true }}
            variants={cardVariants}
          >
            <div className="w-auto">
              <Image
                className="h-16 w-auto object-contain"
                src="/huaweilogo.svg"
                alt="logo da huawei"
                width={386}
                height={386}
                priority
              />
            </div>

            <h2 className="text-2xl sm:text-3xl uppercase font-bold">
              Parceria estratégica
            </h2>
          </motion.div>

          <motion.p
            className="sm:text-2xl"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.1, once: true }}
            variants={cardVariants}
          >
            A REVO Energia é Parceira Oficial da HUAWEI, líder global de
            soluções de Tecnologia da Informação e Comunicação (TIC) e Energia
            Renovável. A divisão solar da Huawei opera em mais de 170 países em
            todo o mundo, com histórico comprovado de fornecer produtos e
            serviços de alta qualidade, incluindo inversores de string,
            inversores centrais, soluções PV inteligentes e sistemas de
            monitoramento e controle.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
