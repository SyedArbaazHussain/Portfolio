import React from "react";
import headImg from "/me-head.jpg";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="md:flex md:flex-col  md:grid md:grid-cols-11  justify-center items-center w-full h-full md:mt-44 lg:mt-40 mt-32 lg:px-20 lg:px-8">
      <img
        src={headImg}
        alt="Syed Arbaaz Hussain"
        className="rounded-full md:my-10 md:h-96 h-fit lg:col-span-5 md:p-10 "
      />
      <div className="flex flex-col justify-center items-center h-full w-full px-4 sm:px-0 lg:col-span-6">
        <div className="text-center w-full">
          <h1 className="text-6xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-4xl font-bold my-4">
            Hello, <br></br>I&apos;m{" "}
            <span className="leading-relaxed text-blue-700">
              Syed Arbaaz Hussain
            </span>
          </h1>
          <p className="xl:text-sm lg:text-sm md:text-2xl sm:text-3xl xl:text-sm md:mb-8 md:mt-4 xl:mt-3 xl:mb-3 lg:mb-6">
            I&apos;m a{" "}
            <span className="text-blue-700 pl-3">
              Software Developer & Full Stack Developer
            </span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 xl:gap-3 xl:flex-row pt-5">
            <button
              onClick={() => (window.location.href = "#about")}
              className="bg-blue-700 px-5 py-3 lg:px-3 lg:py-2 md:px-4 md:py-2 lg:text-base md:text-sm text-2xl rounded-full font-black lg:font-medium md:font-semibold sm:font-bold dark:text-white text-white xl:text-base md:text-sm sm:text-2xl"
            >
              ABOUT
            </button>
            <button
              onClick={() => (window.location.href = "#projects")}
              className="bg-blue-700 px-5 py-3 lg:px-3 lg:py-2 md:px-4 md:py-2 lg:text-base md:text-sm text-2xl rounded-full font-black lg:font-medium md:font-semibold sm:font-bold dark:text-white text-white xl:text-base md:text-sm sm:text-2xl"
            >
              PROJECTS
            </button>
            {/* <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-blue-700 px-5 py-3 lg:px-3 lg:py-2 md:px-4 md:py-2 lg:text-base md:text-sm text-2xl rounded-full font-black lg:font-medium md:font-semibold sm:font-bold dark:text-white text-white xl:text-base md:text-sm sm:text-2xl"
            >
              CONTACT
            </button> */}
            <button
              onClick={() => (window.location.href = "#blogs")}
              className="bg-blue-700 px-5 py-3 lg:px-3 lg:py-2 md:px-4 md:py-2 lg:text-base md:text-sm text-2xl rounded-full font-black lg:font-medium md:font-semibold sm:font-bold dark:text-white text-white xl:text-base md:text-sm sm:text-2xl"
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