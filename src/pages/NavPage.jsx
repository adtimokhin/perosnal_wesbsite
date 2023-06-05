import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavPage() {
  const cursorRadius = 200;
  const [mousePos, setMousePos] = useState({
    x: window.clientX,
    y: window.clientY,
  });
  const [buttonHovered, setButtonHovered] = useState(false);

  const addHoverOnButton = () => setButtonHovered(true);
  const removeHoverOnButton = () => setButtonHovered(false);

  const updateMousePosition = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="w-screen h-screen relative cursor-none select-none">
      {/* Hero page */}
      <div className="absolute top-0 w-screen h-screen z-0">
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
          <motion.div
            animate={{ x: `-${window.innerWidth}px` }}
            transition={{
              ease: "anticipate",
              duration: 0.8,
              delay: 0,
            }}
            className="w-[100px] h-full bg-[#7F3549] absolute right-0 z-50 text-[#EFFEDE] font-display font-light text-[36px]"
          >
            <p className="text-center text-[64px] cursor-default">&#8595;</p>
            {/* Button that takes to the nav page */}
            <Link
              to="/nav"
              className="absolute w-[125px] h-[100px] -right-3 top-1/2 -rotate-90 text-center -translate-y-1/2"
            >
              <motion.div whileHover={{ scale: 1.09 }}>
                <motion.p>Explore</motion.p>
                <p className="">&#8595;</p>
              </motion.div>
            </Link>

            <p className="text-center text-[64px] w-[100px] absolute bottom-0 cursor-default ">
              &#8593;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        transition={{
          ease: "anticipate",
          duration: 0.8,
          delay: 0,
        }}
        className="absolute top-0 w-screen h-screen z-50"
      >
        <div className="w-screen h-screen bg-[#F1F7EB] relative cursor-none select-none">
          {/* The lines that separate the text */}
          <div
            id="horizontal_line__sep"
            className="w-[551px] h-[17px] bg-[#E4E8DE] absolute top-1/2 left-1/2"
            style={{ borderRadius: "11px", transform: "translate(-50%, -50%)" }}
          />
          <div
            id="verical_line__sep"
            className="w-[17px] h-[312px] bg-[#E4E8DE] absolute top-1/2 left-1/2"
            style={{ borderRadius: "11px", transform: "translate(-50%, -50%)" }}
          />
          {/* container for the text-buttons */}
          <div className="w-full h-full flex">
            {/* Left half of the screen */}
            <div className="w-1/2 h-full pr-[20px]">
              {/* Top half of the div */}
              <div className="w-full h-1/2 pb-[20px] relative">
                <Link
                  id="projects__button"
                  className="font-display text-[96px] font-semibold text-[#193001] absolute right-0 bottom-0 z-20 hover:text-[#7F3549] cursor-none"
                  onMouseEnter={addHoverOnButton}
                  onMouseLeave={removeHoverOnButton}
                  to="/projects"
                >
                  PROJECTS
                </Link>
              </div>

              {/* Bottom half of the div */}
              <div className="w-full h-1/2 pt-[20px] relative">
                <Link
                  id="about__button"
                  className="font-display text-[96px] font-semibold text-[#193001] absolute right-0 top-0 z-20 hover:text-[#7F3549] cursor-none"
                  onMouseEnter={addHoverOnButton}
                  onMouseLeave={removeHoverOnButton}
                  to="/about"
                >
                  ABOUT ME
                </Link>
              </div>
            </div>

            {/* Right half the screen */}
            <div className="w-1/2 h-full pl-[20px]">
              {/* Top half of the div */}
              <div className="w-full h-1/2 pb-[20px] relative">
                <Link
                  id="experience__button"
                  className="font-display text-[96px] font-semibold text-[#193001] absolute left-0 bottom-0 z-20 hover:text-[#7F3549] cursor-none"
                  onMouseEnter={addHoverOnButton}
                  onMouseLeave={removeHoverOnButton}
                  to="/skills"
                  state={{ from: "/" }}
                >
                  MY SKILLS
                </Link>
              </div>

              {/* Bottom half of the div */}
              <div className="w-full h-1/2 pt-[20px] relative">
                <Link
                  id="contacts__button"
                  className="font-display text-[96px] font-semibold text-[#193001] absolute left-0 top-0 z-20 hover:text-[#7F3549] cursor-none"
                  onMouseEnter={addHoverOnButton}
                  onMouseLeave={removeHoverOnButton}
                  to="/contacts"
                >
                  CONTACTS
                </Link>
              </div>
            </div>
          </div>
          {/* Custom cursor */}
          {!buttonHovered && (
            <div
              id="nav_page_cursor"
              className="absolute z-10 transition-all duration-200 ease-out"
              style={{
                height: `${cursorRadius}px`,
                width: `${cursorRadius}px`,
                top: `${mousePos.y - cursorRadius / 2}px`,
                left: `${mousePos.x - cursorRadius / 2}px`,
              }}
            >
              <div className="relative h-full w-full">
                <svg
                  key={0}
                  className=""
                  style={{
                    position: "absolute",
                    top: { cursorRadius } / 2,
                    left: { cursorRadius } / 2,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <defs>
                    <filter
                      id={`noise-0`}
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="1.43"
                        numOctaves="2"
                        result="NOISE"
                      />
                      <feComposite
                        in="SourceGraphic"
                        in2="NOISE"
                        operator="in"
                        result="COMPOSITE"
                      />
                    </filter>
                    <radialGradient id={`gradient-0`}>
                      <stop offset="0%" stopColor={"#9DCC6A"} stopOpacity="1" />
                      <stop
                        offset="83%"
                        stopColor={"#9DCC6A"}
                        stopOpacity="0.94"
                      />
                      <stop
                        offset="100%"
                        stopColor={"#9DCC6A"}
                        stopOpacity="0"
                      />
                    </radialGradient>
                  </defs>
                  <circle
                    cx={cursorRadius / 2}
                    cy={cursorRadius / 2}
                    r={cursorRadius / 2}
                    fill={`url(#gradient-0)`}
                    filter={`url(#noise-0)`}
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default NavPage;
