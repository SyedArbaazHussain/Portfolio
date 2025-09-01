import React from "react";
import IBM from "../assets/ibm_icon";

const About = () => {
  const tools = [
    {
      category: "Operating Systems",
      items: [
        {
          name: "Linux",
          icon: "https://img.icons8.com/color/40/000000/linux.png",
        },
        {
          name: "Windows",
          icon: "https://img.icons8.com/?size=40&id=YJfJ0JM5Imsj&format=png&color=000000",
        },
      ],
    },
    {
      category: "Languages & Frameworks",
      items: [
        {
          name: "IBM iSystems",
          icon: IBM
        },
        {
          name: "Python",
          icon: "https://img.icons8.com/color/40/000000/python.png",
        },
        {
          name: "JavaScript",
          icon: "https://img.icons8.com/color/40/000000/javascript.png",
        },
        {
          name: "Java",
          icon: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
        },
        {
          name: "C",
          icon: "https://img.icons8.com/color/40/000000/c.png",
        },
        {
          name: "HTML5",
          icon: "https://img.icons8.com/color/40/000000/html-5.png",
        },
        {
          name: "CSS3",
          icon: "https://img.icons8.com/color/40/000000/css3.png",
        },
        {
          name: "React",
          icon: "https://img.icons8.com/plasticine/40/000000/react.png",
        },
        {
          name: "Node.js",
          icon: "https://img.icons8.com/color/50/000000/nodejs.png",
        },
        {
          name: "Express.js",
          icon: "https://img.icons8.com/?size=40&id=2ZOaTclOqD4q&format=png&color=000000",
        },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        {
          name: "MySQL",
          icon: "https://img.icons8.com/?size=50&id=UFXRpPFebwa2&format=png&color=000000",
        },
        {
          name: "MongoDB",
          icon: "https://img.icons8.com/color/40/000000/mongodb.png",
        },
        // {
        //   name: "Redis",
        //   icon: "https://img.icons8.com/color/40/000000/redis.png",
        // },
      ],
    },
    {
      category: "DevOps & Others",
      items: [
        { name: "Git", icon: "https://img.icons8.com/color/40/000000/git.png" },
        {
          name: "GitHub",
          icon: "https://img.icons8.com/fluent/40/000000/github.png",
        },
        {
          name: "Docker",
          icon: "https://img.icons8.com/color/40/000000/docker.png",
        },
        {
          name: "YOLO",
          icon: "https://avatars.githubusercontent.com/u/26833451?s=40&v=4",
        },
        {
          name: "OpenCV",
          icon: "https://img.icons8.com/?size=40&id=bpip0gGiBLT1&format=png&color=000000",
        },
        {
          name: "Conda",
          icon: "https://img.icons8.com/?size=40&id=F4uMFPZgS0gt&format=png&color=000000",
        },
        {
          name: "Jupyter",
          icon: "https://img.icons8.com/?size=40&id=J0SgMWzAxqFj&format=png&color=000000",
        },
        {
          name: "UiPath",
          icon: "https://img.icons8.com/?size=100&id=HhCUhcFcSjU8&format=png&color=000000",
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen pt-40 max-md:px-10 max-lg:px-16 max-xl:px-32 xl:px-60 w-full justify-center flex-col text-center overflow-hidden">
      {/* Heading */}
      <h1 className="text-6xl max-lg:text-5xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        About
      </h1>
      <h2 className="font-semibold text-orange-600 opacity-90 dark:text-orange-400 mb-6 text-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl">
        Hello! I am an engineer skilled in technical thinking, debugging,
        troubleshooting, and problem-solving. With expertise in{" "}
        <span className="font-bold text-indigo-800 dark:text-blue-500 mb-6 text-3xl max-md:text-xl max-lg:text-2xl lg:px-2 px-1">
          Web Development
        </span>
        ,
        <span className="font-bold text-indigo-800 dark:text-blue-500 mb-6 text-3xl max-md:text-xl max-lg:text-2xl lg:px-2 px-1">
          Software Development
        </span>
        ,
        <span className="font-bold text-indigo-800 dark:text-blue-500 mb-6 text-3xl max-md:text-xl max-lg:text-2xl lg:px-2 px-1">
          Databases
        </span>
        , I enjoy exploring new technologies and creating innovative projects.
        My passion lies in using programming to solve challenges and transform
        ideas into practical, impactful solutions.
      </h2>

      {/* Description */}
      <p className="leading-relaxed text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
        Welcome to my portfolio! I&lsquo;m a passionate developer who loves
        exploring new technologies and building innovative projects. I enjoy
        solving problems and bringing ideas to life through code.
      </p>

      {/* Skill Section */}
      <div className="px-6 lg:px-12 max-md:pt-5 pt-10 max-md:pb-5 pb-7">
        <h2 className="text-4xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-md:font-black font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          🔧 Technologies, Tools & Frameworks Mastered
        </h2>
        <div className="space-y-12">
          {tools.map((toolCategory, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">
                {toolCategory.category}
              </h3>
              <div className="flex justify-center flex-wrap gap-6">
                {toolCategory.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center space-y-2 text-center text-sm md:text-base"
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="h-10 w-fit md:h-12 md:w-fit"
                    />
                    <span className="text-gray-600 dark:text-gray-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-8 text-left mx-auto max-w-3xl">
        <h3 className="font-bold mb-4 text-xl md:text-2xl">🏆 Achievements</h3>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-base md:text-lg">
            <strong>Top Contributor:</strong> Recognized as a top contributor in
            the FallSafe project for outstanding contributions to its
            development.
          </li>
          <li className="text-base md:text-lg">
            <strong>Hackathon Winner:</strong> Secured first place in a college
            Ideathon for the FallSafe project.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
