import liveIcon from '../assets/liveicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import cherryIcon from '../assets/cherryicon.png';

import cherryExample from '../assets/cherryexample.png';
import cherryDBDiagram from '../assets/cherrydbdiagram.JPEG';
import cherryAWSDiagram from '../assets/cherryawsdiagram.png';
import delicateArch from '../assets/delicatearch.JPEG';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cherry() {
  const [showVisualDesign, setShowVisualDesign] = useState(false);
  const [showAWSDiagram, setShowAWSDiagram] = useState(false);
  const [showDBDiagram, setShowDBDiagram] = useState(false);
  return (
    <div className="p-4 sm:p-8 mt-4 w-full flex items-start justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://cherry.joshroundy.dev" target="_blank" rel="noopener noreferrer" className="flex flex-row text-6xl pt-2 font-bold text-red-600 font-jomhuria">
                CHERRY 
                <img src={cherryIcon} alt="Link" className="w-10 h-10" />
            </a>
            <div className='flex flex-row items-center justify-center gap-6 '>
                <a href="https://cherry.joshroundy.dev" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={liveIcon} alt="Link" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://www.youtube.com/watch?v=fkjwlnVtwew" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={youtubeIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://github.com/joshroundy9/Cherry" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-4 mb-8'>
              <span className="text-blue-500 text-sm underline underline-offset-3">REST API</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">React.js</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Spring Boot</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">SQL</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">AWS</span>
            </div>
        <div className="w-full flex flex-col items-start justify-start max-w-7xl text-start">
            <div className='flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Introduction
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    I love going to the gym and progressing my strength
                    and physique, but every time I've looked into meal
                    tracking solutions, I found them to be too time consuming
                    and not worth the effort. So I decided to build my own
                    meal tracking web app that would be easy to use and
                    speed up the meal entry process.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        With AI growing so fast and becoming more accessible, I wanted to leverage it to make meal tracking easier and fix the problems I had with existing apps.
                    </p>
                </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8 md:mb-12'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Project Overview
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    <a href='https://cherry.joshroundy.dev/' target="_blank" className="underline">CHERRY</a> is a modern, AI-powered meal-tracking web app that utilizes the <a href='https://openai.com/api/' target="_blank" className="underline">OpenAI API</a> to retrieve
                    nutritional information from plain english
                    food descriptions.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    In addition, CHERRY provides users with weekly, monthly, and yearly graphs of their nutritional and weight data, and it allows them to manually add food items and easily re-add them to future meals.
                    </p>
                </div>
                <div className='h-52 w-sm md:h-80 md:w-lg'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fkjwlnVtwew?si=v8r8lgG2LPIVLh5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8'>
                <div className='md:max-w-2xl flex-1'>
                    <div className='flex flex-row items-center justify-start'>
                        <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Visual Design
                        </h3>
                        <a href='https://www.figma.com/design/9na15WcguKcXO18PswOSYC/Untitled?node-id=0-1&t=hIQux2yCth4p221D-1' target="_blank" className="flex flex-row text-blue-500 text-lg underline underline-offset-3 pb-0.5 ml-8">Figma Board</a>
                    </div>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    I am relatively new to web development and I've always liked minimalist design,
                    so I wanted to create a simple, modern UI that would make it as fast as possible
                    to log meals and view progress.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    Using <a href='https://www.figma.com/design/' target="_blank" className="underline">Figma</a>, I designed a clean, 
                    intuitive interface that provides users with access to all essential features. 
                    The left panel functions both as a calendar for date navigation and a 
                    hub for viewing data. The right panel serves as a multi-use 
                    area, seamlessly switching between meal tracking, nutritional input, and graphs.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg md:pt-8'>
                    <button onClick={() => setShowVisualDesign(true)} className="focus:outline-none">
                        <img src={cherryExample} alt="Visual Design" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showVisualDesign && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVisualDesign(false)}>
                    <img src={cherryExample} alt="Visual Design Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowDBDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8'>
                <div className='md:max-w-2xl flex-1'>
                    <div className='flex flex-row items-center justify-start'>
                        <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Technical Design
                        </h3>
                    </div>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    As my first solo full-stack project, I chose technologies that
                     leveraged familiarity while still providing learning opportunities. 
                     The OpenAI API enabled sophisticated AI integration without building 
                     from scratch. I used <a href='https://spring.io/projects/spring-boot'
                      target="_blank" className="underline">Spring Boot</a> for the backend
                       due to my professional experience, opting for a monolithic 
                       architecture over microservices given the simple design requirements. 
                       For the frontend, I selected <a href='https://react.dev/' 
                       target="_blank" className="underline">React.js</a> because of it's 
                       popularity and wide range of libraries. Despite SQL databases'
                       high cost, especially on AWS RDS, I chose PostgreSQL because of
                       its powerful features and my familiarity with it.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    For me, the backend was the easiest part of the project. I already had
                    professional experience with Spring Boot which allowed me to quickly setup a
                    REST API that could handle all the core logic of the app.
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
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Deployment & Security
                    </h3>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    I am working on completing my <a href='https://aws.amazon.com/certification/certified-developer-associate/' target="_blank" className="underline">AWS Certified
                    Developer Associate Certification</a>, so I wanted to
                    deploy CHERRY on AWS to learn hands-on some of the services I do not normally use at work. I used S3 and CloudFront to host the static React frontend, an
                    EC2 instance to host the Spring Boot backend,
                    RDS to host the PostgreSQL database, and Route 53
                    for DNS management.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        Any app that handles user information should prioritize security and compliance, especially when dealing with sensitive data. So I implemented
                        several security measures in CHERRY, including:
                        <ul className="list-disc list-inside mt-2 text-lg">
                            <li>HTTPS with SSL/TLS for secure data transmission</li>
                            <li>JWT authentication for secure user sessions</li>
                            <li>Environment variables for passwords and API keys</li>
                            <li>Users can only access their own data with a JWT-UserID header match</li>
                            <li>ReCAPTCHA verification for bot protection</li>
                        </ul>

                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg'>
                    <button onClick={() => setShowAWSDiagram(true)} className="focus:outline-none">
                        <img src={cherryAWSDiagram} alt="Database Diagram" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showAWSDiagram && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowAWSDiagram(false)}>
                    <img src={cherryAWSDiagram} alt="AWS Diagram Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowAWSDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-2 md:mb-4'>
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
                    <img src={delicateArch} alt="Delicate Arch" className="w-full h-auto max-w-lg" />
                </div>
            </div>
            <Link
                to="/projects"
                className={`mt-8 self-center md:self-auto lg:mt-0 mb-8 py-2 rounded-md text-xl font-medium transition-colors duration-200 text-black hover:text-blue-400`}
              >
                Go Back to Projects
              </Link>
        </div>
      </div>
    </div>
  );
}
export default Cherry;