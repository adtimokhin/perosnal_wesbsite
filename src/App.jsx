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
import ExperiencePage from "./pages/ExperiencePage";
import Contacts from "./pages/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LanguagesPage from "./pages/Skills/LanguagesPage";

function App() {
  const [menuWindow, setMenuWindow] = useState({
    show: false,
    context: null,
    menuBackgroundColor: "transparent",
  });
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<NavPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="skills" element={<ExperiencePage />} />
            <Route path="skills/languages" element={<LanguagesPage />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
