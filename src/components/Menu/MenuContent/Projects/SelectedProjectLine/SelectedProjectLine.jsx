import { motion } from "framer-motion";
import { useContext, useState } from "react";
import MyContext from "../../../../../utils/UseContext";

function SelectedProjectLine({ data }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const themeWork = useContext(MyContext);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    themeWork.setTheme({
      accentColor: `${data.hoverAccentColor}`,
      mainColor: `${data.hoverMainColor}`,
      textColor: `${data.hoverTextColor}`,
    });
  };

  const handleMouseLeave = () => {
    themeWork.setTheme({
      accentColor: "none",
      mainColor: "none",
      textColor: "none",
    });
    setIsHovered(false);
  };

  const lineVarinats = {
    hidden: { width: "0%" },
    show: {
      width: "80%",
      transition: { ease: "linear", duration: 0.5, delay: 0.1 },
    },
    tap: {
      scale: 0.9,
    },
  };
  const textVariants = {
    hidden: { y: 100 },
    show: {
      y: 23,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.6,
      },
    },
  };

  function choseTextColor(){
    if (themeWork.theme.textColor == "none") {
      return "#193001";
    }
    if (isHovered) {
      return themeWork.theme.accentColor;
    } else {
      return themeWork.theme.textColor;
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      whileTap="tap"
      variants={lineVarinats}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseLeave}
      className="border-b-[4px] w-0 h-fit text-[48px] font-body font-black flex overflow-y-hidden overflow-x-visible p-4 hover:cursor-pointer"
      style={{
        borderColor: `${
          themeWork.theme.textColor == "none"
            ? "#ECF4E4"
            : themeWork.theme.textColor
        }`,
      }}
    >
      <motion.p
        initial="hidden"
        animate="show"
        variants={textVariants}
        className="translate-y-[10%] z-20"
        style={{
          color: `${choseTextColor()}`,
          paddingLeft: `${data.leftOffset}%`,
        }}
      >
        {data.displayName}
      </motion.p>

      {/* Image that follows the cursor */}
      {isHovered && (
        <div
          alt=""
          className="z-10"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: `${themeWork.theme.accentColor}`,
            pointerEvents: "none",
            top: `${cursorPos.y - 150 + data.imageYOffset}px`,
            left: `${cursorPos.x - 50 + data.imageXOffset}px`,
          }}
        />
      )}
    </motion.div>
  );
}

export default SelectedProjectLine;
