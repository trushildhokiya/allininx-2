"use client";
import Image from "next/image";
import logoImg from "./assets/images/brand/logo.png";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="relative py-28">
      <div className="mx-auto container max-w-[1440px] px-8 flex flex-col items-center gap-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex"
        >
          <Image src={logoImg} alt="" className="mb-6 w-[76px]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="gradient-text font-serif text-7xl text-center"
        >
          AI Agents that scrape <br /> web data for you on the go
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="gradient-text text-xl font-medium text-center"
        >
          An innovative open-source platform that allows you to create <br />
          and manage autonomous AI agents directly in your browser.
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="btn-primary py-2.5 px-6 rounded-xl font-serif text-2xl text-white"
        >
          Get Access to Allinix
        </motion.button>
      </div>
    </section>
  );
}
