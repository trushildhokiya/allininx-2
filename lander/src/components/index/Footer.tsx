"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "./assets/images/brand/logo.png";
import SocialLinks from "./SocialLinks";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/20"
    >
      <div className="relative mx-auto container max-w-[1440px] py-6 px-8 flex justify-between items-center">
        <Link href={"/"} className="flex">
          <Image src={logoImg} alt="" className="w-[44px]" />
        </Link>

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <SocialLinks />
        </div>

        <p className="gradient-text text-lg font-medium">
          © 2025 Allinix.ai | All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
}
