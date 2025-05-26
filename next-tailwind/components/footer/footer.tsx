"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const Footer = () => {
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
    <div className="w-full bg-revogreen">
      <motion.footer
        className="container grid grid-cols-1 py-7"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.4, once: true }}
        variants={cardVariants}
      >
        <div className="cima border-b-2 border-b-white flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
          <div className="image col-start-1 py-2">
            <Image
              className="revo"
              src="/revologo.svg"
              alt="revologo.svg logo"
              width={171}
              height={143}
              priority
            />
          </div>
          <div className="tell text-revolime text-2xl">11 98682-0203</div>
          <div className="tell text-revolime text-2xl">11 98682-0203</div>
        </div>

        <div className="baixo text-white flex flex-col md:flex-row justify-between gap-6 pt-4">
          <div>
            <ul className="flex flex-col gap-1">
              <li>&copy; 2023 All right reserved.</li>
              <li className="flex items-center gap-3">
                Site by
                <Image
                  className="FutureBrand"
                  src="/icon/Logofb.svg"
                  alt="FutureBrand logo"
                  width={95}
                  height={12}
                  priority
                />
              </li>
            </ul>
          </div>

          <div className="social-icons flex flex-col md:flex-row items-start md:items-center gap-2">
            <p>Social media</p>
            <div className="flex gap-2">
              <Image
                className="linkedin"
                src="/icon/LI.svg"
                alt="Icone do LinkedIn"
                width={32}
                height={32}
                priority
              />
              <Image
                className="instagram"
                src="/icon/INS.svg"
                alt="Icone do Instagram"
                width={32}
                height={32}
                priority
              />
              <Image
                className="spotify"
                src="/icon/SP.svg"
                alt="Icone do Spotify"
                width={32}
                height={32}
                priority
              />
              <Image
                className="youtube"
                src="/icon/YT.svg"
                alt="Icone do Youtube"
                width={32}
                height={32}
                priority
              />
              <Image
                className="facebook"
                src="/icon/FB.svg"
                alt="Icone do Facebook"
                width={32}
                height={32}
                priority
              />
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;

export default Footer;
