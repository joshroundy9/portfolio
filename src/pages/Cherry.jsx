import liveIcon from '../assets/liveicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import cherryIcon from '../assets/cherryicon.png';

import cherryDBDiagram from '../assets/cherrydbdiagram.JPEG';
import { useState } from 'react';

function Cherry() {
  const [showDiagram, setShowDiagram] = useState(false);
  return (
    <div className="p-4 sm:p-8 mt-4 w-full flex items-start justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4">
            <h1 className="flex flex-row text-6xl pt-2 font-bold text-red-600 font-jomhuria">
                CHERRY 
                <img src={cherryIcon} alt="Link" className="w-10 h-10" />
            </h1>
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
                    In addition, CHERRY provides users with a weekly,
                    monthly, and yearly graphs of their nutritional 
                    and weight data, allowing them to adjust their
                    diet and exercise plans accordingly.
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
                        Design
                        </h3>
                        <a href='https://www.figma.com/design/9na15WcguKcXO18PswOSYC/Untitled?node-id=0-1&t=hIQux2yCth4p221D-1' target="_blank" className="flex flex-row text-blue-500 text-lg underline underline-offset-3 pb-1 ml-8">Figma Board</a>
                    </div>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    CHERRY is my first personal full-stack project,
                    so I wanted to choose a tech stack with a good balance of familiarity and new challenges. Utilizing the OpenAI API was a no brainer because it allowed me to leverage advanced AI capabilities without having to build them from scratch. I chose <a href='https://spring.io/projects/spring-boot' target="_blank" className="underline">Spring Boot</a> for the backend because I already had
                    professional experience with it and because my planned back end was relatively simple, I could put all my business logic in one Spring application vs using microservices (ex: AWS Lambda). I chose <a href='https://react.dev/' target="_blank" className="underline">React.js</a> for the frontend because it is very popular, and I wanted to learn it.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    I designed a simple, modern UI with <a href='https://www.figma.com/design/' target="_blank" className="underline">Figma</a> that would be easy to use on both desktop and mobile devices.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg'>
                    <button onClick={() => setShowDiagram(true)} className="focus:outline-none">
                        <img src={cherryDBDiagram} alt="Database Diagram" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showDiagram && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setShowDiagram(false)}>
                    <img src={cherryDBDiagram} alt="Database Diagram Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8 md:mb-12'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Deployment & Security
                    </h3>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    At USAA, I am working on completing my <a href='https://aws.amazon.com/certification/certified-developer-associate/' target="_blank" className="underline">AWS Certified
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
                        </ul>

                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg'>
                    <button onClick={() => setShowDiagram(true)} className="focus:outline-none">
                        <img src={cherryDBDiagram} alt="Database Diagram" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showDiagram && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setShowDiagram(false)}>
                    <img src={cherryDBDiagram} alt="Database Diagram Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
export default Cherry;