import googlePlayIcon from '../assets/googleplayicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import cherryMobileIcon from '../assets/cherrymobileicon.png';

import cherryMobileExample from '../assets/cherrymobileexample.png';
import cherryDBDiagram from '../assets/cherrymobiletechnicaldesign.png';
import sedona from '../assets/sedona.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CherryMobile() {
  const [showVisualExample, setShowVisualExample] = useState(false);
  const [showSpringDiagram, setShowSpringDiagram] = useState(false);
  return (
    <div className="p-4 sm:p-8 mt-4 w-full flex items-start justify-center h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-4 mb-2">
            <img src={cherryMobileIcon} alt="Project Thumbnail" className="w-32 h-full object-cover pb-1" />
            <div className='flex flex-row items-center justify-center gap-4 '>
                <a href="https://play.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-1 text-sm underline underline-offset-3">
                <img src={googlePlayIcon} alt="Link" className="w-10 h-10 transition-transform duration-300 hover:scale-110" />
                </a>
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
                    After building <a href="https://cherry.joshroundy.dev" className="underline">CHERRY</a>, I had a choice to make for my next project.
                    I could either expand a previous project in some way, or I could build something new.
                    After some consideration I decided to build a mobile version of CHERRY because I felt it would
                    show my growth as a developer and prove my ability to develop and finish complex
                    full-stack projects end-to-end.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        As detailed in my <Link to="/projects/cherry" className={`underline`}>
                        CHERRY web app project article</Link>, the most common feedback I received was that CHERRY should've been a mobile app. 
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
                    CHERRY Mobile uses the lessons learned from CHERRY Web to
                    provide a greatly improved user experience with several additional features.
                    The main addition is the ability to get nutritional information from 
                    pictures of your meals using the <a href='https://platform.openai.com/docs/api-reference/images' target="_blank" className="underline">OpenAI Image API</a>.

                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    In addition, CHERRY Mobile provides users with 
                    much more detailed analytics and graphs. These features not only make 
                    the tracking process more engaging, but also help users better 
                    understand their nutritional habits and progress over time.
                    Additional features include a new home screen with prompts,
                    a heatmap of tracking activity, and a profile page that 
                    displays basic user information.
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
                        <a href='https://www.figma.com/design/NGpP6fxiM1XJ2M6X4ij1My/Cherry-Mobile-Design-Board?node-id=0-1&t=rkpfFZGsW4ZGCrxE-1' target="_blank" className="flex flex-row text-blue-500 text-lg underline underline-offset-3 pb-0.5 ml-8">Figma Board</a>
                    </div>
                    
                    <p className="text-gray-600 text-lg mt-4">
                    Despite being my first mobile app, I had already learned a lot about mobile design principles
                    from creating the mobile styling for CHERRY Web and my portfolio website. 
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-4">
                    As I designed the UI with <a href='https://www.figma.com/design/' target="_blank" 
                    className="underline">Figma</a> I took inspiration from popular mobile apps for 
                    the best practices in mobile design, such as
                    using bottom navigation bars, large touch targets, and clear visual hierarchy.
                    I also focused on creating a consistent and enjoyable user experience across the app
                    by adding helpful tooltips, shortcut buttons, and intuitive icons.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    My end goal was to create a great looking app that made meal tracking quick, easy, and fun.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg md:pt-10'>
                    <button onClick={() => setShowVisualExample(true)} className="focus:outline-none">
                        <img src={cherryMobileExample} alt="Cherry Mobile Example" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showVisualExample && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVisualExample(false)}>
                    <img src={cherryMobileExample} alt="Cherry Mobile Example Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowSpringDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
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
                    CHERRY Mobile is connected to the same backend as the web app.
                    This allows for seamless data sync and a consistent experience across all platforms.
                    However, the the backend did need some modifications to support 
                    some of the new features which include new endpoints for image 
                    nutrition retrieval, heat map data, and average data. In addition,
                    I had to add two new fields to the User table to store 
                    the user's original weight and the date their account was created.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                    Moving from frontend development with React.js to <a href='https://reactnative.dev/' target="_blank" className="underline">React Native</a> was pretty simple.
                    Since I utilized <a href='https://www.nativewind.dev/' target="_blank" className="underline">
                    Nativewind</a> for styling, I was able to apply the same Tailwind CSS styling knowledge I had gained from 
                    building my portfolio website for app development.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-96 md:w-lg md:pt-4'>
                    <button onClick={() => setShowSpringDiagram(true)} className="focus:outline-none">
                        <img src={cherryDBDiagram} alt="Database Diagram" className="w-full h-auto max-w-lg cursor-zoom-in" />
                    </button>
                </div>
                {showSpringDiagram && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowSpringDiagram(false)}>
                    <img src={cherryDBDiagram} alt="Database Diagram Expanded" className="max-h-[90vh] max-w-[90vw] rounded shadow-lg cursor-zoom-out" />
                    <button onClick={() => setShowSpringDiagram(false)} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                )}
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center w-full gap-5 mb-2 md:mb-4'>
                <div className='md:max-w-2xl w-full flex flex-col'>
                    <h3 className=" text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                        Conclusion & Lessons Learned
                    </h3>
                    <p className="text-gray-600 text-lg mt-4">
                        Building CHERRY Mobile was an incredibly valuable learning experience 
                        which opened my eyes to the world of mobile app development.
                        The most important skill I learned was how to create and deploy
                        a mobile app end-to-end, from concept, planning, development, testing, 
                        and finally to the Google Play Store.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        Out of all the projects I've built, CHERRY Mobile is my favorite.
                        It is a project that I can confidently say I'm proud of and has the potential to help
                        many people track their meals and improve their nutrition.
                        I hope to continue improving it in the future by adding more features and expanding its reach.
                    </p>
                    <p className="text-gray-600 text-lg mt-4 mb-8">
                        <span className='font-bold'>THANK YOU FOR READING!!!</span> If you have any questions or feedback, feel free to reach out to me via <a className="text-blue-500 underline" href="mailto:joshroundy9@gmail.com">email</a>.
                    </p>
                </div>
                <div className='h-64 w-sm md:h-80 md:w-lg md:mb-12'>
                    <img src={sedona} alt="Delicate Arch" className="w-full h-auto max-w-lg" />
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