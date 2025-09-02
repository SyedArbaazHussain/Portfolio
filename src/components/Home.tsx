import React from "react";
import headImg from "/me-head.jpg";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="lg:flex lg:flex-col  lg:grid lg:grid-cols-11  justify-center items-center w-full h-full lg:mt-44 md:mt-40 mt-32 md:px-20 md:px-8">
      <img
        src={headImg}
        alt="Syed Arbaaz Hussain"
        className="rounded-full lg:my-10 lg:max-h-96 h-fit md:col-span-5 lg:p-10 "
      />
      <div className="flex flex-col justify-center items-center h-full w-full px-4 sm:px-0 lg:col-span-6">
        <div className="text-center w-full">
          <h1 className="text-6xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl font-bold my-4">
            Hello, <br></br>I&apos;m{" "}
            <span className="leading-relaxed text-blue-700">
              Syed Arbaaz Hussain
            </span>
          </h1>
          <p className="sm:text-xl md:text-xl lg:text-2xl xl:text-3xl sm:text-xl lg:mb-8 lg:mt-4 sm:mt-3 sm:mb-3 md:mb-6">
            I&apos;m a{" "}
            <span className="text-blue-700 pl-3">
              Software Developer & Full Stack Developer
            </span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-3 sm:flex-row pt-5">
            <button
              onClick={() => (window.location.href = "#about")}
              className="bg-blue-700 px-5 py-3 md:px-3 md:py-2 lg:px-4 lg:py-2 md:text-base lg:text-xl text-2xl rounded-full font-black md:font-medium lg:font-semibold xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              ABOUT
            </button>
            <button
              onClick={() => (window.location.href = "#projects")}
              className="bg-blue-700 px-5 py-3 md:px-3 md:py-2 lg:px-4 lg:py-2 md:text-base lg:text-xl text-2xl rounded-full font-black md:font-medium lg:font-semibold xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              PROJECTS
            </button>
            {/* <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-blue-700 px-5 py-3 md:px-3 md:py-2 lg:px-4 lg:py-2 md:text-base lg:text-xl text-2xl rounded-full font-black md:font-medium lg:font-semibold xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              CONTACT
            </button> */}
            <button
              onClick={() => (window.location.href = "#blogs")}
              className="bg-blue-700 px-5 py-3 md:px-3 md:py-2 lg:px-4 lg:py-2 md:text-base lg:text-xl text-2xl rounded-full font-black md:font-medium lg:font-semibold xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              BLOGS
            </button>
          </div>
          <div className="md:hidden">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;