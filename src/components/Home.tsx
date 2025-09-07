import React from "react";
import headImg from "../assets/me-home.png";
import {Contact} from "./Contact";
interface Skill {
id: number;
name: string;
}

const skillList: Skill[] = [
{
  id: 1,
  name: "Software Developer"
},
{
  id:2,
  name: "FullStack Developer"
},
{
  id:3,
  name: "AS400 Developer"
},
{
  id:4,
  name: "Java Developer"
},
{
  id:5,
  name: "Python Developer"
},
];

const Home: React.FC = () => {
  return (
        <div className="flex flex-col lg:grid lg:grid-cols-11 justify-center items-center w-full h-full mt-4 md:mt-7 lg:mt-30 px-5 md:px-20">
    <div className="rounded-[10px] sm:rounded-[20px] md:rounded-[40px] lg:rounded-[55px] xl:rounded-[70px] my-5 lg:my-0 w-[90%] p-1 lg:p-3
                bg-[radial-gradient(closest-side,var(--tw-gradient-stops))]
                from-blue-600 via-sky-500 to-cyan-400
                dark:from-slate-800 dark:via-slate-900 dark:to-black md:col-span-3">

          <img
            src={headImg}
            alt="Syed Arbaaz Hussain"
            className="my-3 rounded-[10px] sm:rounded-[20px] md:rounded-[40px] lg:rounded-[55px] xl:rounded-[70px] max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96 xl:max-h-[600px] justify-center items-center"
          />

      </div>
      <div className="flex flex-col justify-center items-center h-full w-full pl-4 sm:pl-16 lg:col-span-8">
        <div className="text-left w-full">
          <h1 className="my-4 text-left">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
              Hello,
            </p>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold">
            I&apos;m  <p className="leading-relaxed text-blue-600 text-shadow-blue-900 dark:text-blue-500 dark:text-shadow-blue-800 text-shadow-lg sm:ml-1 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold">
                          Syed Arbaaz Hussain
                      </p>
            </div>
          </h1>
          {/* Marquee */}
          <div className="lg:mt-4 mt-3 sm:mt-2 mb-2 sm:mb-3 lg:mb-5 rounded-4xl">
            <div
              className="relative overflow-hidden pause-on-hover rounded-4xl"
              style={{ ["--marquee-duration" as any]: "15s" }}
            >
              <div className="animate-marquee flex flex-nowrap gap-3 w-max">
                {/* Tape A */}
                {skillList.map((skill) => (
                  <p
                    key={`a-${skill.id}`}
                    className="px-3 py-1 rounded-full bg-blue-700/10 dark:bg-blue-800/50 text-blue-700 dark:text-white text-sm md:text-base whitespace-nowrap"
                  >
                    {skill.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-2 sm:flex-row sm:pt-5">
            <button
              onClick={() => (window.location.href = "#about")}
              className="bg-blue-700 hover:bg-white/50 dark:hover:bg-white/80 px-3 md:px-4 xl:px-5 py-2 text-xs md:text-sm lg:text-md rounded-full font-black hover:text-blue-700 dark:text-white dark:hover:text-blue-600 text-white sm:text-base xl:text-xl hover:drop-shadow-black hover:drop-shadow-2xl cursor-hand transition-transform duration-300 transform hover:scale-110"
            >
              ABOUT
            </button>
            <button
              onClick={() => (window.location.href = "#projects")}
            className="bg-blue-700 hover:bg-white/50 dark:hover:bg-white/80 xl:px-5 sm:px-2 py-1 lg:py-2 text-base md:text-md lg:text-xl rounded-full font-black hover:text-blue-700 dark:text-white dark:hover:text-blue-600 text-white sm:text-base xl:text-xl hover:drop-shadow-black hover:drop-shadow-2xl cursor-hand transition-transform duration-300 transform hover:scale-110"
            >  
            
              PROJECTS
            </button>
            <button
              onClick={() => (window.location.href = "#contact")}
            className="bg-blue-700 hover:bg-white/50 dark:hover:bg-white/80 xl:px-5 sm:px-2 py-1 lg:py-2 text-base md:text-md lg:text-xl rounded-full font-black hover:text-blue-700 dark:text-white dark:hover:text-blue-600 text-white sm:text-base xl:text-xl hover:drop-shadow-black hover:drop-shadow-2xl cursor-hand transition-transform duration-300 transform hover:scale-110"
            >  
            
              CONTACT
            </button>
            <button
              onClick={() => (window.location.href = "#blogs")}
            className="bg-blue-700 hover:bg-white/50 dark:hover:bg-white/80 xl:px-5 sm:px-2 py-1 lg:py-2 text-base md:text-md lg:text-xl rounded-full font-black hover:text-blue-700 dark:text-white dark:hover:text-blue-600 text-white sm:text-base xl:text-xl hover:drop-shadow-black hover:drop-shadow-2xl cursor-hand transition-transform duration-300 transform hover:scale-110"
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