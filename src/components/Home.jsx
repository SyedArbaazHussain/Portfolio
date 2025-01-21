import React from "react";
import headImg from "/me-head.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row max-sm:mt-10 max-md:mt-20 max-lg:-mt-10 md:h-screen md:py-1 lg:py-0 sm:py-3 py-0 w-full justify-center items-center max-md:mb-32">
      <div className="flex justify-center items-center flex-row max-lg:flex-col "> 
        <img
          src={headImg}
          alt="Syed Arbaaz Hussain"
          className="w-full max-w-96 max-md:max-w-72 m-5 rounded-full"
        />
        <div className="flex flex-col justify-center items-center h-full w-full px-4 xl:px-0">
          <div className="text-center w-full px-[2vw]">
            <h1 className="text-6xl max-lg:text-4xl font-bold my-4">
              Hello, I&apos;m{" "}
              <span className="text-blue-700">Syed Arbaaz Hussain</span>
            </h1>
            <p className="text-lg xl:text-2xl mb-8 mt-4">
              I&apos;m a{" "}
              <span className="text-blue-700 pl-3">
                Software Developer, Python Developer, Full Stack Developer
              </span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5 max-sm:gap-3 max-sm:flex-col">
              <button
                onClick={() => (window.location.href = "#about")}
                className="bg-blue-700 px-3 py-2 rounded-full font-medium dark:text-white text-white"
              >
                ABOUT
              </button>
              <button
                onClick={() => (window.location.href = "#projects")}
                className="bg-blue-700 px-3 py-2 rounded-full font-medium dark:text-white text-white"
              >
                PROJECTS
              </button>
              <button
                onClick={() => (window.location.href = "#contact")}
                className="bg-blue-700 px-3 py-2 rounded-full font-medium dark:text-white text-white"
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
