import profilePhoto from '../assets/profile-summit.jpg';

import githubIcon from '../assets/githubicon.png';
import linkedinIcon from '../assets/linkedinicon.png';
import emailIcon from '../assets/emailicon.png';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className='sm:mt-12'>
    <div className="p-6 sm:p-8 max-w-6xl mx-auto">
        <div className="flex items-center lg:flex-row md:flex-row sm:flex-col flex-col justify-center">
            <img src={profilePhoto} alt="Profile" className="h-auto w-2/3 md:mr-10 lg:w-sm md:w-sm sm:w-1/2 mb-6 md:mb-0 rounded-3xl shadow-xl ring-1 ring-slate-200" />
            <div className="flex flex-col mb-6 justify-start text-start items-start lg:max-w-4xl">
                <h1 className=" text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">Hello, I'm Josh.</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Hello! 👋 I am a Software Engineer at <a href='https://www.visa.com/' target="_blank" className="text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-colors">VISA</a> with a B.S. in Computer Science from the University at Albany.</p>
                <p className="text-slate-600 text-lg leading-relaxed mt-2">
I have over 10 years of development experience which began when I started developing Minecraft server plugins with the <a href='https://dev.bukkit.org/' target="_blank" className="text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-colors">Bukkit API</a> at age 11. Since then, I've gained diverse professional experience — from VISA, <a href='https://www.usaa.com/' target="_blank" className="text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-colors">USAA</a>, and the <a href='https://www.ny.gov/' target="_blank" className="text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-colors">New York State Government</a> to making contributions at a local startup. </p>
                <p className="text-slate-600 text-lg leading-relaxed mt-2">
Outside of software development you can find me at the gym, on the beach, exploring hiking trails, or hitting the slopes ⛷️.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed mt-2">
                    Feel free to <Link to="/projects" className="text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-colors">browse my projects</Link>, connect with me on LinkedIn, or check out my <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600 transition-colors">Resume</a>!
                </p>
                <div className="w-full flex flex-row items-center sm:justify-start justify-center pt-2 space-x-4 mt-2">
                    <a href="https://github.com/joshroundy9" target="_blank" rel="noopener noreferrer" className="github-link hover:scale-110 transition-transform duration-200">
                        <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/joshroundy/" target="_blank" rel="noopener noreferrer" className="linkedin-link hover:scale-110 transition-transform duration-200">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9 mr-1" />
                    </a>
                    <a href="mailto:joshroundy9@gmail.com" target="_blank" rel="noopener noreferrer" className="email-link hover:scale-110 transition-transform duration-200">
                        <img src={emailIcon} alt="Email" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutMe;