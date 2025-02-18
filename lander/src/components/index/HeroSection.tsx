"use client";
import { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Vortex } from "./ui/vortex";
import axios from "axios";

const COLORS_TOP = ["rgba(255,255,255,0.25)"];

export default function HeroSection() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [ca, setCa] = useState<string>(
    "4H5RiKf7N5Ji7jbozjccG8SqTq3zQbnGXAtdyNL5MugC"
  );

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    axios
      .get("https://catools.dev3vds1.link/get/allinix")
      .then((res) => {
        setCa(res.data[0].address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative mt-[85px] overflow-hidden py-44"
    >
      <Vortex>
        <div className="container relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-8">
          <motion.button
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => {
              navigator.clipboard.writeText(ca);
              setIsCopied(true);
            }}
            className="btn-primary flex items-center gap-2 rounded-xl px-6 py-2.5 font-serif text-xl text-white"
          >
            CA : {isCopied ? "Copied!" : ca}
          </motion.button>

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center font-serif text-7xl text-white"
          >
            AI Agents that scrape <br /> web data for you on the go
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-xl font-medium text-white"
          >
            An innovative open-source platform that allows you to create <br />{" "}
            and manage autonomous AI agents directly in your browser.
          </motion.p>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="btn-primary rounded-xl px-6 py-2.5 font-serif text-2xl text-white"
          >
            <a href="https://dashboard.allinix.ai">Get Access to Allinix</a>
          </motion.button>
        </div>
      </Vortex>
    </motion.section>
  );
}
