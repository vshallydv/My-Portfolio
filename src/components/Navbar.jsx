// Navbar.js
import React from "react";

function Navbar({ onSelectSection }) {
  return (
    <div className="bg-gray-200 p-4 flex justify-end">
      <div
        className="p-4 mr-4 cursor-pointer"
        onClick={() => onSelectSection("about")}
      >
        About
      </div>
      <div
        className="p-4 mr-4 cursor-pointer"
        onClick={() => onSelectSection("resume")}
      >
        Resume
      </div>
      <div
        className="p-4 mr-4 cursor-pointer"
        onClick={() => onSelectSection("work")}
      >
        Work
      </div>
      <div
        className="p-4 cursor-pointer"
        onClick={() => onSelectSection("contact")}
      >
        Contact
      </div>
    </div>
  );
}

export default Navbar;
