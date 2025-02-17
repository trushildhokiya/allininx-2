"use client";
import Image from "next/image";
import logoImg from "./assets/images/brand/logo.png";
import img1 from "./assets/images/about-section-1.png";
import { motion } from "motion/react";
import { Ripple } from "./magicui/ripple";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="border-t border-white bg-gradient-to-b from-white/10 to-transparent pt-32">
      <div className="container mx-auto grid max-w-[1440px] grid-cols-[auto_600px] items-center gap-20 px-8">
        <div>
          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Image src={logoImg} alt="" className="mb-6 w-[44px]" />
          </motion.div>

          <motion.h2
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="gradient-text mb-5 font-serif text-4xl"
          >
            Specialized AI models working together to produce the most accurate responses to your
            queries
          </motion.h2>

          <motion.p
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="gradient-text mb-8 text-xl font-medium"
          >
            Our mission is to make AI accessible and empower individuals and businesses to harness
            the potential of autonomous agents. We strive to create a user-friendly platform that
            simplifies the process of building and deploying AI agents, enabling users to focus on
            their goals while Allinix handles the complexities.
          </motion.p>

          <Link href={"/chat"}>
            <motion.button
              initial={{ y: -35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="btn-primary rounded-xl px-6 py-2.5 font-serif text-2xl text-white"
            >
              Get Access to Allinix
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="relative flex h-[567px]"
        >
          <Image src={img1} alt="" className="relative z-10 w-full" />

          <div className="absolute left-[15px] top-[105px] h-[150px] w-[150px]">
            <Ripple rippleBgColor="rgba(255,105,0,0.25)" />
          </div>

          <div className="absolute right-[130px] top-[0px] h-[150px] w-[150px]">
            <Ripple rippleBgColor="rgba(157,81,239,0.25)" />
          </div>

          <div className="absolute bottom-[110px] left-[145px] h-[150px] w-[150px]">
            <Ripple rippleBgColor="rgba(255,52,67,0.25)" />
          </div>

          <div className="absolute bottom-[175px] right-[35px] h-[150px] w-[150px]">
            <Ripple rippleBgColor="rgba(1,215,230,0.25)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
