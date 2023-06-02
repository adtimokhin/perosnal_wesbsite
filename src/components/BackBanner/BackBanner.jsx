import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function BackBanner({ leftToRight }) {
  const [banners, setBanners] = useState([]);

  const cycleSpeed = 12;

  //   Setting the back onto the banner
  useEffect(() => {
    // Calculating how many banners we will need to fully cover the screen
    const windowWidth = window.innerWidth;
    const bannerWidth = 97;

    const bannerCount = Math.floor(windowWidth / bannerWidth) - 1;

    // Making the required number of banners
    const banners = [];
    for (let i = 0; i < bannerCount; i++) {
      banners.push(
        <span className="w-[97px] h-[40px]" key={`${i}_back_banner`}>
          Back
        </span>
      );
    }
    // Makging lines to fit on the screen

    // Line 1 - the one that starts off by being on the screen
    const lineOne = (
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: `${leftToRight ? "100" : "-100"}vw` }}
        transition={{ ease: "linear", duration: 12 }}
        className="w-full h-full absolute"
      >
        <div
          className="w-full h-full flex justify-between"
          children={banners}
        ></div>
      </motion.div>
    );

    // Line 2 - the first one to appear after not-full one
    const lineTwo = (
      <motion.div
        initial={{ x: `${leftToRight ? "-100%" : "100%"}` }}
        animate={{ x: `${leftToRight ? "100vw" : "-100vw"}` }}
        transition={{
          ease: "linear",
          duration: 24,
          delay: 0.2,
          repeatDelay: 0.4,
          repeat: Infinity,
        }}
        className="w-full h-full absolute"
      >
        <div
          className="w-full h-full flex justify-between"
          children={banners}
        ></div>
      </motion.div>
    );

    const lineThree = (
      <motion.div
        initial={{ x: `${leftToRight ? "-100%" : "100%"}` }}
        animate={{ x: `${leftToRight ? "100vw" : "-100vw"}` }}
        transition={{
          ease: "linear",
          duration: 24,
          delay: 12.4,
          repeatDelay: 0.4,
          repeat: Infinity,
        }}
        className="w-full h-full absolute"
      >
        <div
          className="w-full h-full flex justify-between"
          children={banners}
        ></div>
      </motion.div>
    );

    setBanners([lineOne, lineTwo, lineThree]);
  }, []);

  return (
    <div className="w-full h-[63px] bg-[#F1F7EB] relative overflow-hidden text-black text-[40px] font-display font-bold hover:text-[#7F3549]">
      {banners}
    </div>
  );
}

export default BackBanner;
