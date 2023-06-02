import { useState } from "react";
import NavPage from "./pages/NavPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import Contacts from "./pages/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LanguagesPage from "./pages/Skills/LanguagesPage";
import ToolsPage from "./pages/Skills/ToolsPages";

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
        <Route path="skills/tools" element={<ToolsPage />} />

        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
