import React from "react";
import headImg from "/me-head.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen md:py-1 lg:py-0 sm:py-3 py-0 w-full justify-center items-center">
      <div className="flex justify-center items-center flex-row max-lg:flex-col ">
        <img
          src={headImg}
          alt="Syed Arbaaz Hussain"
          className="w-full max-w-96 max-md:max-w-72 m-5 rounded-full"
        />
        <div className="flex flex-col justify-center items-center h-full w-full px-4 xl:px-0">
          <div className="text-center w-full">
            <h1 className="text-7xl max-md:text-4xl max-lg:text-5xl font-bold my-4">
              Hello, <br></br>I&apos;m{" "}
              <span className="leading-relaxed text-blue-700">Syed Arbaaz Hussain</span>
            </h1>
            <p className="text-3xl max-sm:text-xl lg:mb-8 lg:mt-4 max-sm:mt-3 max-sm:mb-3 max-md:mb-6">
              I&apos;m a{" "}
              <span className="text-blue-700 pl-3">
                Software Developer & Full Stack Developer
              </span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-5 max-sm:gap-3 max-sm:flex-col">
              <button
                onClick={() => (window.location.href = "#about")}
                className="bg-blue-700 px-5 py-3 max-md:px-3 max-md:py-2 max-lg:px-4 max-lg:py-2 max-md:text-base max-lg:text-xl text-2xl rounded-full font-extrabold max-md:font-medium max-lg:font-semibold max-xl:font-bold dark:text-white text-white"
              >
                ABOUT
              </button>
              <button
                onClick={() => (window.location.href = "#projects")}
                className="bg-blue-700 px-5 py-3 max-md:px-3 max-md:py-2 max-lg:px-4 max-lg:py-2 max-md:text-base max-lg:text-xl text-2xl rounded-full font-extrabold max-md:font-medium max-lg:font-semibold max-xl:font-bold dark:text-white text-white"
              >
                PROJECTS
              </button>
              <button
                onClick={() => (window.location.href = "#contact")}
                className="bg-blue-700 px-5 py-3 max-md:px-3 max-md:py-2 max-lg:px-4 max-lg:py-2 max-md:text-base max-lg:text-xl text-2xl rounded-full font-extrabold max-md:font-medium max-lg:font-semibold max-xl:font-bold dark:text-white text-white"
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
