import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/sangamjha86/" },
    { icon: <RiTwitterXLine />, link: "https://x.com/SangamJha86" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sangamjha86" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@sangamjha86" },
    { icon: <SiLeetcode />, link: "https://leetcode.com/sangamjha86/" },
  ];

  return (
    <footer className="text-white pt-12 pb-6 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-purple-500/20">
      <div className="container mx-auto text-center">

        {/* Navigation — styled as pills */}
        <nav className="flex flex-wrap justify-center gap-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="px-4 py-1.5 rounded-full text-sm text-gray-400 border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-24 h-px bg-purple-500 mx-auto mt-6 mb-2"></div>

        {/* Follow Me */}
        <p className="text-gray-500 text-xs font-semibold mt-4 tracking-widest uppercase">
          Follow Me
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-3">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-purple-500 hover:text-purple-400 hover:scale-110 transition duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 mt-8">
          © 2026 Sangam Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;