// ResumeSection.js
import React from "react";
import Navbar from "./Navbar";

function ResumeSection({ onSelectSection }) {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl font-bold mb-4">Resume</h2>

      {/* Education */}
      <div className="mb-6">
        <h3 className="font-bold text-lg">Education</h3>
        <p>Mvp's KBTCOE, 2019 — 2023</p>
        <p>Instrumentation & Control Engineering (SGPA : 8.6)</p>
      </div>
      <div className="mb-6">
        <p>C.M.C.S College, 2017 — 2019</p>
        <p>HSC (Percentage : 62.46)</p>
      </div>
      <div className="mb-6">
        <p>Sahaj Blossom High School, 2015 — 2016</p>
        <p>SSC (Percentage : 73.20)</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="font-bold text-lg">Experience</h3>
        <div className="mb-4">
          <p>
            Software Engineer Intern at RadicalX (Dec 2023 - Present)(Remote)
            - 1 year 2 months
          </p>
          <ul className="list-disc pl-8">
            <li>
              Spearheading projects at RadicalX, driving innovative solutions
              and achieving measurable results.
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-4">
          <p>
            Web Developer Intern at Code Alpha (Oct 2023 — Dec 2023)(Remote) -
            3 months
          </p>
          <ul className="list-disc pl-8">
            <li>
              Specialized in front-end technologies, elevating web design, and
              optimizing user experiences.
            </li>
            <li>
              Cultivated skills through hands-on experience, igniting a passion
              for impactful web development.
            </li>
          </ul>
        </div>
      </div>

      {/* Add other experience sections similarly */}
      
      <div className="mb-6">
        <div className="mb-4">
          <p>
            Application Engineer at Avon Building Solution Pvt Ltd (Jul 2023 —
            Sep 2023)(Pune) - 2 months
          </p>
          <ul className="list-disc pl-8">
            <li>
              Managed networking, access control systems, and smart building
              integration using TCP/IP and VLANs.
            </li>
            <li>
              The commissioning of the system was performed by using software
              tools like Netx Automation, I app, Bootloader, and Communication
              Software.
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <p>C2TC Training Program - Capgemini</p>
        <p>TNS India Foundation (Oct 2022 — Jan 2023)(Nashik)</p>
        <ul className="list-disc pl-8">
          <li>
            Introduced technologies: SQL, Core Java 8, JPA with Hibernate, GIT,
            Spring 5.0, Spring Boot, HTML5, CSS3, JavaScript, TypeScript, React
            JS, soft skills.
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h3 className="font-bold text-lg">My Skills</h3>
        <p>
          <strong>Programming Languages:</strong> Java, Html, CSS, JavaScript
          <br />
          <strong>Technologies/Framework:</strong> ReactJS, Bootstrap, Tailwind
          CSS, Rest API
          <br />
          <strong>Database:</strong> MySQL, MongoDB
          <br />
          <strong>Tools:</strong> Git, GitHub LATEX, MATLAB, LabView, MSOffice,
          Robotics, IOT, Networking
        </p>
      </div>

      {/* Download CV button */}
      <div className="mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default ResumeSection;
