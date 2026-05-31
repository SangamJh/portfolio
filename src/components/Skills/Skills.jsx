import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          SKILLS
        </h2>

        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-400 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of my technical skills through various projects and
          experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-[#111827]/80 backdrop-blur-md border border-white/10 rounded-3xl p-5 sm:p-7 shadow-[0_0_20px_rgba(130,69,236,0.25)] overflow-visible"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-300 mb-8">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center justify-center gap-2 border border-gray-700 rounded-2xl px-3 py-3 bg-[#0f172a] hover:border-[#8245ec] transition-all duration-300 cursor-pointer"
                  >
                    {/* Logo */}
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                    />

                    {/* Skill Name */}
                    <span className="text-xs sm:text-sm text-gray-300 font-medium text-center">
                      {skill.name}
                    </span>

                    {/* Hover Info Box */}
                    <div
                      className="
                        absolute 
                        opacity-0 
                        invisible 
                        group-hover:opacity-100 
                        group-hover:visible
                        transition-all 
                        duration-300
                        bottom-[120%]
                        left-1/2
                        -translate-x-1/2
                        w-64
                        z-50
                        pointer-events-none
                      "
                    >
                      <div className="bg-[#111827] border border-[#8245ec] rounded-xl p-4 shadow-2xl">
                        <h4 className="text-sm font-bold text-white mb-2">
                          {skill.fullForm}
                        </h4>

                        <p className="text-xs text-gray-300 leading-relaxed">
                          {skill.about}
                        </p>
                      </div>

                      {/* Tooltip Arrow */}
                      <div className="w-3 h-3 bg-[#111827] border-r border-b border-[#8245ec] rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
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
};

export default Skills;