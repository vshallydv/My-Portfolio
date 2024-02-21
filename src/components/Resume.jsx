// ResumeSection.js
import React from "react";
import Navbar from "./Navbar";
import "./Styles/styles.css";
// import vis from "../assets/vis.pdf";

function Education({ onSelectSection }) {
  // const pdfUrl =require( "../assets/vis.pdf");

  // const handleDownload = () => {
  //   const anchor = document.createElement("a");
  //   anchor.href = pdfUrl;
  //   anchor.download = "vis.pdf";
  //   anchor.click();
  // };

  return (
    <div className="bg-eerie-black-2 p-8 rounded-lg shadow-md my-10 mx-12 text-white  max-h-custom overflow-y-auto ">
      <Navbar onSelectSection={onSelectSection} />
      <article className="resume" data-page="resume">
        <header>
          <h2 className="h2 article-title text-2xl font-bold">Resume</h2>
        </header>

        <section className="timeline ">
          <div className="title-wrapper">
            <div className="icon-box mx-2 mt-2 ">
              <ion-icon name="book-outline"></ion-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500 stroke-current flex items-center"
                viewBox="0 0 512 512"
              >
                <title>Book</title>
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Mvp's KBTCOE</h4>
              <span>2019 — 2023</span>
              <p className="timeline-text">
                Instrumentation & Control Engineering (SGPA : 8.6)
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">C.M.C.S College</h4>
              <span>2017 — 2019</span>
              <p className="timeline-text">HSC (Percentage : 62.46)</p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Sahaj Blossom High School
              </h4>
              <span>2015 — 2016</span>
              <p className="timeline-text">SSC (Percentage : 73.2)</p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box mx-2 mt-2 ">
              <ion-icon name="book-outline"></ion-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-yellow-500 stroke-current flex items-center"
                viewBox="0 0 512 512"
              >
                <title>Book</title>
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Software Engineer Intern
              </h4>
              <span> RadicalX (Dec 2023 — Present)(Remote) </span>
              <p className="timeline-text">
                • As a Virtual Full Stack Developer Intern, I gained hands-on
                experience in web development, focusing on front-end
                technologies, and contributed to projects involving web
                application design and user experience enhancement.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Web Developer Intern</h4>
              <span>Code Alpha (Oct 2023 — Dec 2023)(Remote) </span>
              <p className="timeline-text">
                • Specialized in front-end technologies, elevating web design,
                and optimizing user experiences. <br />• Cultivated skills
                through hands-on experience, igniting a passion for impactful
                web development
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Full Stack Developer Intern
              </h4>
              <span>Bharat Intern (Sep 2023 — Oct 2023)(Remote) </span>
              <p className="timeline-text">
                • Web Developer Intern specializing in front-end technologies,
                enhancing web design and user experiences. <br />• Hands-on
                experience sharpened my skills, fuelling my passion for
                impactful web development.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Application Engineer</h4>
              <span>
                Avon Building Solution Pvt Ltd (Jul 2023 — Aug 2023)(Pune)
              </span>
              <p className="timeline-text">
                • Managed networking, access control systems, and smart building
                integration using TCP/IP and VLANs. • The commissioning of the
                system was performed by using software tools like Netx
                Automation, I app, Bootloader, and Communication Software.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                C2TC TRAINING PROGRAM- CAPGEMINI
              </h4>
              <span>TNS India Foundation (Oct 2022 — Jan 2023)(Nashik)</span>
              <p className="timeline-text">
                • Introduced technologies: SQL, Core Java 8, JPA with Hibernate,
                GIT, Spring 5.0, Spring Boot, HTML5, CSS3, JavaScript,
                TypeScript, React JS, soft skills.
              </p>
            </li>
          </ol>
        </section>
        <div className="shadow-2xl">
          <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Programming Languages:</h5>
                  <p>Java, Html, CSS, JavaScript</p>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Technologies/Framework:</h5>
                  <p>ReactJS, Bootstrap, Tailwind CSS, Rest APIt</p>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Database:</h5>
                  <p> MySQL, MongoDB</p>
                </div>
              </li>

              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Tools/Technologies:</h5>
                  <p>
                    Tools: Git, GitHub LATEX, MATLAB, LabView, MSOffice,
                    Robotics, IOT, Networking
                  </p>
                </div>
              </li>
            </ul>

            {/* <div>
            <button onClick={handleDownload}>Download PDF</button>
          </div> */}
          </section>
        </div>
      </article>
    </div>
  );
}

export default Education;
