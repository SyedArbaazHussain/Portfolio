import React, { useState, useEffect } from 'react'
import headImg from '/me-head-circle-thumb.png'

const Home = () => {
  const titles = ["Full Stack Developer", "React Enthusiast", "Node.js Expert", "UI/UX Designer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [titles.length]);

  return (
    <div className='h-[100vh] pt-[1vh] w-full'>
      <div className='flex flex-col justify-center items-center h-full w-full px-4 xl:px-0'>
        <div className='text-center w-full xl:w-2/3'>
          <h1 className='text-4xl xl:text-6xl font-bold mb-4'>Hello, I'm <span className='text-blue-500'>Syed Arbaaz Hussain</span></h1>
          <p className='text-lg xl:text-2xl mb-8 '>I'm a <span className='text-blue-500 font-bold'>{titles[currentTitleIndex]}</span></p>
          <div className='flex flex-wrap justify-center items-center gap-4 mb-8'>
              <button onClick={() => window.location.href='#about'} className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base">ABOUT</button>
              <button onClick={() => window.location.href='#projects'} className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base">PROJECTS</button>
              <button onClick={() => window.location.href='#contact'} className="bg-blue-500 px-3 py-2 rounded-full text-xs font-medium dark:text-white text-black sm:text-sm md:text-base">CONTACT</button>
          </div>
          <div className='flex justify-center items-center'>
            <img src={headImg} alt="Syed Arbaaz Hussain" className='w-48 h-48 xl:w-64 xl:h-64 object-cover rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home