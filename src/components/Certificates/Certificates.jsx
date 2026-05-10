import React from "react";
import { certificates } from "../../constants";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of certifications I have earned, reflecting my commitment
          to continuous learning and skill development
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Certificate Image */}
            <div className="p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>

            {/* Certificate Content */}
            <div className="p-6">
              {/* Issuer Logo + Name */}
              <div className="flex items-center gap-3 mb-3">
                {cert.issuerLogo && (
                  <img
                    src={cert.issuerLogo}
                    alt={cert.issuer}
                    className="w-8 h-8 object-contain rounded-full bg-white p-1"
                  />
                )}
                <span className="text-purple-400 text-sm font-semibold">
                  {cert.issuer}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>

              {/* Date */}
              <p className="text-gray-500 text-sm mb-4">{cert.date}</p>

              {/* Tags */}
              <div className="mb-6">
                {cert.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* See Certificate Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-xl text-sm font-semibold text-center transition duration-300"
              >
                See Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;