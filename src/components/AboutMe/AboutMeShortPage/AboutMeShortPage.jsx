import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function AboutMeShortPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const image = new Image();
      image.src = "src/assets/my_photo.jpg";
      image.onload = () => setImageLoaded(true);
    }
  }, [inView]);

  const textVariants = {
    hover: { x: "10%", transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  };

  return (
    <div className="w-screen h-screen bg-lime-600 relative">
      <div className="absolute top-0 right-0 bg-black w-[60%] h-[80px] z-20">
        <h1 className="text-white text-[65px] pl-5 font-display font-normal">
          About Me
        </h1>
      </div>
      <div className="w-full h-full flex">
        {/* Image div*/}
        <div className="w-[60%] h-full bg-red-500 relative" ref={ref}>
            {/* TODO: ADD A LOADING SPINNER */}
          {!imageLoaded && <p>Loading</p>}
          {inView && (
            <img
              src="src/assets/my_photo.jpg"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              alt="Your high quality image"
            />
          )}
        </div>

        {/* Text div*/}
        <div className="w-[40%] h-full bg-blue-500 relative">
          {/* Learn more button */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute top-0 right-0 h-full w-[40px] rotate-180"
          >
            <motion.p
              whileHover="hover"
              whileTap="tap"
              variants={textVariants}
              className="text-[24px] text-white font-body font-light text-center w-full h-full hover:cursor-pointer"
              style={{ textOrientation: "mixed", writingMode: "vertical-lr" }}
            >
              Learn more
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeShortPage;
