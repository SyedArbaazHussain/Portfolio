import React from "react";
import headImg from "/me-head.jpg";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="max-md:flex max-md:flex-col  md:grid md:grid-cols-11 lg:grid-cols-7 xl:grid-cols-5  justify-center items-center w-full h-full xl:mt-20 lg:mt-32 md:mt-20 mt-20 ">
      <img
        src={headImg}
        alt="Syed Arbaaz Hussain"
        className="rounded-full p-10 m-auto max-sm:max-h-64 max-md:max-h-72 max-lg:max-h-96 h-fit md:col-span-5 lg:col-span-3 xl:col-span-2"
      />
      <div className="flex flex-col justify-center items-center h-full w-full px-4 xl:px-0 md:col-span-6 lg:col-span-4 xl:col-span-3">
        <div className="text-center w-full">
          <h1 className="lg:text-4xl xl:text-5xl  max-lg:text-4xl max-md:text-4xl max-sm:text-3xl max-xl:font-semibold font-bold my-4">
            Hello, <br></br>I&apos;m{" "}
            <span className="leading-relaxed text-blue-700">
              Syed Arbaaz Hussain
            </span>
          </h1>
          <p className="sm:text-xl md:text-xl lg:text-2xl xl:text-3xl max-sm:text-xl lg:mb-8 lg:mt-4 max-sm:mt-3 max-sm:mb-3 max-md:mb-6">
            I&apos;m a{" "}
            <span className="text-blue-700 pl-3">
              Software Developer & Full Stack Developer
            </span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-5 max-sm:gap-3 max-sm:flex-col pt-5">
            <button
              onClick={() => (window.location.href = "#about")}
              className="bg-blue-700 px-5 py-3 max-md:px-3 max-md:py-1 max-lg:px-4 max-lg:py-2 max-md:text-base max-lg:text-xl text-2xl rounded-full max-md:font-medium max-lg:font-semibold max-xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              ABOUT
            </button>
            <button
              onClick={() => (window.location.href = "#projects")}
              className="bg-blue-700 px-5 py-3 max-md:px-3 max-md:py-1 max-lg:px-4 max-lg:py-2 max-md:text-base max-lg:text-xl text-2xl rounded-full max-md:font-medium max-lg:font-semibold max-xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              PROJECTS
            </button>
            <button
              onClick={() => (window.location.href = "#contact")}
              className="bg-blue-700 px-5 py-3 max-md:px-3 max-md:py-1 max-lg:px-4 max-lg:py-2 max-md:text-base max-lg:text-xl text-2xl rounded-full max-md:font-medium max-lg:font-semibold max-xl:font-bold dark:text-white text-white sm:text-base lg:text-xl xl:text-2xl"
            >
              CONTACT
            </button>
          </div>
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
