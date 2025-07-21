import cherryExample from '../assets/cherryexample.png';
import interpreterExample from '../assets/interpreterexample.png';
import portfolioExample from '../assets/portfolioexample.png';
import liveIcon from '../assets/liveicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="p-4 sm:p-8 flex flex-col items-center justify-center mt-8">
      <h2 className="text-2xl sm:text-4xl font-bold mb-8">My Projects</h2>
      <ul className="list-none list-inside flex flex-col flex-wrap justify-center text-2xl sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 min-w-80">
        <li className="mt-1 flex flex-col rounded-lg shadow-2xl px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300 max-w-96 transition-transform duration-300 hover:scale-105">
          <Link to="/projects/cherry" className="w-full h-full">
            <div className='p-1 sm:p-2 flex items-center justify-center'>
              <img src={cherryExample} alt="Project Thumbnail" className="w-90 h-full object-cover" />
            </div>
            <span className="font-bold">Cherry</span>
            <p className="text-gray-600 text-lg">A full-stack AI-powered meal tracking web-app with analytics.</p>
            <div className='flex flex-row items-center justify-center gap-4 pt-4'>
              <span className="text-blue-500 text-sm underline underline-offset-3">REST API</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">React.js</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Spring Boot</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">SQL</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">AWS</span>
            </div>
            <div className='flex flex-row items-center justify-center gap-8 mt-8'>
              <a href="https://cherry.joshroundy.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={liveIcon} alt="Link" className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/watch?v=IligeviHT-M" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={youtubeIcon} alt="Link" className="w-10 h-10" />
              </a>
              <a href="https://github.com/joshroundy9/Cherry" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10" />
              </a>
            </div>
          </Link>
        </li>
        <li className="mt-1 flex flex-col rounded-lg shadow-2xl px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300 max-w-96 transition-transform duration-300 hover:scale-105">
          <Link to="/projects/interpreter" className="w-full h-full">
            <div className='p-1 sm:p-2 flex items-center justify-center'>
              <img src={interpreterExample} alt="Project Thumbnail" className="w-90 h-full object-cover" />
            </div>
            <span className="font-bold">"Shank" Interpreter</span>
            <p className="text-gray-600 text-lg">Interpreter for my custom programming language "Shank".</p>
            <div className='flex flex-row items-center justify-center gap-4 pt-4'>
              <span className="text-blue-500 text-sm underline underline-offset-3">Java</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Git</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Custom Programming Language</span>
            </div>
            <div className='flex flex-row items-center justify-center gap-8 mt-8'>
              <img src={youtubeIcon} alt="Link" className="w-10 h-10" />            
              <a href="https://github.com/joshroundy9/Interpreter" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10" />
              </a>
            </div>
          </Link>
        </li>
        <li className="mt-1 flex flex-col rounded-lg shadow-2xl px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300 max-w-96 transition-transform duration-300 hover:scale-105">
          <Link to="/projects/portfolio" className="w-full h-full">
            <div className='p-1 sm:p-2 flex items-center justify-center'>
              <img src={portfolioExample} alt="Project Thumbnail" className="w-90 h-full object-cover" />
            </div>
            <span className="font-bold">Portfolio Website</span>
            <p className="text-gray-600 text-lg">A modern website featuring my experience and select projects.</p>
            <div className='flex flex-row items-center justify-center gap-4 pt-4'>
              <span className="text-blue-500 text-sm underline underline-offset-3">React.js</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Vite.js</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Tailwind CSS</span>
            </div>
            <div className='flex flex-row items-center justify-center gap-8 mt-8'>
              <a href="https://www.joshroundy.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={liveIcon} alt="Link" className="w-8 h-8" />
              </a>
              <a href="https://github.com/joshroundy9/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10" />
              </a>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Projects;