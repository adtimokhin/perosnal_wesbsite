import { useEffect, useRef, useState } from "react";
import "./Parallax.css";
import Start from "../Start/Start";

function Parallax() {
  const windowRef = useRef();
  const [scrollAmount, setScrollAmount] = useState(100);
  const scrollAmountRef = useRef(scrollAmount);

  useEffect(() => {
    scrollAmountRef.current = scrollAmount;
  }, [scrollAmount]);

  useEffect(() => {
    const handleScroll = function (event) {
      if (scrollAmountRef.current <= 0) {
        windowRef.current.removeEventListener("wheel", handleScroll);
        return;
      }

      event.preventDefault();
      const scrollDelta = event.deltaY / 5;

      setScrollAmount((prev) => {
        if (scrollDelta > 0) {
          return Math.max(0, prev - scrollDelta);
        }
        return Math.min(100, prev - scrollDelta);
      });
    };

    const element = windowRef.current;
    element.addEventListener("wheel", handleScroll, { passive: false });

    // Clean up event listener
    return () => {
      element.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const secondChildStyle = {
    transform: `translateY(${scrollAmount}%)`,
  };

  return (
    <div
      ref={windowRef}
      className="w-screen h-screen relative overflow-hidden"
      id="parallax-window"
    >
      <div className="w-screen h-screen bg-main-300 absolute top-0">
       <Start/>
      </div>
      <div
        className="w-screen h-screen bg-main-400 absolute box2"
        style={secondChildStyle}
      >
        
      </div>
    </div>
  );
}

export default Parallax;
