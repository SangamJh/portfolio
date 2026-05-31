import React, { useState, useRef, useEffect } from "react";
import { IoClose, IoSend } from "react-icons/io5";
import botImage from "../../assets/chatbot.jpg";

const suggestions = [
  "Skills",
  "Projects",
  "Experience",
  "Certificates",
  "Education",
  "Contact",
];

const getReply = (input) => {
  const msg = input.toLowerCase();

  if (
    msg.includes("hello") ||
    msg.includes("hi") ||
    msg.includes("hey")
  ) {
    return {
      text: "Hi there! 👋 I'm Sangam's assistant. What would you like to know?",
      section: null,
    };
  }

  if (msg.includes("skill")) {
    return {
      text: "Sangam is skilled in React, Node.js, Python, AI and more!",
      section: "skills",
    };
  }

  if (msg.includes("project")) {
    return {
      text: "Sangam has built some amazing projects!",
      section: "projects",
    };
  }

  if (
    msg.includes("experience") ||
    msg.includes("work")
  ) {
    return {
      text: "Here's Sangam's work experience 👇",
      section: "experience",
    };
  }

  if (
    msg.includes("certificate") ||
    msg.includes("certification")
  ) {
    
    return {
      text: "Sangam has earned several certifications!",
      section: "certificates",
    };
  }

  if (
    
    msg.includes("education") ||
    msg.includes("college") ||
    msg.includes("degree")
  ) {
    return {
      text: "Here's Sangam's educational background 👇",
      section: "education",
    };
  }

  if (
    msg.includes("contact") ||
    msg.includes("hire") ||
    msg.includes("reach")
  ) {
    return {
      text: "Want to get in touch with Sangam? 👇",
      section: "contact",
    };
  }

  if (
    msg.includes("resume") ||
    msg.includes("cv")
  ) {
    return {
      text: "You can download Sangam's resume from the homepage! 📄",
      section: "about",
    };
  }

  if (msg.includes("github")) {
    return {
      text: "GitHub: https://github.com/SangamJh 🐙",
      section: null,
    };
  }

  if (msg.includes("linkedin")) {
    return {
      text:
        "LinkedIn: https://www.linkedin.com/in/sangamjha86 🔗",
      section: null,
    };
  }

  if (
    msg.includes("who") ||
    msg.includes("about") ||
    msg.includes("sangam")
  ) {
    return {
      text: "Sangam Jha is a passionate Fullstack Developer & AI Enthusiast!",
      section: "about",
    };
  }

  return {
    text: "I'm not sure about that. Try one of the suggestions below 👇",
    section: null,
  };
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const chatRef = useRef(null);

  const speakMessage = (text) => {
    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // Floating bubble messages
  const msgs = [
    "Need help? 💬",
    "Ask me anything! 🤖",
    "Let's chat! ✨",
    "I'm here to help 👋",
    "Got questions? 💡",
  ];

  const [msgIndex, setMsgIndex] = useState(0);

  // Bubble text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % msgs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // Close chatbot on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleSend = (text) => {
    const query = text || input;

    if (!query.trim()) return;

    const reply = getReply(query);

    const userMessage = {
      role: "user",
      content: query,
    };

    const botMessage = {
      role: "assistant",
      content: reply.text,
      section: reply.section,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  const handleClear = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Bubble */}
        <div
          className="absolute bottom-20 right-0 text-white text-xs font-semibold px-3 py-2 rounded-[18px_18px_4px_18px] whitespace-nowrap"
          style={{
            background:
              "linear-gradient(135deg, #8245ec, #a855f7)",
            boxShadow:
              "0 4px 14px rgba(130,69,236,.4)",
            animation:
              "msgpop 2s ease-in-out infinite",
          }}
        >
          {msgs[msgIndex]}
        </div>

        {/* Button */}
        <button
          onClick={() => {
            const newState = !isOpen;

            setIsOpen(newState);

            if (newState) {
              speakMessage("Yes, how may I help you?");
            }
          }}
          className="relative w-[72px] h-[72px] flex items-center justify-center bg-transparent border-none cursor-pointer"
        >
          {/* Pulse Rings */}
          <span
            className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-60"
            style={{
              animationDuration: "2s",
            }}
          />

          <span
            className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-45"
            style={{
              animation:
                "ping 2s ease-out infinite 0.4s",
            }}
          />

          <span
            className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-30"
            style={{
              animation:
                "ping 2s ease-out infinite 0.8s",
            }}
          />

          {/* Rotating Circle Text */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{
              animation:
                "spin 8s linear infinite",
            }}
            viewBox="0 0 130 130"
          >
            <defs>
              <path
                id="circle-path"
                d="M65,65 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0"
              />
            </defs>

            <text
              fontSize="10.5"
              fill="#a855f7"
              fontFamily="sans-serif"
              fontWeight="600"
              letterSpacing="3"
            >
              <textPath href="#circle-path">
                AI ASSISTANT • AI ASSISTANT • AI ASSISTANT •
              </textPath>
            </text>
          </svg>

          {/* Bot Image / Close */}
          {isOpen ? (
            <IoClose
              size={28}
              className="relative z-10 text-purple-400"
            />
          ) : (
            <img
              src={botImage}
              alt="Chatbot"
              className="relative z-10 w-14 h-14 rounded-full object-cover"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(168,85,247,.7))",
              }}
            />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 z-50 w-80 h-[28rem] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            background: "#0f0a1e",
            border: "1px solid #8245ec",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 text-white font-bold text-sm flex items-center justify-between"
            style={{
              background:
                "linear-gradient(90deg, #8245ec, #a855f7)",
            }}
          >
            <div className="flex items-center gap-2">
              <img
                src={botImage}
                alt="Chatbot"
                className="w-7 h-7 rounded-full object-cover"
              />

              Sangam's Assistant
            </div>

            <button
              onClick={handleClear}
              className="text-xs text-white bg-white/20 hover:bg-white/35 px-2 py-1 rounded-full transition"
            >
              Clear
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 p-3 space-y-2 overflow-y-auto chat-scroll"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Default Message */}
            <div className="flex justify-start">
              <div
                className="max-w-[75%] px-3 py-2 rounded-xl text-sm text-white"
                style={{
                  background: "#1e1235",
                }}
              >
                Hi 👋 I'm Sangam's assistant.
                Ask me anything below!
              </div>
            </div>

            {/* Chat Messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
                  }`}
              >
                <div
                  className="max-w-[75%] px-3 py-2 rounded-xl text-sm text-white break-all"
                  style={{
                    background:
                      msg.role === "user"
                        ? "linear-gradient(90deg, #8245ec, #a855f7)"
                        : "#1e1235",
                  }}
                >
                  {msg.content}

                  {/* Section Button */}
                  {msg.section && (
                    <button
                      onClick={() => {
                        const section =
                          document.getElementById(
                            msg.section
                          );

                        if (section) {
                          setIsOpen(false);

                          setTimeout(() => {
                            window.scrollTo({
                              top:
                                section.offsetTop - 80,
                              behavior: "smooth",
                            });
                          }, 200);
                        }
                      }}
                      className="block mt-2 text-xs underline text-purple-300 hover:text-white"
                    >
                      → Go to{" "}
                      {msg.section
                        .charAt(0)
                        .toUpperCase() +
                        msg.section.slice(1)}
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div
            className="px-3 py-2 flex gap-2 flex-wrap"
            style={{
              borderTop: "1px solid #2a1a4a",
            }}
          >
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => handleSend(s)}
                className="text-xs text-white px-3 py-1 rounded-full hover:scale-105 transition"
                style={{
                  background: "#1e1235",
                  border:
                    "1px solid #8245ec",
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="p-3 flex gap-2"
            style={{
              borderTop:
                "1px solid #8245ec",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                handleSend()
              }
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
            />

            <button
              onClick={() => handleSend()}
              className="text-[#8245ec] hover:text-purple-400"
            >
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;