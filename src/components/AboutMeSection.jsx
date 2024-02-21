import React from "react";
import Navbar from "./Navbar";
import { FcOldTimeCamera } from "react-icons/fc";
import { SiAntdesign } from "react-icons/si";
import { MdWeb } from "react-icons/md";
import "./Styles/styles.css";

function AboutMeSection({ onSelectSection }) {
  return (
    <div className="bg-eerie-black-2 p-8 rounded-lg shadow-md my-10 mx-12 max-h-custom overflow-y-auto ">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl text-white font-bold mb-4 ">About Me</h2>
      <div className="custom-margin">
        <p className="mb-4 text-gray-300 my-8 ">
          As an aspiring frontend developer, I specialize in Java, C++, and SQL,
          with a focus on web development and automation. Proficient in ReactJS,
          Bootstrap, Tailwind CSS, and database management using MySQL and
          MongoDB. Skilled in tools like Git, GitHub, LATEX, MATLAB, LabView,
          MSOffice, Robotics, IOT, and Networking, I am enthusiastic about
          leveraging my skills to deliver innovative solutions in frontend
          development.
        </p>
      </div>

      <div className="border-t border-gray-200 pt-4 text-white custom-marginq">
        <div className="flex items-center mb-4">
          <div className="border-2 border-gray-700 rounded-lg p-2 mr-4 text-blue-500 ">
            <SiAntdesign />
          </div>
          <div>
            <h3 className="font-semibold mt-4 ">Web Design</h3>
            <p className="text-sm text-gray-300">
              The most modern and high-quality design made at a Beginner level.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4 mt-4">
          <div className="border-2 border-gray-700 rounded-lg p-2 mr-4 text-yellow-400">
            <MdWeb />
          </div>
          <div>
            <h3 className="font-semibold mt-4">Web Development</h3>
            <p className="text-sm text-gray-300">
              High-quality development of sites at the Intermediate level.
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="border-2 border-gray-700 rounded-lg p-2 mr-4">
            <FcOldTimeCamera />
          </div>
          <div>
            <h3 className="font-semibold mt-4 ">Photography</h3>
            <p className="text-sm text-gray-300">
              I make high-quality photos of any category at a Beginner level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
