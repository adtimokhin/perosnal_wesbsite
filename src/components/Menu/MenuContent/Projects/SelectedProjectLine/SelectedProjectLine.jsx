import { motion } from "framer-motion";
import { useState } from "react";

function SelectedProjectLine({ data }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const lineVarinats = {
    hidden: { width: "0%" },
    show: {
      width: "80%",
      transition: { ease: "linear", duration: 0.5, delay: 1.5 },
    },
    tap:{
        scale: 0.9
    }
  };
  const textVariants = {
    hidden: { y: 100 },
    show: {
      y: 25,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 2,
      },
    },
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
      className="border-b-[4px] w-0 h-fit border-black text-[50px] font-body font-bold flex overflow-y-hidden overflow-x-visible p-4 hover:cursor-pointer"
    >
      <motion.p
        initial="hidden"
        animate="show"
        
        variants={textVariants}
        className="translate-y-[10%] z-20"
        style={{ paddingLeft: `${data.leftOffset}%` }}
      >
        {data.displayName}
      </motion.p>

      {/* Image that follows the cursor */}
      {isHovered && (
        <img
          src={data.cursorImage}
          alt=""
          className="z-10"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
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
