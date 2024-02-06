// PortfolioSection.js
import React from "react";
import Navbar from "./Navbar";

function PortfolioSection({ onSelectSection }) {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

      {/* Filter buttons */}
      <div className="flex mb-4">
        <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => filterProjects('All')}>All</button>
        <button className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => filterProjects('Web design')}>Web design</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => filterProjects('Web development')}>Web development</button>
      </div>

      {/* Display filtered projects */}
      {/* <div className="grid grid-cols-3 gap-4">
        {filterProjects('All').map((project, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.category}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default PortfolioSection;
