import React, { useState } from "react";
import fallsafe from "../assets/fallsafe.png";
import pcc from "../assets/pcc.png";
import portfolio from "../assets/portfolio.png";

interface Project {
  name: string;
  link: string;
  image: string;
  description: string;
  stars: string;
  forks: string;
  folders: string;
  files: string;
}

const projectList: Project[] = [
  {
    name: "FallSafe-yolov8",
    link: "https://github.com/FallSafe/FallSafe-yolov8",
    image: fallsafe,
    description:
      "A real-time fall detection system using computer vision and machine learning to analyze CCTV footage and alert caregivers for quicker emergency services.",
    stars:
      "https://img.shields.io/github/stars/FallSafe/FallSafe-yolov8?style=flat-square&labelColor=343b41",
    forks:
      "https://img.shields.io/github/forks/FallSafe/FallSafe-yolov8?style=flat-square&labelColor=343b41",
    folders:
      "https://img.shields.io/github/directory-file-count/FallSafe/FallSafe-yolov8?type=dir&label=Folders",
    files:
      "https://img.shields.io/github/directory-file-count/FallSafe/FallSafe-yolov8?type=file&label=Files",
  },
  {
    name: "PumpCare-Connect",
    link: "https://github.com/SyedArbaazHussain/PumpCare-Connect",
    image: pcc,
    description:
      "A comprehensive platform for managing and maintaining pump systems, including monitoring, scheduling maintenance, and generating reports.",
    stars:
      "https://img.shields.io/github/stars/SyedArbaazHussain/PumpCare-Connect?style=flat-square&labelColor=343b41",
    forks:
      "https://img.shields.io/github/forks/SyedArbaazHussain/PumpCare-Connect?style=flat-square&labelColor=343b41",
    folders:
      "https://img.shields.io/github/directory-file-count/SyedArbaazHussain/PumpCare-Connect?type=dir&label=Folders",
    files:
      "https://img.shields.io/github/directory-file-count/SyedArbaazHussain/PumpCare-Connect?type=file&label=Files",
  },
  {
    name: "Portfolio",
    link: "https://github.com/SyedArbaazHussain/Portfolio",
    image: portfolio,
    description:
      "A showcase of various projects and skills, including web development, software and machine learning, providing insights into technologies and functionalities.",
    stars:
      "https://img.shields.io/github/stars/SyedArbaazHussain/Portfolio?style=flat-square&labelColor=343b41",
    forks:
      "https://img.shields.io/github/forks/SyedArbaazHussain/Portfolio?style=flat-square&labelColor=343b41",
    folders:
      "https://img.shields.io/github/directory-file-count/SyedArbaazHussain/Portfolio?type=dir&label=Folders",
    files:
      "https://img.shields.io/github/directory-file-count/SyedArbaazHussain/Portfolio?type=file&label=Files",
  },
];

