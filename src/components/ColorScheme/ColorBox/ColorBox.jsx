import { useRef, useState } from "react";

function ColorBox({colorVal, textColor}) {
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState(colorVal);
  const color = colorVal.toUpperCase();
  const colorRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setMessage(color);
    setIsHovered(false);
  };

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setMessage("Copied!");
  };

  return (
    <div
      className="h-full hover:cursor-pointer flex flex-col justify-center items-center text-center font-thin font-body flex-1"
      style={{backgroundColor: colorVal}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={colorRef}
    >
      {isHovered && <p style={{color:textColor}}>{message}</p>}
    </div>
  );
}


export default ColorBox