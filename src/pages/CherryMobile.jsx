import liveIcon from '../assets/liveicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import cherryMobileIcon from '../assets/cherrymobileicon.png';

import cherryMobileExample from '../assets/cherrymobileexample.png';
import cherryDBDiagram from '../assets/cherrydbdiagram.JPEG';
import cherryAWSDiagram from '../assets/cherryawsdiagram.png';
import delicateArch from '../assets/delicatearch.JPEG';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CherryMobile() {
  const [showVisualExample, setShowVisualExample] = useState(false);
  const [showAWSDiagram, setShowAWSDiagram] = useState(false);
  const [showDBDiagram, setShowDBDiagram] = useState(false);
  return (
    <div className="p-4 sm:p-8 mt-4 w-full flex items-start justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4 mb-2">
            <img src={cherryMobileIcon} alt="Project Thumbnail" className="w-32 h-full object-cover pb-1" />
            <div className='flex flex-row items-center justify-center gap-6 '>
                <a href="https://www.youtube.com/watch?v=fkjwlnVtwew" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={youtubeIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
                <a href="https://github.com/joshroundy9/CherryMobileApp" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={githubIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-4 mb-8'>
              <span className="text-blue-500 text-sm underline underline-offset-3">REST API</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">React Native</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">TypeScript</span>
              <span className="text-blue-500 text-sm underline underline-offset-3">Spring Boot</span>
        </div>
        <div className="w-full flex flex-col items-start justify-start max-w-7xl text-start">
            <div className='flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Introduction
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    After building CHERRY, I had a choice to make for my next project.
                    I could either expand CHERRY in some way, or I could build something new.
                    After some consideration I decided to build a mobile version of CHERRY because I felt it would
                    show my growth as a developer and prove my ability to build complex
                    full-stack projects.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        As detailed in my <Link to="/projects/cherry" className={`underline`}>
                        CHERRY web app project article</Link>, the most common feedback I received was that it should be a mobile app. 
                        I also recognized opportunities to improve the original UI design. I hope this project can demonstrate my ability to 
                        incorporate constructive criticism, adapt to new technologies, and iteratively improve my work.
                    </p>
                </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-8 md:mb-12'>
                <div className='md:max-w-2xl flex-1'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Project Overview
                    </h3>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    CHERRY Mobile uses the lessons learned from <a 
                    href='https://cherry.joshroundy.dev/' target="_blank" className="underline">CHERRY</a> to
                    provide a greatly improved user experience with several additional features.
                    The main addition is the ability to get nutritional information from 
                    pictures of your meals using the <a href='https://platform.openai.com/docs/api-reference/images' target="_blank" className="underline">OpenAI Image API</a>.

                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    In addition, CHERRY Mobile provides users with with 
                    much more detailed analytics and graphs which not only make 
                    the tracking process more engaging, but also help users better 
                    understand their nutritional habits and progress over time.
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
                        <a href='https://www.figma.com/design/NGpP6fxiM1XJ2M6X4ij1My/Cherry-Mobile-Design-Board?node-id=0-1&t=rkpfFZGsW4ZGCrxE-1' target="_blank" className="flex flex-row text-blue-500 text-lg underline underline-offset-3 pb-1 ml-8">Figma Board</a>
                    </div>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    CHERRY is my first solo full-stack web app,
                    so I wanted to choose a tech stack with a good balance of familiarity and new challenges. Utilizing the OpenAI API was a no brainer because it allowed me to leverage advanced AI capabilities without having to build them from scratch. I chose <a href='https://spring.io/projects/spring-boot' target="_blank" className="underline">Spring Boot</a> for the backend because I already had
                    professional experience with it and since my planned back end was relatively simple, I could put all my business logic in one Spring application vs using microservices (ex: AWS Lambda). I chose <a href='https://react.dev/' target="_blank" className="underline">React.js</a> for the frontend because it is very popular, and I wanted to learn it.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    I designed a simple, modern UI with <a href='https://www.figma.com/design/' target="_blank" className="underline">Figma</a> that would be easy to use on both desktop and mobile devices.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg'>
                    <button onClick={() => setShowVisualExample(true)} className="focus:outline-none">
                        <img src={cherryMobileExample} alt="Cherry Mobile Example" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showVisualExample && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVisualExample(false)}>
                    <img src={cherryMobileExample} alt="Cherry Mobile Example Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
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
                    CHERRY is my first solo full-stack web app,
                    so I wanted to choose a tech stack with a good balance of familiarity and new challenges. Utilizing the OpenAI API was a no brainer because it allowed me to leverage advanced AI capabilities without having to build them from scratch. I chose <a href='https://spring.io/projects/spring-boot' target="_blank" className="underline">Spring Boot</a> for the backend because I already had
                    professional experience with it and since my planned back end was relatively simple, I could put all my business logic in one Spring application vs using microservices (ex: AWS Lambda). I chose <a href='https://react.dev/' target="_blank" className="underline">React.js</a> for the frontend because it is very popular, and I wanted to learn it.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    I designed a simple, modern UI with <a href='https://www.figma.com/design/' target="_blank" className="underline">Figma</a> that would be easy to use on both desktop and mobile devices.
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
export default CherryMobile;