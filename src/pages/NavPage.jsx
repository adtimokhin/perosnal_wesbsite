import { useEffect, useState } from "react";

function NavPage() {
  const cursorRadius = 200;
  const [mousePos, setMousePos] = useState({
    x: window.clientX,
    y: window.clientY,
  });
  const [buttonHovered, setButtonHovered] = useState(false);

  const addHoverOnButton = () => setButtonHovered(true);
  const removeHoverOnButton = () => setButtonHovered(false);

  const updateMousePosition = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F1F7EB] relative cursor-none">
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
            <button
              id="projects__button"
              className="font-display text-[96px] font-semibold text-[#193001] absolute right-0 bottom-0 z-20 hover:text-[#7F3549] hover:cursor-none"
              onMouseEnter={addHoverOnButton}
              onMouseLeave={removeHoverOnButton}
            >
              PROJECTS
            </button>
          </div>

          {/* Bottom half of the div */}
          <div className="w-full h-1/2 pt-[20px] relative">
            <button
              id="about__button"
              className="font-display text-[96px] font-semibold text-[#193001] absolute right-0 top-0 z-20 hover:text-[#7F3549] hover:cursor-none"
              onMouseEnter={addHoverOnButton}
              onMouseLeave={removeHoverOnButton}
            >
              ABOUT ME
            </button>
          </div>
        </div>

        {/* Right half the screen */}
        <div className="w-1/2 h-full pl-[20px]">
          {/* Top half of the div */}
          <div className="w-full h-1/2 pb-[20px] relative">
            <button
              id="experience__button"
              className="font-display text-[96px] font-semibold text-[#193001] absolute left-0 bottom-0 z-20 hover:text-[#7F3549] hover:cursor-none"
              onMouseEnter={addHoverOnButton}
              onMouseLeave={removeHoverOnButton}
            >
              MY SKILLS
            </button>
          </div>

          {/* Bottom half of the div */}
          <div className="w-full h-1/2 pt-[20px] relative">
            <button
              id="contacts__button"
              className="font-display text-[96px] font-semibold text-[#193001] absolute left-0 top-0 z-20 hover:text-[#7F3549] hover:cursor-none"
              onMouseEnter={addHoverOnButton}
              onMouseLeave={removeHoverOnButton}
            >
              CONTACTS
            </button>
          </div>
        </div>
      </div>

      {/* Custom cursor */}
      {!buttonHovered && (
        <div
          id="nav_page_cursor"
          className="absolute z-10 transition-all duration-200 ease-out"
          style={{
            height: `${cursorRadius}px`,
            width: `${cursorRadius}px`,
            top: `${mousePos.y - cursorRadius / 2}px`,
            left: `${mousePos.x - cursorRadius / 2}px`,
          }}
        >
          <div className="relative h-full w-full">
            <svg
              key={0}
              className=""
              style={{
                position: "absolute",
                top: { cursorRadius } / 2,
                left: { cursorRadius } / 2,
                width: "100%",
                height: "100%",
              }}
            >
              <defs>
                <filter id={`noise-0`} x="0" y="0" width="100%" height="100%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="1.43"
                    numOctaves="2"
                    result="NOISE"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="NOISE"
                    operator="in"
                    result="COMPOSITE"
                  />
                </filter>
                <radialGradient id={`gradient-0`}>
                  <stop offset="0%" stopColor={"#9DCC6A"} stopOpacity="1" />
                  <stop offset="83%" stopColor={"#9DCC6A"} stopOpacity="0.94" />
                  <stop offset="100%" stopColor={"#9DCC6A"} stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle
                cx={cursorRadius / 2}
                cy={cursorRadius / 2}
                r={cursorRadius / 2}
                fill={`url(#gradient-0)`}
                filter={`url(#noise-0)`}
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavPage;
