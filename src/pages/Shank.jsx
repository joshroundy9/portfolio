import liveIcon from '../assets/liveicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import shankIcon from '../assets/shanklogo.png';

import cherryDBDiagram from '../assets/cherrydbdiagram.JPEG';
import cherryAWSDiagram from '../assets/cherryawsdiagram.png';
import sandDunes from '../assets/sanddunes.png';
import { useState } from 'react';

function Shank() {
  const [showAWSDiagram, setShowAWSDiagram] = useState(false);
  const [showDBDiagram, setShowDBDiagram] = useState(false);
  return (
    <div className="p-4 sm:p-8 mt-4 w-full flex items-start justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-row text-5xl font-bold text-green-500 font-shadows-into-light">
                SHANK
                <img src={shankIcon} alt="Link" className="w-12 h-12" />
            </div>
            <div className='flex flex-row items-center justify-center gap-6 '>
                <a href="https://www.youtube.com/watch?v=fkjwlnVtwew" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={youtubeIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://github.com/joshroundy9/Interpreter" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-4 mb-8'>
              <span className="text-blue-500 text-sm underline underline-offset-3">Java</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Custom Programming Language</span>
            </div>
        <div className="w-full flex flex-col items-start justify-start max-w-7xl text-start">
            <div className='flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Introduction
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    In college, I had many classes with semester long projects,
                    from full-stack web applications built with modern frameworks
                    to low level systems programming with C. However, my favorite
                    of these projects was from the class ICSI 311 taught by <a href="https://www.albany.edu/computer-science/faculty/michael-phipps" target="_blank" rel="noopener noreferrer" className="underline underline-offset-3">
                    Michael Phipps</a>, where I built an interpreter from scratch 
                    for a custom programming language called "Shank".
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        The class gave us a template of basic instructions
                        and a set of requirements, but we were free to build the
                        interpreter however we wanted. Which in my opinion was the best part of the project.
                    </p>
                </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8 md:mb-12'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Project Overview
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    Shank is a scripted, indented, and typed general purpose programming language
                    that is designed to be easy to read and write. It has a simple syntax that is
                    similar to Python, but with some unique quirks. For example, functions
                    do not return values, instead they can only modify variables passed into them
                    with the "var" prefix. This makes it easy to write functions that 
                    essentially return multiple values.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    In addition, Shank has many built-in functions for common tasks, such as
                    reading from and writing to the console, creating random numbers,
                    converting between types, and string manipulation.
                    </p>
                </div>
                <div className='h-52 w-sm md:h-80 md:w-lg'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fkjwlnVtwew?si=v8r8lgG2LPIVLh5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Design
                    </h3>
                    <p className="text-gray-600 text-lg mt-4">
                    Before this project, college felt boring to me because I was already 
                    proficient in Java, which was the language used in my
                     classes. So I wanted to go all out on this project and
                     build something truly special.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    Shank was developed entirely in Java, utilizing no APIs or frameworks.
                    Like most programming languages, it has a lexer, parser, and interpreter.
                    The lexer reads the source code and converts it into a list of tokens,
                    the parser takes the tokens and converts them into an abstract syntax tree (AST),
                    and the interpreter takes the AST and executes it. Shank is also a typed
                    language, meaning that variables must be declared with a type before they can be used.
                    However, constants can be declared without a type, and the interpreter will infer the type based on the value.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        For more details, watch the video above or check out the <a href="https://github.com/joshroundy9/Interpreter" target="_blank" className="underline">GitHub repository</a> for the full source code and documentation.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg'>
                    <button onClick={() => setShowDBDiagram(true)} className="focus:outline-none">
                        <img src={cherryDBDiagram} alt="Database Diagram" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showDBDiagram && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowDBDiagram(false)}>
                    <img src={cherryDBDiagram} alt="Database Diagram Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowDBDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8 md:mb-12'>
                <div className='md:max-w-2xl w-full flex flex-col'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Conclusion & Lessons Learned
                    </h3>
                    <p className="text-gray-600 text-lg mt-4">
                        Building CHERRY was a valuable learning experience that reinforced my understanding of full-stack development and cloud deployment. The most important skills I learned were how to use
                        React.js, how to manually deploy a full-stack application on AWS, and how to implement security best practices in a web application (HTTPS, JWT, and Data Security).
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        I think I made a few mistakes in planning CHERRY,
                        such as choosing to build the idea as a web app instead of a mobile app, and not utilizing
                        Tailwind CSS for styling. However, I am proud of the final product and the skills I gained while building it.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        <span className='font-bold'>THANK YOU FOR READING!!!</span> If you have any questions or feedback, feel free to reach out to me via <a className="text-blue-500 underline" href="mailto:joshroundy9@gmail.com">email</a>.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-80 md:w-lg md:mb-12'>
                    <img src={sandDunes} alt="Database Diagram" className="w-full h-auto max-w-lg" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Shank;