const Projects: React.FC = () => {
  const [prevIndex, setPrevIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);

  const handleNext = () => {
    setPrevIndex(prevIndex === 0 ? projectList.length - 1 : prevIndex - 1);
    setCurrentIndex(currentIndex === 0 ? projectList.length - 1 : currentIndex - 1);
    setNextIndex(nextIndex === 0 ? projectList.length - 1 : nextIndex - 1);
  };

  const handlePrevious = () => {
    setPrevIndex(prevIndex === projectList.length - 1 ? 0 : prevIndex + 1);
    setCurrentIndex(currentIndex === projectList.length - 1 ? 0 : currentIndex + 1);
    setNextIndex(nextIndex === projectList.length - 1 ? 0 : nextIndex + 1);
  };
  
    return (
      <div className="flex w-full justify-center flex-col text-center overflow-hidden max-sm:px-5 max-md:px-20">
        {/* Mobile Grid View */}
        <div className="hidden max-md:flex flex-col items-center justify-center h-full w-full px-6">
        <h1 className="text-4xl max-sm:text-3xl max-md:text-4xl max-md:font-black font-bold text-center text-gray-800 dark:text-gray-200">
          Projects
          </h1>
          <div className="grid grid-cols-1 gap-6">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="relative shadow-md rounded-lg p-6 flex flex-col items-center"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center dark:opacity-30 opacity-20 rounded-lg"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Content */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">
                  {project.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                  {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline pb-4"
                  >
                    View on GitHub
                  </a>
                  <div className="flex flex-wrap justify-center gap-2 pt-5">
                    <img src={project.stars} className="h-fit w-fit" alt="Stars" />
                    <img src={project.forks} className="h-fit w-fit" alt="Forks" />
                    <img src={project.folders} className="h-fit w-fit" alt="Folders" />
                    <img src={project.files} className="h-fit w-fit" alt="Files" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Desktop Carousel View */}
        <div className="hidden md:flex flex-col items-center justify-center w-full px-10">
          <h1 className="text-6xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 pt-32">
            Projects
          </h1>
          <div className="grid grid-cols-12 gap-5 max-xl:-mx-60 justify-center items-center">
            {/* Previous Project */}
            <div
              className="relative w-full pt-10 pb-20 col-span-3 transition-opacity duration-500"
              style={{
                opacity: 0.5,
                transform: "scale(0.9)",
                maskImage: "linear-gradient(to right, transparent, black)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black)",
              }}
            >
               <div className="flex flex-col justify-center items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
                <img
                  src={projectList[prevIndex].image}
                  className="max-xl:hidden object-cover w-full rounded-3xl"
                  alt={projectList[prevIndex].name}
                />
                <div className="p-7 flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">
                    {projectList[prevIndex].name}
                  </h2>
                  <p>{projectList[prevIndex].description}</p>
                </div>
              </div>
            </div>
  
            {/* Current Project */}
            <div
              className="relative w-full pt-10 pb-20 col-span-6 transition-opacity duration-500"
              style={{ opacity: 1, transform: "scale(1)" }}
            >
               <div className="flex flex-col justify-center items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
                <img
                  src={projectList[currentIndex].image}
                  className="object-cover w-full rounded-3xl"
                  alt={projectList[currentIndex].name}
                />
                <div className="pt-8 pb-1 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">

                    {projectList[currentIndex].name}
                  </h2>
                  <p>{projectList[currentIndex].description}</p>
                  <a
                    href={projectList[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 bg-blue-900 dark:bg-blue-400 py-2 px-4 mx-1 rounded-full text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-400"
                  >
                    View on GitHub
                  </a>
                  <div className="flex flex-wrap justify-center gap-2 pt-5">
                    <img src={projectList[currentIndex].stars} className="h-fit w-fit" alt="Stars" />
                    <img src={projectList[currentIndex].forks} className="h-fit w-fit" alt="Forks" />
                    <img src={projectList[currentIndex].folders} className="h-fit w-fit" alt="Folders" />
                    <img src={projectList[currentIndex].files} className="h-fit w-fit" alt="Files" />
                  </div>
                </div>
              </div>
            </div>
  
            {/* Next Project */}
            <div
              className="relative w-full pt-10 pb-20 col-span-3 transition-opacity duration-500"
              style={{
                opacity: 0.5,
                transform: "scale(0.9)",
                maskImage: "linear-gradient(to left, transparent, black)",
                WebkitMaskImage: "linear-gradient(to left, transparent, black)",
              }}
            >
              <div className="flex flex-col items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
                <img
                  src={projectList[nextIndex].image}
                  className="max-xl:hidden object-cover w-full rounded-3xl"
                  alt={projectList[nextIndex].name}
                />
                 <div className="p-7 flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">
                    {projectList[nextIndex].name}
                  </h2>
                  <p>{projectList[nextIndex].description}</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation Buttons */}
          <div className="absolute  w-full">
            <button
              onClick={handlePrevious}
              className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 p-3 px-7 mx-20 
          bg-gray-800 text-white rounded-full shadow-lg transition duration-200 
          hover:bg-gray-700 dark:bg-gray-600 cursor-pointer"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 p-3 px-7 mx-20 
              bg-gray-800 text-white rounded-full shadow-lg transition duration-200 
              hover:bg-gray-400 dark:bg-gray-600 cursor-pointer"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;