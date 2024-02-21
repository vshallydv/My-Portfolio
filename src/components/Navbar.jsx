// Navbar.js
import React from "react";

function Navbar({ onSelectSection }) {
  return (
    <div className="bg-jet p-2 flex justify-end rounded-lg float-end text-white">
      <div
        className="p-2 mr-2 cursor-pointer"
        onClick={() => onSelectSection("about")}
      >
        About
      </div>
      <div
        className="p-2 mr-2 cursor-pointer"
        onClick={() => onSelectSection("resume")}
      >
        Resume
      </div>
      <div
        className="p-2 mr-2 cursor-pointer"
        onClick={() => onSelectSection("work")}
      >
        Work
      </div>
      <div
        className="p-2 cursor-pointer"
        onClick={() => onSelectSection("contact")}
      >
        Contact
      </div>
    </div>
  );
}

export default Navbar;
