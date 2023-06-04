import { useState } from "react";
import NavPage from "./pages/NavPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import Contacts from "./pages/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LanguagesPage from "./pages/Skills/LanguagesPage";
import ToolsPage from "./pages/Skills/ToolsPages";
import { AnimatePresence } from "framer-motion";
import HeroPage from "./pages/HeroPage";

function App() {
  const [menuWindow, setMenuWindow] = useState({
    show: false,
    context: null,
    menuBackgroundColor: "transparent",
  });
  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter>
        <Routes>
          <Route index element={<HeroPage/>} />
          <Route path="nav" element={<NavPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<ExperiencePage />} />
          <Route path="skills/languages" element={<LanguagesPage />} />
          <Route path="skills/tools" element={<ToolsPage />} />

          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
