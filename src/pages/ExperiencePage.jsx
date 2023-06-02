import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ExperiencePage() {
  // Amimation constants
  const firstRectDelay = 0;
  const firstRectAnimation = 0.4;

  const secondRectDelay = firstRectDelay + firstRectAnimation + 0.1;
  const secondRectAnimation = 0.4;

  const textDelay = secondRectDelay + secondRectAnimation;
  const textAnimation = 0.5;

  const backButtonDelay = textDelay + textAnimation + 0.1;
  const backButtonAnimation = 0.3;

  return (
    <div className="w-screen h-screen bg-[#F1F7EB] relative">
      {/* Navigation Panel - for the animation */}

      <div className="absolute w-full h-full top-0 left-0 z-0">
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
              <p
                id="projects__button"
                className="font-display text-[96px] font-semibold text-[#193001] absolute right-0 bottom-0 z-0 hover:text-[#7F3549] hover:cursor-none"
              >
                PROJECTS
              </p>
            </div>

            {/* Bottom half of the div */}
            <div className="w-full h-1/2 pt-[20px] relative">
              <p
                id="about__button"
                className="font-display text-[96px] font-semibold text-[#193001] absolute right-0 top-0 z-0 hover:text-[#7F3549] hover:cursor-none"
              >
                ABOUT ME
              </p>
            </div>
          </div>

          {/* Right half the screen */}
          <div className="w-1/2 h-full pl-[20px]">
            {/* Top half of the div */}
            <div className="w-full h-1/2 pb-[20px] relative">
              <p
                id="experience__button"
                className="font-display text-[96px] font-semibold text-[#193001] absolute left-0 bottom-0 z-0 hover:text-[#7F3549] hover:cursor-none"
              >
                MY SKILLS
              </p>
            </div>

            {/* Bottom half of the div */}
            <div className="w-full h-1/2 pt-[20px] relative">
              <p
                id="contacts__button"
                className="font-display text-[96px] font-semibold text-[#193001] absolute left-0 top-0 z-0 hover:text-[#7F3549] hover:cursor-none"
              >
                CONTACTS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: backButtonAnimation,
          delay: backButtonDelay,
        }}
        className="text-[64px] font-display font-extralight absolute top-0 right-0 text-[#193001] hover:text-[#6DD200]"
      >
        <Link to="/">&#8592;Back</Link>
      </motion.div>

      {/* Cool rectangles */}
      <motion.div
        initial={{ x: "-100%", y: "-50%" }}
        animate={{ x: "0" }}
        transition={{
          ease: "easeOut",
          duration: firstRectAnimation,
          delay: firstRectDelay,
        }}
        className="bg-[#77A842] absolute w-full h-[312px] left-0 top-1/2"
      />
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        transition={{
          ease: "easeOut",
          duration: secondRectAnimation,
          delay: secondRectDelay,
        }}
        className="bg-[#6DD200] absolute h-full w-[538px] left-[152px]"
      />

      {/* Buttons */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: textAnimation,
          delay: textDelay,
        }}
        className="text-[#193001] font-light font-display text-[182px] z-10 absolute bottom-[40px] hover:text-[#F1F7EB] hover:bg-[#7F3549]"
      >
        <Link to="/skills/languages">Languages</Link>
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{
          ease: "easeOut",
          duration: textAnimation,
          delay: textDelay,
        }}
        className="text-[#193001] font-light font-display text-[182px] z-10 absolute right-0 top-[100px] hover:text-[#F1F7EB] hover:bg-[#7F3549]"
      >
        <Link to="/skills/tools">Tools</Link>
      </motion.div>
    </div>
  );
}

export default ExperiencePage;
