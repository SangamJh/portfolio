import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import IIMTLogo from './assets/education_logo/IIMT_logo.jpeg';
import SalwanLogo from './assets/education_logo/Salwan_logo.png';
import KNPSLogo from './assets/education_logo/KNPS_logo.png';

// Project Section Logo's
import BatteryLim from './assets/work_logo/Battery_Limiter.png';
import Smart_Autonomous_Navigation_Robot from './assets/work_logo/Smart_Autonomous_Navigation_Robot.jpg';
import rtcLogo from './assets/work_logo/RTCapp.webp';
import doorLogo from './assets/work_logo/Smart_Door.jpg';

// Certificate Section
import Advance_IoT from './assets/certificates/Advance_Internet_of_Things_Certificate.jpg';
import AI_Certificate from './assets/certificates/Artificial_Intelligence_Certificate_OutSkill.jpg';
import Smart_Embedded_Systems from './assets/certificates/Smart_Embedded_Systems.jpg';



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: htmlLogo,
        fullForm: "HyperText Markup Language",
        about: "Used to structure web pages."
      },
      {
        name: "CSS",
        logo: cssLogo,
        fullForm: "Cascading Style Sheets",
        about: "Used to style and design web pages."
      },
      {
        name: "JavaScript",
        logo: javascriptLogo,
        fullForm: "JavaScript",
        about: "Programming language used to create interactive web pages."
      },
      {
        name: "React JS",
        logo: reactjsLogo,
        fullForm: "React JavaScript Library",
        about: "Frontend library used for building interactive user interfaces."
      },
      {
        name: "Redux",
        logo: reduxLogo,
        fullForm: "Redux",
        about: "State management library for JavaScript applications."
      },
      {
        name: "Next JS",
        logo: nextjsLogo,
        fullForm: "Next JavaScript Framework",
        about: "React framework used for server-side rendering and full-stack apps."
      },
      {
        name: "Tailwind CSS",
        logo: tailwindcssLogo,
        fullForm: "Tailwind Cascading Style Sheets",
        about: "Utility-first CSS framework for fast UI development."
      },
      {
        name: "Bootstrap",
        logo: bootstrapLogo,
        fullForm: "Bootstrap",
        about: "CSS framework used for responsive web design."
      }
    ]
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Springboot",
        logo: springbootLogo,
        fullForm: "Spring Boot",
        about: "Java framework used for building backend applications and APIs."
      },
      {
        name: "Node JS",
        logo: nodejsLogo,
        fullForm: "Node JavaScript Runtime",
        about: "JavaScript runtime used for server-side development."
      },
      {
        name: "Express JS",
        logo: expressjsLogo,
        fullForm: "Express JavaScript Framework",
        about: "Backend framework for Node.js used to build APIs and web servers."
      },
      {
        name: "MySQL",
        logo: mysqlLogo,
        fullForm: "My Structured Query Language",
        about: "Relational database management system."
      },
      {
        name: "MongoDB",
        logo: mongodbLogo,
        fullForm: "Mongo Database",
        about: "NoSQL database used for storing flexible JSON-like data."
      },
      {
        name: "Firebase",
        logo: firebaseLogo,
        fullForm: "Firebase",
        about: "Backend-as-a-Service platform by Google for web and mobile apps."
      },
      {
        name: "PostgreSQL",
        logo: postgreLogo,
        fullForm: "Postgre Structured Query Language",
        about: "Advanced open-source relational database system."
      }
    ]
  },

  {
    title: "Languages",
    skills: [
      {
        name: "C",
        logo: cLogo,
        fullForm: "C Programming Language",
        about: "General-purpose programming language used for system programming."
      },
      {
        name: "Java",
        logo: javaLogo,
        fullForm: "Java",
        about: "Object-oriented programming language used for backend and applications."
      },
      {
        name: "Python",
        logo: pythonLogo,
        fullForm: "Python",
        about: "High-level programming language used in AI, web, and automation."
      },
      {
        name: "JavaScript",
        logo: javascriptLogo,
        fullForm: "JavaScript",
        about: "Programming language used to create dynamic web applications."
      }
    ]
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        logo: gitLogo,
        fullForm: "Git Version Control",
        about: "Version control system used to track code changes."
      },
      {
        name: "GitHub",
        logo: githubLogo,
        fullForm: "GitHub",
        about: "Platform used for hosting and collaborating on Git repositories."
      },
      {
        name: "Postman",
        logo: postmanLogo,
        fullForm: "Postman API Platform",
        about: "Tool used for testing and managing APIs."
      },
      {
        name: "Mongo Compass",
        logo: mcLogo,
        fullForm: "MongoDB Compass",
        about: "GUI tool used to manage and visualize MongoDB databases."
      }
    ]
  }
];

 export const education = [
    
    {
      id: 0,
      img: IIMTLogo,
      school: "IIMT UNIVERSITY, Greater Noida",
      date: "Sept 2023 - 2027",
      grade: "8.3 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.Tech.) from IIMT College, Greater Noida. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at IIMT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology (Computer Science)",
    },
    {
      id: 1,
      img: SalwanLogo,
      school: "Salwan Boys Senior Secondary School, Rajendra Nagar",
      date: "Apr 2020 - March 2022",
      grade: "86.67%",
      desc: "I completed my class 12 education from Salwan Boys Senior Secondary School, Rajendra Nagar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: KNPSLogo,
      school: "Kalgidhar National Public School, Inderpuri",
      date: "Apr 2019 - March 2020",
      grade: "83.33%",
      desc: "I completed my class 10 education from Kalgidhar National Public School, Inderpuri, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];

  export const projects = [
    {
  id: 0,
  title: "Battery Limiter",
  description:
    "A smart desktop application developed to help users maintain battery health and extend laptop lifespan by controlling charging limits. The software continuously monitors battery percentage and alerts users when the battery reaches a custom-defined threshold. It includes features like custom alert sounds, auto-start on boot, system tray support, and real-time battery monitoring, providing a seamless and efficient user experience.",
  image: BatteryLim,
  category : "python",
  tags: ["Python", "Tkinter", "PyInstaller", "Pygame", "Psutil"],
  github: "https://github.com/SangamJh/battery-limiter-app",
  webapp: "https://github.com/SangamJh/battery-limiter-app/releases/download/v1.0.0/NomoreOvercharging.exe",
},
    {
  id: 1,
  title: "Smart Autonomous Navigation Robot",
  description:
    "An intelligent autonomous robot designed to navigate environments efficiently without human control. The robot uses sensors and obstacle detection algorithms to analyze surroundings, avoid collisions, and determine optimal movement paths in real time. Built with a focus on automation and smart navigation, the project demonstrates practical applications of robotics, embedded systems, and autonomous decision-making.",
  image: Smart_Autonomous_Navigation_Robot,
  category : "iot",
  tags: ["Arduino", "C++", "Sensors", "Robotics", "IoT"],
  github: "https://github.com/SangamJh/smart-autonomous-navigation-robot-project",
  webapp: "https://drive.google.com/file/d/1hTrXypvBgLqkne5rNxxjx6vgSKnLn5Bf/view?usp=sharing",
},
  {
  id: 2,
  title: "Smart Door",
  description:
    "A smart security and access control system designed to enhance home and office safety through intelligent door management. The Smart Door project integrates modern authentication methods such as password entry, RFID, or mobile-based access to allow secure and convenient entry. It features real-time monitoring, automated locking mechanisms, and responsive controls to improve user security and accessibility. Built with a focus on reliability and user experience, the project demonstrates practical implementation of IoT concepts, hardware-software integration, and responsive system design",
    image: doorLogo,
    category : "iot",
  tags: ["Arduino", "C++", "Sensors", "Robotics", "IoT"],
  github: "https://github.com/SangamJh/FAQ-Chatbot",
  webapp: "YOUR_WEBAPP_LINK",
},
    {
  id: 3,
  title: "Real Time Chat App",
  description:
    "A responsive and interactive chatbot application developed to provide instant answers to frequently asked questions. The chatbot processes user queries and delivers accurate responses through a clean conversational interface, improving user engagement and reducing manual support efforts. Designed with simplicity and efficiency in mind, the project demonstrates practical implementation of frontend development, API integration, and intelligent response handling.",
  image: rtcLogo,
  category : "mern",
  tags: ["React JS", "JavaScript", "API", "HTML", "CSS"],
  github: "https://github.com/SangamJh/FAQ-Chatbot",
  webapp: "YOUR_WEBAPP_LINK",
}
    
  ];
  
  export const certificates = [
  {
    id: 1,
    title: "Smart Embedded Systems & Internet of Things(IoT)",
    issuer: "Tecnoledge",
    issuerLogo: "https://media.licdn.com/dms/image/v2/C510BAQHHJJ5X66Tidg/company-logo_200_200/company-logo_200_200/0/1630613579462?e=2147483647&v=beta&t=ODU3QGdLE_rKIaVyfX4jcDzq3TE1t4iRZhFtiE8-phg", // replace with actual logo
    date: "March 2026",
    image: Advance_IoT, // replace with actual image
    link: "https://drive.google.com/file/d/1ttv4ljIe7_85YzAlZs_C8lG4zPHefaMf/view?usp=sharing",   // replace with actual link
    tags: ["Arduino", "C++", "Sensors", "Robotics", "IoT"],
  },
  {
    id: 2,
    title: "Advance Internet of Things",
    issuer: "Tecnoledge",
    issuerLogo: "https://media.licdn.com/dms/image/v2/C510BAQHHJJ5X66Tidg/company-logo_200_200/company-logo_200_200/0/1630613579462?e=2147483647&v=beta&t=ODU3QGdLE_rKIaVyfX4jcDzq3TE1t4iRZhFtiE8-phg",
    date: "January 2025",
    image: Smart_Embedded_Systems,
    link: "https://drive.google.com/file/d/1vQJix5Ws1YJpyBoC2DS16MslV96IZOeT/view?usp=sharing",
    tags: ["Arduino", "C++", "Sensors", "Robotics", "IoT"],
  },
  {
    id: 3,
    title: "Advance Internet of Things",
    issuer: "Tecnoledge",
    issuerLogo: "https://media.licdn.com/dms/image/v2/C510BAQHHJJ5X66Tidg/company-logo_200_200/company-logo_200_200/0/1630613579462?e=2147483647&v=beta&t=ODU3QGdLE_rKIaVyfX4jcDzq3TE1t4iRZhFtiE8-phg",
    date: "January 2025",
    image: Smart_Embedded_Systems,
    link: "https://drive.google.com/file/d/1vQJix5Ws1YJpyBoC2DS16MslV96IZOeT/view?usp=sharing",
    tags: ["Arduino", "C++", "Sensors", "Robotics", "IoT"],
  },
  {
    id: 4,
    title: "Artificial Intelligence Certificate OutSkill",
    issuer: "Outskill",
    issuerLogo: "https://media.licdn.com/dms/image/v2/D560BAQHf3e0DfaWKIA/company-logo_200_200/company-logo_200_200/0/1737454411071/outskillcom_logo?e=2147483647&v=beta&t=xQdyY4FrCwS_CHz_qb_mNNnMw6ttiQAOA4kDKdKx858",
    date: "May 2025",
    image: AI_Certificate,
    link: "https://drive.google.com/file/d/1tBx4qJvIW14ThlYHXU17nlq8z0MYFbxR/view?usp=sharing",
    tags: ["Python", "NumPy", "Pandas"],
  },
  
];