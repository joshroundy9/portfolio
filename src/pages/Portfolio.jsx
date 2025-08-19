import liveIcon from '../assets/liveicon.png';
import githubIcon from '../assets/githubicon.png';
import shankIcon from '../assets/shanklogo.png';

import shankDiagram from '../assets/portfolioawsdiagram.png';
import austin from '../assets/austin.png';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Portfolio() {
  const [showDBDiagram, setShowDBDiagram] = useState(false);
  return (
    <div className="p-4 sm:p-8 mt-4 w-full flex items-start justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center mb-2 gap-4">
            <div className="font-bold text-xl md:text-3xl">Portfolio Website</div>
            <div className='flex flex-row items-center justify-center gap-6 '>
                <a href="https://joshroundy.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={liveIcon} alt="Link" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://github.com/joshroundy9/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-4 mb-8'>
              <span className="text-blue-500 text-sm underline underline-offset-3">React.js</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Vite.js</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Tailwind CSS</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">AWS</span>
        </div>
        <div className="w-full flex flex-col items-start justify-start max-w-7xl text-start">
            <div className='flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Introduction
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    I decided to create a portfolio website because, although
                    I’ve never specialized in front-end development, I wanted
                    to challenge myself and grow in that area. Most of my experience
                    has been on the back end or with full-stack tasks that didn’t require
                    much attention to UI or styling. Building this site gave me
                    a focused opportunity to sharpen my skills in <a 
                    href="https://tailwindcss.com/" target="_blank" className="underline">Tailwind CSS</a> and <a 
                    href="https://reactjs.org/" target="_blank" className="underline">React.js</a>—two technologies I’ve been wanting to get
                    more comfortable with. Beyond just showcasing my work,
                    the portfolio itself became a hands-on project for learning how
                    to design clean, intuitive websites.
                    </p>
                </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8 md:mb-12'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Project Overview & Design
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    The website was built using <a href="https://vitejs.dev/" target="_blank" className="underline">Vite.js</a> to create the code skeleton and <a 
                    href="https://reactjs.org/" target="_blank" className="underline">React.js</a> for the UI. I chose <a href="https://tailwindcss.com/" target="_blank" className="underline">Tailwind CSS</a> for
                    styling because after developing CHERRY I was sick of writing massive CSS
                     files and heard great things about putting style in the HTML.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    When I started this project, I knew I wanted to create something
                    with personality while still including generous detail 
                    about my projects, experience, and skills.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 md:mb-8">
                    After creating the site, I deployed it on AWS using <a href="https://aws.amazon.com/s3/" target="_blank" className="underline">S3</a> for hosting and <a href="https://aws.amazon.com/cloudfront/" target="_blank" className="underline">CloudFront</a> for CDN.
                    This setup allows for fast, reliable access to the site globally.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg mb-8 md:mb-0'>
                    <button onClick={() => setShowDBDiagram(true)} className="focus:outline-none">
                        <img src={shankDiagram} alt="Database Diagram" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showDBDiagram && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowDBDiagram(false)}>
                    <img src={shankDiagram} alt="Database Diagram Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowDBDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Conclusion
                    </h3>
                    <p className="text-gray-600 text-lg mt-4">
                    My goal in creating this portfolio was to not only showcase my work but also to
                    demonstrate my growth as a developer. I wanted to create a site that reflects
                    my personality while also being functional and easy to navigate.
                    I’m proud of how it turned out and hope it gives you a good sense of who I am and what I do.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    While this is the simplest of my projects, it was a great learning experience
                    and I’m excited to continue building on it in the future. I plan to keep adding
                    new projects and updates as I continue to grow my skills and career.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        For an extended list of my projects, please check out my <a href="https://github.com/joshroundy9" target="_blank" className="underline">GitHub</a>.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg md:mb-12'>
                    <img src={austin} alt="Austin, TX" className="w-full h-auto max-w-lg" />
                </div>
            </div>
            <Link
                to="/projects"
                className={`mt-16 self-center md:self-auto lg:mt-0 mb-8 py-2 rounded-md text-xl font-medium transition-colors duration-200 text-black hover:text-blue-400`}
              >
                Go Back to Projects
              </Link>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;