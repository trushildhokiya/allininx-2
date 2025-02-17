"use client";
import Image from "next/image";
import tool1Img from "./assets/images/tool-1.png";
import tool2Img from "./assets/images/tool-2.png";
import tool3Img from "./assets/images/tool-3.png";
import tool4Img from "./assets/images/tool-4.png";
import { motion } from "motion/react";

export default function ToolsSection() {
  return (
    <section id="features" className="pt-32">
      <div className="mx-auto container max-w-[1440px] px-8 flex flex-col items-center">
        <motion.h2
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-5 gradient-text font-serif text-6xl text-center"
        >
          Powered by Tools <br /> that work <span className="-mr-2.5">f</span>{" "}
          lawlessly
        </motion.h2>

        <motion.p
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 gradient-text text-xl font-medium text-center"
        >
          Unlock the potential of cutting-edge tools designed to <br /> simplify
          your workflow and elevate your productivity.
        </motion.p>

        <div className="w-full grid grid-cols-4 gap-5">
          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 h-full flex flex-col justify-between items-center">
              <div className="p-10 flex flex-col items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 9.5V6.8C20.5 5.11984 20.5 4.27976 20.173 3.63803C19.8854 3.07354 19.4265 2.6146 18.862 2.32698C18.2202 2 17.3802 2 15.7 2H9.3C7.61984 2 6.77976 2 6.13803 2.32698C5.57354 2.6146 5.1146 3.07354 4.82698 3.63803C4.5 4.27976 4.5 5.11984 4.5 6.8V17.2C4.5 18.8802 4.5 19.7202 4.82698 20.362C5.1146 20.9265 5.57354 21.3854 6.13803 21.673C6.77976 22 7.61984 22 9.3 22H14.5M14.5 11H8.5M10.5 15H8.5M16.5 7H8.5M17 15.0022C17.1762 14.5014 17.524 14.079 17.9817 13.81C18.4395 13.5409 18.9777 13.4426 19.501 13.5324C20.0243 13.6221 20.499 13.8942 20.8409 14.3004C21.1829 14.7066 21.37 15.2207 21.3692 15.7517C21.3692 17.2506 19.1209 18 19.1209 18M19.1499 21H19.1599"
                    stroke="#FF6900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="gradient-text mt-6 mb-1.5 font-serif text-3xl text-center">
                  Prodigy
                </h3>

                <p className="gradient-text font-medium text-center">
                  The mastermind of intelligent research. Prodigy dives deep
                  into vast databases, uncovering insights and information to
                  fuel your next big idea.
                </p>
              </div>

              <Image src={tool1Img} alt="" className="w-full max-w-[250px]" />
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-2xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(85.71% 55.89% at 50% 0%, #FF6900 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 h-full flex flex-col justify-between items-center">
              <div className="p-10 flex flex-col items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 21V7C8.5 6.07003 8.5 5.60504 8.60222 5.22354C8.87962 4.18827 9.68827 3.37962 10.7235 3.10222C11.105 3 11.57 3 12.5 3C13.43 3 13.895 3 14.2765 3.10222C15.3117 3.37962 16.1204 4.18827 16.3978 5.22354C16.5 5.60504 16.5 6.07003 16.5 7V21M5.7 21H19.3C20.4201 21 20.9802 21 21.408 20.782C21.7843 20.5903 22.0903 20.2843 22.282 19.908C22.5 19.4802 22.5 18.9201 22.5 17.8V10.2C22.5 9.07989 22.5 8.51984 22.282 8.09202C22.0903 7.71569 21.7843 7.40973 21.408 7.21799C20.9802 7 20.4201 7 19.3 7H5.7C4.57989 7 4.01984 7 3.59202 7.21799C3.21569 7.40973 2.90973 7.71569 2.71799 8.09202C2.5 8.51984 2.5 9.07989 2.5 10.2V17.8C2.5 18.9201 2.5 19.4802 2.71799 19.908C2.90973 20.2843 3.21569 20.5903 3.59202 20.782C4.01984 21 4.5799 21 5.7 21Z"
                    stroke="#01D7E6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="gradient-text mt-6 mb-1.5 font-serif text-3xl text-center">
                  Workman
                </h3>

                <p className="gradient-text font-medium text-center">
                  Your reliable workhorse for data processing and organization.
                  Workman excels at automating repetitive tasks and ensuring
                  your workflow remains smooth and efficient.
                </p>
              </div>

              <Image src={tool2Img} alt="" className="w-full max-w-[250px]" />
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-2xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(85.71% 55.89% at 50% 0%, #01D7E6 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 h-full flex flex-col justify-between items-center">
              <div className="p-10 flex flex-col items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2447 2.81298C19.2094 1.8165 20.8035 1.80361 21.7842 2.78436C22.7381 3.73823 22.7558 5.27921 21.8242 6.25481L19.0455 9.16457C18.8277 9.39265 18.7189 9.50668 18.6517 9.64024C18.5923 9.75847 18.557 9.88732 18.5477 10.0193C18.5373 10.1684 18.5727 10.3221 18.6437 10.6293L20.3716 18.1169C20.4443 18.4323 20.4807 18.59 20.469 18.7426C20.4586 18.8776 20.4209 19.0091 20.3581 19.1291C20.2872 19.2647 20.1728 19.3792 19.9439 19.608L19.5731 19.9788C18.967 20.585 18.6639 20.888 18.3537 20.9429C18.0829 20.9908 17.8042 20.925 17.5834 20.761C17.3305 20.5733 17.1949 20.1666 16.9239 19.3534L14.9141 13.3241L11.5688 16.6695C11.3691 16.8691 11.2693 16.969 11.2025 17.0866C11.1433 17.1907 11.1033 17.3047 11.0845 17.423C11.0632 17.5565 11.0788 17.6968 11.1099 17.9775L11.2936 19.6309C11.3248 19.9116 11.3404 20.0519 11.3191 20.1854C11.3003 20.3037 11.2603 20.4177 11.2011 20.5219C11.1343 20.6394 11.0345 20.7393 10.8348 20.939L10.6373 21.1365C10.1643 21.6095 9.92775 21.8461 9.6649 21.9146C9.43436 21.9746 9.18993 21.9504 8.97565 21.8463C8.73134 21.7276 8.54579 21.4493 8.17469 20.8926L6.60637 18.5401C6.54007 18.4407 6.50692 18.391 6.46843 18.3459C6.43424 18.3058 6.39695 18.2685 6.35688 18.2343C6.31178 18.1958 6.26206 18.1627 6.16261 18.0964L3.81012 16.5281C3.25348 16.157 2.97515 15.9714 2.85643 15.7271C2.7523 15.5128 2.7281 15.2684 2.78818 15.0378C2.85668 14.775 3.09321 14.5385 3.56627 14.0654L3.76378 13.8679C3.96346 13.6682 4.06331 13.5684 4.18089 13.5016C4.28505 13.4424 4.399 13.4024 4.5173 13.3836C4.65083 13.3623 4.79117 13.3779 5.07184 13.4091L6.72523 13.5928C7.0059 13.6239 7.14624 13.6395 7.27977 13.6182C7.39807 13.5994 7.51202 13.5594 7.61618 13.5002C7.73376 13.4334 7.8336 13.3336 8.03329 13.1339L11.3786 9.7886L5.34933 7.77884C4.5361 7.50776 4.12949 7.37222 3.9417 7.11932C3.77771 6.89848 3.71194 6.61984 3.75984 6.34898C3.81471 6.03879 4.11778 5.73572 4.72393 5.12957L5.0947 4.7588C5.32359 4.52991 5.43804 4.41546 5.57363 4.34457C5.69364 4.28183 5.82514 4.24411 5.96017 4.23371C6.11272 4.22197 6.27043 4.25836 6.58584 4.33115L14.0449 6.05249C14.3549 6.12401 14.5099 6.15978 14.6595 6.14914C14.804 6.13886 14.9445 6.09733 15.0713 6.02742C15.2027 5.95501 15.3133 5.84074 15.5346 5.6122L18.2447 2.81298Z"
                    stroke="#9D51EF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="gradient-text mt-6 mb-1.5 font-serif text-3xl text-center">
                  Explorer
                </h3>

                <p className="gradient-text font-medium text-center">
                  The ultimate guide for web scraping and discovery. Explorer
                  scours the web, extracting valuable data and presenting it in
                  a clean, structured format.
                </p>
              </div>

              <Image src={tool3Img} alt="" className="w-full max-w-[320px]" />
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-2xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(85.71% 55.89% at 50% 0%, #9D51EF 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ y: -35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 h-full flex flex-col justify-between items-center">
              <div className="p-10 flex flex-col items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 19V16H7.5C5.84315 16 4.5 17.3431 4.5 19M9.3 22H17.3C18.4201 22 18.9802 22 19.408 21.782C19.7843 21.5903 20.0903 21.2843 20.282 20.908C20.5 20.4802 20.5 19.9201 20.5 18.8V5.2C20.5 4.07989 20.5 3.51984 20.282 3.09202C20.0903 2.71569 19.7843 2.40973 19.408 2.21799C18.9802 2 18.4201 2 17.3 2H9.3C7.61984 2 6.77976 2 6.13803 2.32698C5.57354 2.6146 5.1146 3.07354 4.82698 3.63803C4.5 4.27976 4.5 5.11984 4.5 6.8V17.2C4.5 18.8802 4.5 19.7202 4.82698 20.362C5.1146 20.9265 5.57354 21.3854 6.13803 21.673C6.77976 22 7.61984 22 9.3 22Z"
                    stroke="#FF3443"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h3 className="gradient-text mt-6 mb-1.5 font-serif text-3xl text-center">
                  Scholarly
                </h3>

                <p className="gradient-text font-medium text-center">
                  Your academic assistant for in-depth analysis and synthesis.
                  Scholarly specializes in research, citations, and generating
                  high-quality, knowledge-based content.
                </p>
              </div>

              <Image src={tool4Img} alt="" className="w-full max-w-[250px]" />
            </div>

            <div
              className="absolute top-0 left-0 -scale-y-[1] w-full h-full rounded-2xl"
              style={{
                background: `linear-gradient(0deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(85.71% 55.89% at 50% 0%, #FF3443 0%, #000 100%)`,
                boxShadow: `0px 0px 15px 0px rgba(255, 255, 255, 0.50) inset`,
              }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
