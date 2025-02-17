"use client";
import Image from "next/image";
import img1 from "./assets/images/roadmap-section-1.png";
import { motion } from "motion/react";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="pt-32">
      <div className="mx-auto container max-w-[1440px] px-8 flex flex-col items-center">
        <motion.h2
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-5 gradient-text font-serif text-6xl text-center"
        >
          Roadmap for the year
        </motion.h2>

        <motion.p
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 gradient-text text-xl font-medium text-center"
        >
          Driving progress and innovation every step of the way.
        </motion.p>
      </div>

      <div
        className="py-24"
        style={{
          backgroundImage: `url("/images/roadmap-section-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto container max-w-[1440px] px-8 flex">
          <Image src={img1} alt="" className="w-full" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-52 left-12 space-y-2"
          >
            <p className="btn-primary w-fit py-2.5 px-4 rounded-lg font-serif text-xl text-white">
              Q1 - 2025
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#FF3443"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Launch core features and tools.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#FF3443"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Establish strategic partnerships.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#FF3443"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Initiate community engagement programs.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-[135px] left-[432px] space-y-2"
          >
            <p className="btn-primary w-fit py-2.5 px-4 rounded-lg font-serif text-xl text-white">
              Q2 - 2025
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#9D51EF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>
                Expand platform capabilities with new functionalities.{" "}
              </span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#9D51EF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Integrate user feedback for system improvements.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#9D51EF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Host webinars and events to grow the user base.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="absolute top-[35px] right-[380px] space-y-2"
          >
            <p className="btn-primary w-fit py-2.5 px-4 rounded-lg font-serif text-xl text-white">
              Q3 - 2025
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#FF6900"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Optimize performance for scalability.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#FF6900"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Roll out advanced analytics and reporting features.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#FF6900"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Introduce new collaboration tools.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="absolute top-[120px] right-[32px] flex flex-col items-end gap-y-2"
          >
            <p className="btn-primary w-fit py-2.5 px-4 rounded-lg font-serif text-xl text-white">
              Q4 - 2025
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#01D7E6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Launch innovative solutions to meet emerging needs.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#01D7E6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Strengthen community and ecosystem partnerships.</span>
            </p>

            <p className="btn-primary max-w-[260px] py-2.5 px-4 rounded-lg flex items-center gap-4 font-serif text-lg leading-5 text-[#D9D9D9]">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] min-w-[18px]"
              >
                <path
                  d="M5.625 9.31104L7.875 11.561L12.375 7.06104M16.5 9.31104C16.5 13.4531 13.1421 16.811 9 16.811C4.85786 16.811 1.5 13.4531 1.5 9.31104C1.5 5.1689 4.85786 1.81104 9 1.81104C13.1421 1.81104 16.5 5.1689 16.5 9.31104Z"
                  stroke="#01D7E6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Plan and outline goals for the upcoming year.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
