import React from "react";

import BannerBadge from "./BannerBadge";
import Image from "next/image";

const AppTitle = () => {
  return (
    <div id="title" className="relative flex flex-col items-center">
      {/* <div>
        <Image src={"/allinix-logo.png"} width={128} height={128} className="-mb-8" alt="logo" />
      </div> */}
      <div className="flex flex-row items-start">
        <span
          className="text-[48px] my-10 font-semibold text-white"
          style={{
            textShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          What&apos;s on your mind?
        </span>
      </div>
      {/* <div className="mt-1 mb-3 text-center text-[22px] text-white">
        <div>
          <p className="text-white">
            Join in automating businesses with AI Agents
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AppTitle;
