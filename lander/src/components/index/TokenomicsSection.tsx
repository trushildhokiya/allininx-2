"use client";
import { motion } from "motion/react";
import Image from "next/image";
import img1 from "./assets/images/tokenomics-section-1.png";
import img2 from "./assets/images/tokenomics-section-2.png";
import img3 from "./assets/images/tokenomics-section-3.png";

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="pt-32">
      <div className="mx-auto container max-w-[1440px] px-8 flex flex-col items-center">
        <motion.h2
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-5 gradient-text font-serif text-6xl text-center"
        >
          We serve the community <br /> First and Second
        </motion.h2>

        <motion.p
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-28 gradient-text text-xl font-medium text-center"
        >
          Dedicated to delivering tools and solutions that make a meaningful
          impact.
        </motion.p>

        <div className="mb-5 w-full grid grid-cols-3 gap-5">
          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Image
              src={img1}
              alt=""
              className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none duration-300"
            />

            <div className="relative z-10 p-8 flex justify-between items-center">
              <h3 className="font-serif text-3xl text-white">
                2<span className="font-sans">%</span>
              </h3>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.0854 33C39.4591 33 40.5518 32.1356 41.5328 30.9267C43.5412 28.4522 40.2438 26.4748 38.9861 25.5064C37.7078 24.5219 36.2803 23.9642 34.8331 23.8333M32.9998 20.1667C35.531 20.1667 37.5831 18.1146 37.5831 15.5833C37.5831 13.052 35.531 11 32.9998 11"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                <path
                  d="M5.91418 33C4.54045 33 3.44782 32.1356 2.46675 30.9267C0.458419 28.4522 3.75582 26.4748 5.01343 25.5064C6.29187 24.5219 7.71932 23.9642 9.16659 23.8333M10.0833 20.1667C7.55196 20.1667 5.49992 18.1146 5.49992 15.5833C5.49992 13.052 7.55196 11 10.0833 11"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                <path
                  d="M14.82 27.7039C12.9467 28.8622 8.03514 31.2274 11.0266 34.187C12.4879 35.6327 14.1155 36.6667 16.1617 36.6667H27.8378C29.884 36.6667 31.5114 35.6327 32.9728 34.187C35.9642 31.2274 31.0527 28.8622 29.1794 27.7039C24.7866 24.9877 19.2127 24.9877 14.82 27.7039Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.4164 13.7497C28.4164 17.2935 25.5435 20.1663 21.9997 20.1663C18.4559 20.1663 15.583 17.2935 15.583 13.7497C15.583 10.2058 18.4559 7.33301 21.9997 7.33301C25.5435 7.33301 28.4164 10.2058 28.4164 13.7497Z"
                  stroke="white"
                  strokeWidth="2.75"
                />
              </svg>
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(153.35% 100% at 50% 0%, #FF6900 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Image
              src={img2}
              alt=""
              className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none duration-300"
            />

            <div className="relative z-10 p-8 flex justify-between items-center">
              <h3 className="font-serif text-3xl text-white">
                2<span className="font-sans">%</span>
              </h3>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99375 27.6538C7.26527 24.9819 7.90104 23.6457 9.00887 22.8733C9.09835 22.811 9.18971 22.7516 9.28282 22.6955C10.4358 21.9998 11.8461 21.9998 14.6666 21.9998C17.4872 21.9998 18.8974 21.9998 20.0504 22.6955C20.1435 22.7516 20.2348 22.811 20.3243 22.8733C21.4322 23.6457 22.068 24.9819 23.3396 27.6538C25.2354 31.638 26.1834 33.6301 25.3793 35.0943C25.3491 35.1492 25.3174 35.2031 25.2842 35.2559C24.3974 36.6664 22.2957 36.6664 18.0925 36.6664H11.2407C7.03748 36.6664 4.93586 36.6664 4.04904 35.2559C4.0158 35.2031 3.9841 35.1492 3.95398 35.0943C3.14988 33.6301 4.09784 31.638 5.99375 27.6538Z"
                  stroke="white"
                  strokeWidth="2.75"
                />
                <path
                  d="M26.6692 22.0377C27.3957 21.9998 28.2622 21.9998 29.3312 21.9998C32.1518 21.9998 33.5622 21.9998 34.7151 22.6955C34.8081 22.7516 34.8996 22.811 34.989 22.8733C36.0969 23.6457 36.7325 24.9819 38.0041 27.6538C39.9 31.638 40.848 33.6301 40.0439 35.0943C40.0138 35.1492 39.9821 35.2031 39.9489 35.2559C39.062 36.6664 36.9604 36.6664 32.7571 36.6664H30.6882"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                <path
                  d="M32.2801 16.4997C31.8833 15.5308 31.3361 14.3808 30.6728 12.9871C29.4014 10.3151 28.7656 8.97903 27.6577 8.20659C27.5682 8.1442 27.4769 8.08488 27.3838 8.02868C26.2308 7.33301 24.8206 7.33301 22 7.33301C19.1794 7.33301 17.7692 7.33301 16.6162 8.02868C16.5231 8.08488 16.4317 8.1442 16.3422 8.20659C15.2344 8.97903 14.5986 10.3151 13.3271 12.9871C12.6639 14.3808 12.1166 15.5308 11.7198 16.4997"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(153.35% 100% at 50% 0%, #9D51EF 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <Image
              src={img3}
              alt=""
              className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none duration-300"
            />

            <div className="relative z-10 p-8 flex justify-between items-center">
              <h3 className="font-serif text-3xl text-white">
                1<span className="font-sans">%</span>
              </h3>

              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3649 5.33721L15.1681 11.1919C14.2294 11.6425 13.2265 11.7554 12.204 11.5264C11.5349 11.3765 11.2003 11.3015 10.9309 11.2708C7.58529 10.8887 5.5 13.5366 5.5 16.5815V18.2525C5.5 21.2974 7.58529 23.9453 10.9309 23.5632C11.2003 23.5324 11.5349 23.4575 12.204 23.3077C13.2265 23.0785 14.2294 23.1914 15.1681 23.6421L27.3649 29.4968C30.1646 30.8408 31.5645 31.5128 33.1254 30.989C34.6861 30.4652 35.2218 29.3412 36.2934 27.0933C39.2355 20.9209 39.2355 13.9132 36.2934 7.74058C35.2218 5.49273 34.6861 4.36881 33.1254 3.84501C31.5645 3.32122 30.1646 3.99321 27.3649 5.33721Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0064 38.0797L18.2723 40.333C12.1094 35.4452 12.8623 33.1143 12.8623 23.833H14.941C15.7845 29.078 17.7743 31.5623 20.5199 33.3608C22.2111 34.4685 22.5598 36.7993 21.0064 38.0797Z"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.75 22.9167V11.9167"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(153.35% 100% at 50% 0%, #01D7E6 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className="w-full min-h-[650px] p-12 rounded-xl flex flex-col justify-end gap-3"
          style={{
            backgroundImage: `url("/images/tokenomics-section-bg-1.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
          }}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 18.8197V11H35.75V18.8197C35.75 24.6402 35.75 27.5504 33.9601 29.3585C32.1702 31.1667 29.2893 31.1667 23.5277 31.1667H20.4723C14.7106 31.1667 11.8298 31.1667 10.0399 29.3585C8.25 27.5504 8.25 24.6402 8.25 18.8197Z"
              stroke="white"
              strokeWidth="3.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.25 11.0001L9.57211 8.17957C10.5975 5.99211 11.1102 4.89838 12.1494 4.28256C13.1885 3.66675 14.5215 3.66675 17.1875 3.66675H26.8125C29.4785 3.66675 30.8114 3.66675 31.8507 4.28256C32.8898 4.89838 33.4026 5.99211 34.4278 8.17957L35.75 11.0001"
              stroke="white"
              strokeWidth="3.3"
              strokeLinecap="round"
            />
            <path
              d="M19.25 16.5H24.75"
              stroke="white"
              strokeWidth="3.3"
              strokeLinecap="round"
            />
            <path
              d="M7.33337 40.3333H22M22 40.3333H36.6667M22 40.3333V35.75"
              stroke="white"
              strokeWidth="3.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h3 className="font-serif text-3xl text-[#D9D9D9]">
            95<span className="font-sans">%</span> Circulating Supply
          </h3>

          <p className="max-w-[560px] font-medium text-white/75">
            Ensuring maximum availability and transparency for the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
