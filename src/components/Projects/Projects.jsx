import React, { useState } from "react";
import { projects } from "../../constants";

const viewCodeStyle =
  "w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 py-2 rounded-xl text-sm font-semibold text-center transition duration-300";

const viewLiveStyle =
  "w-1/2 bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-xl text-sm font-semibold text-center transition duration-300";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Active Category
  const [activeCategory, setActiveCategory] = useState("mern");

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Filter Projects
  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[8vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          onClick={() => setActiveCategory("mern")}
          className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
            activeCategory === "mern"
              ? "bg-purple-600 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-purple-800 hover:text-white"
          }`}
        >
          MERN Projects
        </button>

        <button
          onClick={() => setActiveCategory("iot")}
          className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
            activeCategory === "iot"
              ? "bg-purple-600 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-purple-800 hover:text-white"
          }`}
        >
          IOT Projects
        </button>

        <button
          onClick={() => setActiveCategory("python")}
          className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
            activeCategory === "python"
              ? "bg-purple-600 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-purple-800 hover:text-white"
          }`}
        >
          Python Projects
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] overflow-y-auto relative border border-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end px-4 pt-3">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500 transition"
              >
                &times;
              </button>
            </div>

            {/* Image */}
            <div className="px-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-44 object-cover rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={viewCodeStyle}
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={viewLiveStyle}
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;