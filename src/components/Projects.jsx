import React, { useState } from "react";
import fallsafe from "../assets/fallsafe.png";
import pcc from "../assets/pcc.png";
import portfolio from "../assets/portfolio.png";

const projects = [
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

const Projects = () => {
  const [prevIndex, setPrevIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);

  const handleNext = () => {
    setPrevIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
    setNextIndex((nextIndex) =>
      nextIndex === 0 ? projects.length - 1 : nextIndex - 1
    );
  };

  const handlePrevious = () => {
    setPrevIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
    setNextIndex((nextIndex) =>
      nextIndex === projects.length - 1 ? 0 : nextIndex + 1
    );
  };
  return (
    <div className="flex w-full justify-center flex-col text-center overflow-hidden max-sm:px-5 max-md:px-20">
      {/* GRID */}
      <div className="hidden max-md:flex flex-col items-center justify-center h-full w-full px-6">
        <h1 className="text-4xl max-sm:text-3xl max-md:text-4xl max-md:font-black font-bold text-center text-gray-800 dark:text-gray-200">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center dark:opacity-30 opacity-20 rounded-lg"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              ></div>
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
                  <img
                    src={project.stars}
                    className="w-fit h-fit"
                    alt="Stars"
                  />
                  <img
                    src={project.forks}
                    className="w-fit h-fit"
                    alt="Forks"
                  />
                  <img
                    src={project.folders}
                    className="w-fit h-fit"
                    alt="Folders"
                  />
                  <img
                    src={project.files}
                    className="w-fit h-fit"
                    alt="Files"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="hidden md:flex flex-col items-center justify-center w-full px-10">
        <h1 className="text-6xl max-lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-200 pt-32">
          Projects
        </h1>
        <div className="grid grid-cols-12 gap-5 max-xl:-mx-60 justify-center items-center">
          {/* Previous Project */}
          <div
            className="relative w-full pt-10 pb-20 transition-opacity duration-500 col-span-3"
            style={{
              opacity: 0.5,
              transform: "scale(0.9)",
              maskImage: "linear-gradient(to right, transparent, black)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black)",
            }}
          >
            <div className="flex flex-col justify-center items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
              <img
                src={projects[prevIndex].image}
                className="max-xl:hidden object-cover w-full rounded-3xl"
                alt={projects[prevIndex].name}
              />
              <div className="p-7 flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">
                  {projects[prevIndex].name}
                </h2>
                {projects[prevIndex].description}
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
                src={projects[currentIndex].image}
                className="object-cover w-full rounded-3xl"
                alt={projects[currentIndex].name}
              />
              <div className="pt-8 pb-1 flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">
                  {projects[currentIndex].name}
                </h2>
                <div>{projects[currentIndex].description}</div>
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 bg-blue-900 dark:bg-blue-400 py-2 px-4 mx-1 rounded-full text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-400"
                >
                  View on GitHub
                </a>
                <div className="flex flex-wrap justify-center gap-2 pt-5">
                  <img
                    src={projects[currentIndex].stars}
                    className="w-fit h-fit"
                    alt="Stars"
                  />
                  <img
                    src={projects[currentIndex].forks}
                    className="w-fit h-fit"
                    alt="Forks"
                  />
                  <img
                    src={projects[currentIndex].folders}
                    className="w-fit h-fit"
                    alt="Folders"
                  />
                  <img
                    src={projects[currentIndex].files}
                    className="w-fit h-fit"
                    alt="Files"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Next Project */}
          <div
            className="relative w-full pt-10 pb-20 transition-opacity duration-500 col-span-3"
            style={{
              opacity: 0.5, // Fully visible
              transform: "scale(0.9)",
              maskImage: "linear-gradient(to left, transparent, black)",
              WebkitMaskImage: "linear-gradient(to left, transparent, black)",
            }}
          >
            <div className="flex flex-col justify-center items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
              <img
                src={projects[nextIndex].image}
                className="max-xl:hidden object-cover w-full rounded-3xl"
                alt={projects[nextIndex].name}
              />
              <div className="p-7 flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4 text-center">
                  {projects[nextIndex].name}
                </h2>
                {projects[nextIndex].description}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute w-full">
          <a
            onClick={handlePrevious}
            className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 p-3 px-7 mx-20 
          bg-gray-800 text-white rounded-full shadow-lg transition duration-200 
          hover:bg-gray-700 dark:bg-gray-600 cursor-pointer"
          >
            {/* &#8592;  */}◀
          </a>
          <a
            onClick={handleNext}
            className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 p-3 px-7 mx-20 
            bg-gray-800 text-white rounded-full shadow-lg transition duration-200 
            hover:bg-gray-400 dark:bg-gray-600 cursor-pointer"
          >
            {/* &#8594;  */}▶
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
