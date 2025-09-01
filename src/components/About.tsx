import React from "react";
import IBM from "../assets/ibm.svg";
import AS400 from "../assets/AS400.svg";
import DB2400 from "../assets/DB2400.svg";
import OS400 from "../assets/OS400.svg";

interface ToolItem {
  name: string;
  icon: string;
}

interface ToolCategory {
  category: string;
  items: ToolItem[];
}

const About: React.FC = () => {
  const tools: ToolCategory[] = [
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
        {
          name: "OS400",
          icon: OS400,
        },
      ],
    },
    {
      category: "Languages & Frameworks",
      items: [
        { name: "IBM iSystems", icon: IBM },
        { name: "AS400", icon: AS400 },
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
        {
          name: "DB2/400",
          icon: DB2400,
        },
      ],
    },
    {
      category: "DevOps & Others",
      items: [
        {
          name: "Git",
          icon: "https://img.icons8.com/color/40/000000/git.png",
        },
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
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4 pt-40 text-center overflow-hidden sm:px-10 md:px-16 xl:px-60">
      <h1 className="mb-6 text-5xl font-bold text-gray-800 dark:text-gray-200 sm:text-6xl">
        About
      </h1>

      <h2 className="mb-6 text-xl font-semibold text-orange-600 opacity-90 dark:text-orange-400 sm:text-2xl md:text-3xl">
        Hello! I am an engineer skilled in technical thinking, debugging,
        troubleshooting, and problem-solving. With expertise in{" "}
        <span className="font-bold text-indigo-800 dark:text-blue-500">Web Development</span>,{" "}
        <span className="font-bold text-indigo-800 dark:text-blue-500">Software Development</span>,{" "}
        <span className="font-bold text-indigo-800 dark:text-blue-500">Databases</span>, I enjoy
        exploring new technologies and creating innovative projects. My passion lies in using
        programming to solve challenges and transform ideas into practical, impactful solutions.
      </h2>

      <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg md:text-xl">
        Welcome to my portfolio! I’m a passionate developer who loves exploring new technologies and
        building innovative projects. I enjoy solving problems and bringing ideas to life through
        code.
      </p>

      <div className="w-full pt-10 pb-7 sm:px-6 lg:px-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-200 sm:text-4xl">
          🔧 Technologies, Tools & Frameworks Mastered
        </h2>

        <div className="space-y-12">
          {tools.map((toolCategory, index) => (
            <div key={index}>
              <h3 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300 sm:text-2xl">
                {toolCategory.category}
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {toolCategory.items.map((item, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2 text-sm md:text-base">
                    <img src={item.icon} alt={item.name} className="h-10 md:h-12" />
                    <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 max-w-3xl text-left">
        <h3 className="mb-4 text-xl font-bold md:text-2xl">🏆 Achievements</h3>
        <ul className="pl-6 space-y-4 list-disc">
          <li className="text-base md:text-lg">
            <strong>Top Contributor:</strong> Recognized as a top contributor in the FallSafe project
            for outstanding contributions to its development.
          </li>
          <li className="text-base md:text-lg">
            <strong>Hackathon Winner:</strong> Secured first place in a college Ideathon for the
            FallSafe project.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;