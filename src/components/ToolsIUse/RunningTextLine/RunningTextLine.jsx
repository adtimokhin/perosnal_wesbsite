import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RunningTextLine({ data }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const cycleSpeed = 18;

  const handleClick = () => {
    setIsAnimating(true);
  };

  const textVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: "100vw",
      transition: {
        ease: "linear",
        duration: cycleSpeed,
        repeat: Infinity,
      },
    },
  };

  const textVariantsLineTwo = {
    hidden: { x: "-100vw" },
    visible: {
      x: "100vw",
      transition: {
        ease: "linear",
        duration: cycleSpeed,
        delay: cycleSpeed / 2,
        repeat: Infinity,
      },
    },
  };
  
  return (
    <div className="w-full h-1/3 relative text-[7vh] font-body font-semibold overflow-hidden">
      {!isAnimating && (
        <button
          className="absolute top-0 left-0 text-[20vh]"
          onClick={handleClick}
        >
          {data.buttonText}
        </button>
      )}

      {isAnimating && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="w-full h-full absolute z-10"
          >
            <div className="w-full h-full flex items-center">
              {data.content.map((el) => (
                <p
                  className="inline-block pr-4 hover:text-red-500 hover:cursor-default"
                  key={el.id}
                >
                  {el}
                </p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariantsLineTwo}
            className="w-full h-full absolute"
          >
            <div className="w-full h-full flex items-center">
              {data.content.map((el) => (
                <p
                  className="inline-block pr-4 hover:text-red-500 hover:cursor-default"
                  key={el.id}
                >
                  {el}
                </p>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default RunningTextLine;
