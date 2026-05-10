import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-4 sm:px-8 md:px-12 lg:px-20 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my technical skills through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-2 rounded-2xl border border-white 
shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
  key={skill.name}
  
  className="group relative flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 text-center cursor-pointer"
>
  <img
    src={skill.logo}
    alt={`${skill.name} logo`}
    className="w-6 h-6 sm:w-8 sm:h-8"
  />

  <span className="text-xs sm:text-sm text-gray-300">
    {skill.name}
  </span>

  {/* Info Box */}
  <div className="absolute hidden group-hover:block top-14 left-1/2 -translate-x-1/2 w-56 bg-gray-900 border border-[#8245ec] rounded-lg p-3 z-50 shadow-lg">
    
    <h4 className="text-sm font-bold text-white">
      {skill.fullForm}
    </h4>

    <p className="text-xs text-gray-300 mt-1">
      {skill.about}
    </p>
  </div>
</div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;

