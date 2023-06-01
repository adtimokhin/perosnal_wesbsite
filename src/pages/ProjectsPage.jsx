import { useState } from "react";
import Projects from "../components/Menu/MenuContent/Projects/Projects";
import MyContext from "../utils/UseContext";

function ProjectsPage() {
  const [theme, setTheme] = useState({
    accentColor: "none",
    mainColor: "none",
    textColor: "none",
  });
  // FIXME: I cannot find a way how to chnage the color of the nav buttons on hover.
  return (
    <MyContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div
        className="w-screen h-screen relative"
        style={{
          backgroundColor: `${
            theme.mainColor == "none" ? "#9DCC6A" : theme.mainColor
          }`,
        }}
      >
        {/* Back button */}
        <button
          className="text-[64px] font-display font-extralight absolute top-0 right-0"
          style={{
            color: `${theme.textColor == "none" ? "#ECF4E4" : theme.textColor}`,
          }}
        >
          &#8592;Back
        </button>

        {/* Selected Projects display */}
        <Projects />

        {/* Other projects button */}
        <button
          className="text-[64px] font-display font-extralight absolute bottom-0 right-0 hover:text-[#3B462F]"
          style={{
            color: `${theme.textColor == "none" ? "#ECF4E4" : theme.textColor}`,
          }}
        >
          Other&#8594;
        </button>
      </div>
    </MyContext.Provider>
  );
}

export default ProjectsPage;
