import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AboutMeSection from "./components/AboutMeSection";
import ResumeSection from "./components/ResumeSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactForm from "./components/ContactForm";

function App() {
  const [selectedSection, setSelectedSection] = useState("about");

  const navigateToSection = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex bg-zinc-950 h-screen w-screen">
      <Sidebar onSelectSection={navigateToSection} />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {selectedSection === "about" && (
            <AboutMeSection onSelectSection={navigateToSection} />
          )}
          {selectedSection === "resume" && (
            <ResumeSection onSelectSection={navigateToSection} />
          )}
          {selectedSection === "work" && (
            <PortfolioSection onSelectSection={navigateToSection} />
          )}
          {selectedSection === "contact" && (
            <ContactForm onSelectSection={navigateToSection} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
