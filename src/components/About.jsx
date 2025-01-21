import React from "react";

const About = () => {
  return (
    <div className="flex h-screen w-full justify-center flex-col max-sm:flex-col max-md:flex-col text-center">
      <h2 className="font-semibold text-orange-400 mb-4">
        Hi there, I&lsquo;m a<br></br>
        <span className="text-blue-700 pl-3">
          Software Developer, Python Developer, Full Stack Developer
        </span>
      </h2>
      <p className="leading-relaxed">
        Welcome to my portfolio! I&lsquo;m a passionate developer who loves
        exploring new technologies and building innovative projects. I enjoy
        solving problems and bringing ideas to life through code.
      </p>

      <div className="mt-8 text-left">
        <h3 className="font-bold mb-4">🌟 What I&lsquo;m Currently Learning</h3>
        <ul className="list-disc pl-6">
          <li>
            <img
              src="https://img.icons8.com/color/100/000000/mongodb.png"
              alt="MongoDB"
              className="inline-block mr-2 max-sm:w-8 max-md:w-9"
            />
            MongoDB
          </li>
          <li>
            <img
              src="https://img.icons8.com/color/100/000000/redis.png"
              alt="Redis"
              className="inline-block mr-2 max-sm:w-8 max-md:w-9"
            />
            Redis
          </li>
        </ul>
      </div>

      <div className="mt-8 text-left">
        <h3 className="font-bold mb-4">🏆 Achievements</h3>
        <ul className="list-disc pl-6">
          <li>
            <strong>Top Contributor:</strong> Recognized as a top contributor in
            the FallSafe project for outstanding contributions to its
            development.
          </li>
          <li>
            <strong>Hackathon Winner:</strong> Secured first place in a college
            Ideathon for the FallSafe project.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
