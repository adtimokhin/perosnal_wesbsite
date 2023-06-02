import { useState } from "react";
import Projects from "../components/Menu/MenuContent/Projects/Projects";
import MyContext from "../utils/UseContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectsPage() {
  const [theme, setTheme] = useState({
    accentColor: "none",
    mainColor: "none",
    textColor: "none",
  });
  // FIXME: I cannot find a way how to chnage the color of the nav buttons on hover.
  return (
    <MyContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="w-screen h-screen absolute top-0 left-0 bg-[#E4E8DE]">
        {/* The nav page */}
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
        {/* Main page content */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.6,
            delay: 0,
          }}
          className="w-screen h-screen absolute top-0 left-0 z-10"
        >
          <div
            className="w-screen h-screen relative"
            style={{
              backgroundColor: `${
                theme.mainColor == "none" ? "#9DCC6A" : theme.mainColor
              }`,
            }}
          >
            {/* Back button */}
            <Link
              className="text-[64px] font-display font-extralight absolute top-0 right-0"
              style={{
                color: `${
                  theme.textColor == "none" ? "#ECF4E4" : theme.textColor
                }`,
              }}
              to="/"
            >
              &#8592;Back
            </Link>

            {/* Selected Projects display */}
            <Projects />

            {/* Other projects button */}
            {/* <button
          className="text-[64px] font-display font-extralight absolute bottom-0 right-0 hover:text-[#3B462F]"
          style={{
            color: `${theme.textColor == "none" ? "#ECF4E4" : theme.textColor}`,
          }}
        >
          Other&#8594;
        </button> */}
          </div>
        </motion.div>
      </div>
    </MyContext.Provider>
  );
}

export default ProjectsPage;
