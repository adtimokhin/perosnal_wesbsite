import { Link } from "react-router-dom";
import ContactButtons from "../components/ContactButtons/ContactButtons";
import { motion } from "framer-motion";

function Contacts() {
  // Animation constants
  const animationDuration = 1;
  const animationEasing = "anticipate";

  return (
    <div className="h-screen w-screen bg-[#F1F7EB] relative">
      {/* Back button */}
      <Link
        className="text-[64px] font-display font-extralight absolute top-0 right-0 text-[#F1F7EB] hover:text-[#3B462F] z-10"
        to="/"
      >
        &#8592;Back
      </Link>

      {/* Cool rectangles */}
      <motion.div
        initial={{ x: "-100%", y: "100%" }}
        animate={{ x: "0", y: "0px" }}
        transition={{
          ease: animationEasing,
          duration: animationDuration,
          delay: 0,
        }}
        className="bg-[#193001] w-[54%] absolute h-[60%] bottom-0"
      />
      <motion.div
        initial={{ x: "100%", y: "-100%" }}
        animate={{ x: "0px", y: "0px" }}
        transition={{
          ease: animationEasing,
          duration: animationDuration,
          delay: 0,
        }}
        className="bg-[#77A842] w-[53.45%] absolute h-[58%] top-0 right-0"
      />
      {/*  Contacts text */}

      <h2
        className="text-[#F1F7EB] text-[96px] font-display font-bold absolute top-1/2 left-1/2 hover:cursor-default"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        CONTACTS
      </h2>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.2,
          delay: animationDuration,
        }}
        className="w-[44%] absolute bottom-3 left-1/2"
        style={{ transform: "translate(-50%, 0)" }}
      >
        <ContactButtons />
      </motion.div>
    </div>
  );
}

export default Contacts;
