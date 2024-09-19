import React from 'react'
import Image from 'next/image'
import headImg from '/me-head-circle.png'

const Home = () => {
    return (
      <div className='h-[91vh] w-full'>
        <div className='flex flex-col justify-center items-center h-full w-full px-4 xl:px-0'>
          <div className='text-center w-full xl:w-2/3'>
          <h1 className='text-4xl xl:text-6xl font-bold mb-4'>Hello, I'm <span className='text-blue-500'>Surya</span></h1>
          <p className='text-lg xl:text-2xl mb-8'>I'm a full stack developer</p>
          <div className='flex flex-wrap justify-center items-center gap-4 mb-8'>
            <a href="#about" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>About Me</a>
            <a href="#projects" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Projects</a>
            <a href="#contact" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Contact</a>
            <a href="#footer" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>Footer</a>
          </div>
          <div className='flex justify-center items-center'>
            <img src={headImg} alt="Surya" className='w-48 h-48 xl:w-64 xl:h-64 object-cover rounded-full' />
          </div>
          <div className='flex justify-center items-center'>
            <div className='relative w-48 h-48 xl:w-64 xl:h-64'>
              <Image
                src={headImg}
                alt="Surya"
                layout="fill"
                objectFit="cover"
                className='rounded-full'
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
        </div>
      </div>
  )
}

// Helper function to generate SVG
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

// Helper function to convert SVG to Base64
const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default Home