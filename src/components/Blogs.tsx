import React, { useState } from "react";
import yolov8 from "../assets/yolov8.png";
import react from "../assets/react.png";
import fullstack from "../assets/fullstack.png";

const blogs = [
  {
    name: "YOLOv8 — Experience and Conclusion",
    image: yolov8,
    link: "https://medium.com/@arbaaz14122002/yolov8-experience-and-conclusion-9c13b74ea668",
    description:
      "This blog explores YOLOv8's advancements in real-time object detection, highlighting features like single-stage detection, better architecture, and versatility, with applications in security, healthcare, retail, and autonomous systems.",
  },
  {
    name: "The Evolution of React and Its Ecosystem",
    link: "https://medium.com/@arbaaz14122002/the-evolution-of-react-and-its-ecosystem-f3927a70ebbb",
    image: react,
    description:
      "This blog highlights React's evolution, key features, ecosystem tools like Redux, and innovations like Hooks, showcasing its impact on modern, scalable, and interactive UI development.",
  },
  {
    name: "Effective Strategies for Full-Stack Development",
    link: "https://medium.com/@arbaaz14122002/effective-strategies-for-full-stack-development-5617ad951781",
    image: fullstack,
    description:
      "This blog outlines strategies for successful full-stack development, covering front-end and back-end essentials, stack selection, version control, responsive design, testing, performance optimization, and the importance of continuous learning.",
  },
];

interface Blog {
  name: string;
  description: string;
  image: string;
  link: string;
}

const Blogs: React.FC = () => {
  const [prevIndex, setPrevIndex] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(2);

  const handleNext = () => {
    setPrevIndex(prevIndex === 0 ? blogs.length - 1 : prevIndex - 1);
    setCurrentIndex(currentIndex === 0 ? blogs.length - 1 : currentIndex - 1);
    setNextIndex(nextIndex === 0 ? blogs.length - 1 : nextIndex - 1);
  };

  const handlePrevious = () => {
    setPrevIndex(prevIndex === blogs.length - 1 ? 0 : prevIndex + 1);
    setCurrentIndex(currentIndex === blogs.length - 1 ? 0 : currentIndex + 1);
    setNextIndex(nextIndex === blogs.length - 1 ? 0 : nextIndex + 1);
  };

  return (
    <div className="flex mt-10 w-full justify-center flex-col text-center overflow-hidden px-5 md:px-20">
      {/* Mobile Grid */}
      <div className="md:hidden flex flex-col items-center justify-center w-full p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">
          Blogs
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((project, index) => (
            <div
              key={index}
              className="relative shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View on Medium
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex flex-col items-center justify-center w-full px-10">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 pt-32">
          Blogs
        </h1>
        <div className="grid grid-cols-12 gap-5 justify-center items-center">
          {/* Previous */}
          <div
            className="relative w-full pt-10 pb-20 col-span-3 transition-opacity duration-500"
            style={{
              opacity: 0.5,
              transform: "scale(0.9)",
              maskImage: "linear-gradient(to right, transparent, black)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black)",
            }}
          >
            <div className="flex flex-col items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
              <img
                src={blogs[prevIndex].image}
                className="hidden xl:block object-cover w-full rounded-3xl"
                alt={blogs[prevIndex].name}
              />
              <div className="p-7">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                  {blogs[prevIndex].name}
                </h2>
                <p>{blogs[prevIndex].description}</p>
              </div>
            </div>
          </div>

          {/* Current */}
          <div
            className="relative w-full pt-10 pb-20 col-span-6 transition-opacity duration-500"
            style={{ opacity: 1, transform: "scale(1)" }}
          >
            <div className="flex flex-col items-center p-6 bg-blue-400 dark:bg-blue-900 dark:bg-opacity-70 rounded-3xl">
              <img
                src={blogs[currentIndex].image}
                className="object-cover w-full rounded-3xl"
                alt={blogs[currentIndex].name}
              />
              <div className="pt-8 pb-1">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                  {blogs[currentIndex].name}
                </h2>
                <p>{blogs[currentIndex].description}</p>
                <a
                  href={blogs[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 bg-blue-900 dark:bg-blue-400 py-2 px-4 rounded-full text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-300"
                >
                  View on Medium
                </a>
              </div>
            </div>
          </div>

          {/* Next */}
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
                src={blogs[nextIndex].image}
                className="hidden xl:block object-cover w-full rounded-3xl"
                alt={blogs[nextIndex].name}
              />
              <div className="p-7">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                  {blogs[nextIndex].name}
                </h2>
                <p>{blogs[nextIndex].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="relative w-full">
          <button
            onClick={handlePrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 px-7 mx-20 bg-gray-800 text-white rounded-full shadow-lg transition duration-200 hover:bg-gray-700 dark:bg-gray-600"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 px-7 mx-20 bg-gray-800 text-white rounded-full shadow-lg transition duration-200 hover:bg-gray-400 dark:bg-gray-600"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
