import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical center line — hidden on mobile, visible on sm+ */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={edu.id} className="relative flex items-center mb-16">
              
              {/* LEFT SIDE — card or empty spacer */}
              <div className="w-full sm:w-1/2 sm:pr-12 flex sm:justify-end justify-center">
                {isLeft ? (
                  <Card edu={edu} />
                ) : (
                  <div className="hidden sm:block" /> // empty spacer
                )}
              </div>

              {/* Timeline Circle — centered on the line */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-gray-400 border-4 border-[#8245ec] items-center justify-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* RIGHT SIDE — card or empty spacer */}
              <div className="w-full sm:w-1/2 sm:pl-12 flex sm:justify-start justify-center">
                {!isLeft ? (
                  <Card edu={edu} />
                ) : (
                  <div className="hidden sm:block" /> // empty spacer
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

/* Extracted card for reuse */
const Card = ({ edu }) => (
  <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
    {/* Header row: logo + degree/school/date */}
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 flex-shrink-0 bg-white rounded-md overflow-hidden">
        <img
          src={edu.img}
          alt={edu.school}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {edu.degree}
        </h3>
        <h4 className="text-sm text-gray-300 mt-0.5">{edu.school}</h4>
        <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
      </div>
    </div>

    <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
    <p className="mt-2 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
  </div>
);

export default Education;