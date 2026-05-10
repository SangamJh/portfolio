import { Typewriter } from 'react-simple-typewriter'; 
import React from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/image.jpg';

const About = () => {
  return (
    <section
  id="about"
  className="min-h-screen px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-24 pb-10 scroll-mt-0"
>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
       
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
  <span>
    <Typewriter
      words={["Hello", "नमस्ते", "Hola", "Bonjour"]}
      loop={true}
    
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={4000}
    />
  </span>
  {", I am"}
</h1>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sangam Jha
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>

            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  'Fullstack Developer',
                  'Python Developer',
                  'AI Enthusiast',
                  'Software Engineer',
                  'Coder',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. With experience in React, Node.js, and various databases, I enjoy creating dynamic and responsive web applications. </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/10bvQ8aV4MX8Idfo3-3ymEMT0ZOljs1bV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            SEE RESUME
          </a>
          
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Sangam Jha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;

