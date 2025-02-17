"use client";
import Link from "next/link";
import Image from "next/image";
import logoImg from "./assets/images/brand/logo.png";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="fixed left-0 top-0 z-[1000] w-full border-b border-white/20 bg-black"
    >
      <div className="container mx-auto flex h-[85px] max-w-[1440px] items-center justify-between px-8">
        <ul className="flex items-center gap-6">
          <li>
            <motion.div
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link href={"#features"} className="gradient-text text-lg font-medium">
                Features
              </Link>
            </motion.div>
          </li>

          <li>
            <motion.div
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link href={"#tokenomics"} className="gradient-text text-lg font-medium">
                Tokenomics
              </Link>
            </motion.div>
          </li>

          <li>
            <motion.div
              whileHover={{ scale: 1.1, opacity: 0.9 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link href={"#roadmap"} className="gradient-text text-lg font-medium">
                Roadmap
              </Link>
            </motion.div>
          </li>
        </ul>

        <Link
          href={"/"}
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.1, opacity: 0.9 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Image src={logoImg} alt="" className="w-[44px]" />
          </motion.div>
        </Link>

        <div className="flex items-center gap-5">
          <SocialLinks />

          {/* <Link href={"/chat"}>
          <button className="btn-primary py-2.5 px-6 rounded-xl font-serif text-lg text-white">
            Get Access to Allinix
          </button>
        </Link> */}
        </div>
      </div>
    </motion.nav>
  );
}
