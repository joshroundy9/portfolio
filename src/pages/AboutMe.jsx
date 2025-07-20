import profilePhoto from '../assets/profile.JPG';

import githubIcon from '../assets/githubicon.png';
import linkedinIcon from '../assets/linkedinicon.png';
import emailIcon from '../assets/emailicon.png';

function AboutMe() {
  return (
    <div className=''>
    <div className="p-8">
        <div className="flex items-center lg:flex-row md:flex-row sm:flex-col flex-col justify-center">
            <img src={profilePhoto} alt="Profile" className=" h-auto w-2/3 mr-6 lg:w-sm md:w-sm sm:w-1/2 sm:pb-2" />
            <div className="flex flex-col mb-6 justify-start text-start items-start lg:max-w-3xl">
                <h1 className=" text-3xl md:text-5xl font-bold text-gray-900 mb-4">Hello, I'm Josh.</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Hello! 👋 I am a Software Engineer III at <a href='https://www.usaa.com/' target="_blank" className="underline">USAA</a> with a B.S. in Computer Science from the University at Albany.</p>
                <p className="text-gray-600 text-lg leading-relaxed mt-2">
I have over 10 years of development experience which began when I started developing Minecraft server plugins with the <a href='https://dev.bukkit.org/' target="_blank" className="underline">Bukkit API</a> at age 11. Since then, I've gained diverse professional experience — from USAA and the <a href='https://www.ny.gov/' target="_blank" className="underline">New York State Government</a> to making contributions at a local startup. </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-2">
Outside of software development you can find me at the gym, on the beach, exploring hiking trails, or hitting the slopes ⛷️.
                </p>
                <div className="w-full flex flex-row items-center sm:justify-start justify-center pt-2 space-x-4 mt-2">
                    <a href="https://github.com/joshroundy9" target="_blank" rel="noopener noreferrer" className="github-link hover:scale-110 transition-transform duration-200">
                        <img src={githubIcon} alt="GitHub" className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/in/joshroundy9/" target="_blank" rel="noopener noreferrer" className="linkedin-link hover:scale-110 transition-transform duration-200">
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