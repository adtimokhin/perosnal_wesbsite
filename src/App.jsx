import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ColorScheme from "./components/ColorScheme/ColorScheme";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import MenuWindow from "./components/Menu/MenuWindow/MenuWindow";
import Navigation from "./components/Navigation/Navigation";
import Parallax from "./components/Parallax/Parallax";
import SeparationCubes from "./components/SeparationCubes/SeparationCubes";
import Start from "./components/Start/Start";

import MyContext from "./utils/UseContext";
import AboutMeShortPage from "./components/AboutMe/AboutMeShortPage/AboutMeShortPage";
import Projects from "./components/Menu/MenuContent/Projects/Projects";
import ToolsIUsePage from "./components/ToolsIUse/ToolsIUsePage/ToolsIUsePage";
import NavPage from "./pages/NavPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [menuWindow, setMenuWindow] = useState({
    show: false,
    context: null,
    menuBackgroundColor: "transparent",
  });
  return (
    <>
      <main className="w-screen bg-main-800 flex flex-col justify-center items-center min-h-screen">
        {/* <NavPage /> */}
        <ProjectsPage />
      </main>
    </>
  );
}

export default App;
