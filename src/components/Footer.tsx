import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Syed Arbaaz Hussain. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-5">
          <a
            href="https://github.com/SyedArbaazHussain/"
            target="_blank"
           m"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/syed-arbaaz-hussain-7267ab228"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
              className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Discord
text-indigo-800 dark:text-blue-eveloped by Syed Arbaaz Hussain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;