import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AboutMeSection from "./components/AboutMeSection";
import PortfolioSection from "./components/Work";
import ContactForm from "./components/ContactForm";
import Education from "./components/Resume";
import "./components/Styles/styles.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("about");

  const navigateToSection = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex bg-smoky-black h-screen   w-screen">
      <Sidebar onSelectSection={navigateToSection} />
      <div className="flex-1 flex flex-col ">
        <div className="flex-1 overflow-y-auto max-h-customqa ">
          {selectedSection === "about" && (
            <AboutMeSection  onSelectSection={navigateToSection} />
          )}
          {selectedSection === "resume" && (
            <Education onSelectSection={navigateToSection} />
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
