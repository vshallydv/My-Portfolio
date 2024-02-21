import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

function PortfolioSection({ onSelectSection }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample project data
  const projects = [
    {
      name: "Vite Blog with Appwrite",
      category: "Web development",
      githubLink: "https://github.com/yadavvshall/appwrite-blog ",
      liveLink: "https://appwrite-blog-xi.vercel.app/",
      imageSrc:
        "https://raw.githubusercontent.com/yadavvshall/appwrite-blog/main/Vite%20Blog%20App.png",
    },
    {
      name: "Mynta Clone",
      category: "Web development",
      githubLink: "https://github.com/yadavvshall/Myntra-Clone",
      liveLink: "https://github.com/yadavvshall/Myntra-Clone",
      imageSrc:
        "https://raw.githubusercontent.com/yadavvshall/Myntra-Clone/main/Myntra%20Clone.png",
    },
    // Add more projects here
    {
      name: "Job Portal",
      category: "Web design",
      githubLink: "https://github.com/yadavvshall/Job-Portal",
      liveLink: "https://job-portal-eight-gamma.vercel.app/",
      imageSrc:
        "https://raw.githubusercontent.com/yadavvshall/Job-Portal/main/Job%20Portal.png",
    },
    {
      name: "Next AI Chat App ",
      category: "Web development",
      githubLink: "https://github.com/yadavvshall/NextAI-Chatbot",
      liveLink: "https://github.com/yadavvshall/NextAI-Chatbot",
      imageSrc:
        "https://raw.githubusercontent.com/yadavvshall/NextAI-Chatbot/master/Next%20Ai%20App.png",
    },
    {
      name: "File Sharing App",
      category: "Web development",
      githubLink: "https://github.com/example/project5",
      liveLink: "https://file-sharing-app-xi.vercel.app/",
      imageSrc:
        "https://raw.githubusercontent.com/yadavvshall/File-Sharing-App/main/File%20Sharing%20App.png",
    },
    // {
    //   name: "Project 6",
    //   category: "Web development",
    //   githubLink: "https://github.com/example/project6",
    //   liveLink: "https://example.com/project6",
    //   imageSrc: "path_to_image/project6_image.jpg",
    // },
    // {
    //   name: "Project 7",
    //   category: "Web design",
    //   githubLink: "https://github.com/example/project7",
    //   liveLink: "https://example.com/project7",
    //   imageSrc: "path_to_image/project7_image.jpg",
    // },
    // {
    //   name: "Project 8",
    //   category: "Web development",
    //   githubLink: "https://github.com/example/project8",
    //   liveLink: "https://example.com/project8",
    //   imageSrc: "path_to_image/project8_image.jpg",
    // },
  ];
  const certifications = [
    {
      name: "Front-End Development",
      link: "https://drive.google.com/file/d/1_v8lrkEKNd8-ImO98bF_rc5lnGSJ_qnd/view",
      imageSrc: "/src/assets/frontend.jpeg",
    },
    {
      name: "Frontend Developer(React)",
      link: "https://drive.google.com/file/d/11R1mjGjg-2o-MdNuHbXkZQSKZieC1WYy/view",
      imageSrc: "/src/assets/HackerRank.jpeg",
    },
    {
      name: "Java Training Complete Course",
      link: "https://drive.google.com/file/d/1mzdQFfGndQWJEQpJOctDVzncfuAbESgb/view",
      imageSrc: "/src/assets/Java.jpeg",
    },
    {
      name: "Technical Careers Training Program",
      link: "https://drive.google.com/file/d/1laBMvxrUzMOvGC3_0vHrqTM8pn2tU97k/view",
      imageSrc: "/src/assets/C2TC.jpeg",
    },
    {
      name: "Cloud Computing IBM",
      link: "https://drive.google.com/file/d/1YWodbZ8Ro8soQNGQb9iVT7hvGUoL6TEO/view",
      imageSrc: "/src/assets/Cloud.jpeg",
    },
    {
      name: "GitHub",
      link: "https://drive.google.com/file/d/14Z3LqF-U-ZPdvJYIMX876WiA21x0s6Xb/view?usp=sharing",
      imageSrc: "/src/assets/GitHub.jpeg",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-eerie-black-2 p-8 rounded-lg text-white shadow-md my-10 mx-12 max-h-custom overflow-y-auto">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

      {/* Filter buttons */}
      <div className="flex mb-4">
        <button
          className={`mr-4 px-4 py-2 bg-jet text-white rounded hover:bg-gray-700 ${
            selectedCategory === "All" && "bg-blue-600"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={`mr-4 px-4 py-2 bg-jet text-white rounded hover:bg-gray-700 ${
            selectedCategory === "Web design" && "bg-blue-600"
          }`}
          onClick={() => setSelectedCategory("Web design")}
        >
          Web Design
        </button>
        <button
          className={`px-4 py-2 bg-jet text-white rounded hover:bg-gray-700 ${
            selectedCategory === "Web development" && "bg-blue-600"
          }`}
          onClick={() => setSelectedCategory("Web development")}
        >
          Web Development
        </button>
      </div>

      {/* Display filtered projects */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black p-4 shadow rounded"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold">{project.name}</h3>
            <img
              src={project.imageSrc}
              alt={project.name}
              className="mt-2 mb-2"
              style={{ maxHeight: "200px" }}
            />
            <p className="text-sm text-gray-600">{project.category}</p>
            <div className="flex mt-2">
              <a
                href={project.githubLink}
                className="mr-2 text-blue-500 hover:text-blue-600"
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                className="text-blue-500 hover:text-blue-600"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Certifications</h2>
      <div className="grid grid-cols-3 gap-4">
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            className="bg-black p-4 shadow rounded"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-semibold">{certification.name}</h3>
            <img
              src={certification.imageSrc}
              alt={certification.name}
              className="mt-2 mb-2"
              style={{ maxHeight: "200px" }}
            />
            <a
              href={certification.link}
              className="text-blue-500 hover:text-blue-600"
            >
              View Certification
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
