import { motion } from "framer-motion";
import { useContext } from "react";

import closeCrossTransparent from "../../../assets/closeCrossTransparent.svg";

import MyContext from "../../../utils/UseContext";

function MenuWindow({ contex, menuBackgroundColor }) {
  const setMenuWindow = useContext(MyContext);

  const closeWindow = () => {
    setMenuWindow({
      show: false,
      context: null,
      menuBackgroundColor: "transparent",
    });
  };

  const variants = {
    onRender: {
      x: "-100%",
    },
    animate: { x: 0, transition: { type: "easeIn", duration: 0.5 } },
    onDismount: {
      x: "-100%", // move to the left
      transition: { ease: "easeIn", duration: 0.5 },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.5, duration: 2 } },
    whileHover: { rotate: 90 },
  };

  return (
    <motion.div
      initial="onRender"
      animate="animate"
      exit="onDismount"
      variants={variants}
      className="w-screen h-screen z-50 sticky top-0"
      style={{ background: `${ menuBackgroundColor }` }}
    >
      <div className="w-full h-fit">
        <div className="w-full h-[100px] relative">
          {/* TODO: Make the button 100px by 100px */}
          <motion.button
            initial="initial"
            animate="animate"
            whileHover="whileHover" // Add 'whileHover' property
            variants={buttonVariants}
            className="text-2xl font-display font-thin absolute top-0 right-0 z-50" // Position at top right corner
            onClick={closeWindow}
          >
            <img src={closeCrossTransparent} alt="Close" />
          </motion.button>
        </div>
        {contex}
      </div>
    </motion.div>
  );
}

export default MenuWindow;
