import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HeroPage() {
  return (
    <div className="w-screen h-screen bg-[#F1F7EB] relative overflow-hidden selection:text-[#7F3549]">
      {/* Block with ADTIMOKHIN on the screen */}
      <span className="text-[192px] font-display font-black text-[#132500] absolute top-1/2 -translate-y-1/3 z-50 cursor-default">
        <h1>AD</h1>
        <motion.h1 initial={{ y: "-30%" }}>TIMOKHIN</motion.h1>
      </span>

      {/* Full-stack developer text */}
      <h2 className="text-[#132103] font-display font-extrabold text-[48px] absolute bottom-3 left-1/2 -translate-x-1/2 z-50 cursor-default">
        Full-Stack Developer
      </h2>

      {/* Lines on the background */}

      <motion.div
        initial={{ rotate: 64 }}
        className="bg-[#7F3549] w-[63px] h-[980px] absolute -top-[330px] left-[100px] z-0"
      />

      <motion.div
        initial={{ rotate: 100, y: `-${window.innerHeight - 40}px` }}
        className="bg-[#609625] w-[83px] h-[1800px] absolute left-1/2 z-40"
      />

      <div
        className="absolute w-[184px] h-[2173px] left-[630px] -top-[320px] z-0"
        style={{
          background: "rgba(82, 255, 203, 0.35)",
          transform: "rotate(45.12deg)",
        }}
      />

      <div
        className="bg-[#85FF00] w-[150px] h-[1500px] absolute left-[980px] -top-[320px]"
        style={{
          transform: "rotate(150.2deg)",
        }}
      />

      {/* Side block that will take you to the nav page */}
      <div className="w-[100px] h-full bg-[#7F3549] absolute right-0 z-50 text-[#EFFEDE] font-display font-light text-[36px]">
        <p className="text-center text-[64px] cursor-default">&#8595;</p>
        {/* Button that takes to the nav page */}
        <Link
          to="/nav"
          className="absolute w-[125px] h-[100px] -right-3 top-1/2 -rotate-90 text-center -translate-y-1/2"
        >
          <motion.div whileHover={{ scale: 1.09 }}>
            <motion.p >Explore</motion.p>
            <p className="">&#8595;</p>
          </motion.div>
        </Link>

        <p className="text-center text-[64px] w-[100px] absolute bottom-0 cursor-default ">
          &#8593;
        </p>
      </div>
    </div>
  );
}

export default HeroPage;
