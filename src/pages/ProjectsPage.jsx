import { useState } from "react";
import Projects from "../components/Menu/MenuContent/Projects/Projects";
import MyContext from "../utils/UseContext";

function ProjectsPage() {
  const [theme, setTheme] = useState({
    accentColor: "none",
    mainColor: "none",
    textColor: "none",
  });
  return (
    <MyContext.Provider value={"DOG"}>
      <div className="w-screen h-screen bg-[#9DCC6A] relative">
        {/* Back button */}
        <button
          className=" text-[64px] font-display font-extralight absolute top-0 right-0 hover:text-[#3B462F]"
          style={{
            color: `${theme.textColor == "none" ? "#ECF4E4" : theme.textColor}`,
          }}
        >
          &#8592;Back
        </button>

        {/* Selected Projects display */}
        <Projects />

        {/* Other projects button */}
        <button className="text-[64px] font-display font-extralight absolute bottom-0 right-0 hover:text-[#3B462F]"
        style={{
            color: `${theme.textColor == "none" ? "#ECF4E4" : theme.textColor}`,
          }}>
          Other&#8594;
        </button>
      </div>
    </MyContext.Provider>
  );
}

export default ProjectsPage;
