import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Syed Arbaaz Hussain. All rights
          reserved.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-5">
          <a
            href="https://github.com/SyedArbaazHussain/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Github
          </a>
          <a
            href="mailto:arbaaz14122002@gmail.com"
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
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/_arbxxz_"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://discord.com/users/958402736670531585"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Discord
          </a>
          <a
            href="https://www.instagram.com/_.arbxxz_"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://t.me/itsmenaughtyboy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-indigo-800 dark:text-blue-500 hover:text-white"
          >
            Telegram
          </a>
        </div>
        <div className="mt-6">
          <p className="text-xs font-bold text-indigo-800 dark:text-blue-500">
            Designed and developed by Syed Arbaaz Hussain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
