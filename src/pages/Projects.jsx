import cherryMobileExample from '../assets/cherrymobileexample.png';
import cherryExample from '../assets/cherryexample.png';
import interpreterExample from '../assets/interpreterexample.png';
import liveIcon from '../assets/liveicon.png';
import youtubeIcon from '../assets/youtubeicon.png';
import githubIcon from '../assets/githubicon.png';
import cherryIcon from '../assets/cherryicon.png';
import shankIcon from '../assets/shanklogo.png';
import cherryMobileIcon from '../assets/cherrymobileicon.png';

import { Link } from 'react-router-dom';

const projects = [
  {
    to: '/projects/cherrymobile',
    image: cherryMobileExample,
    title: <img src={cherryMobileIcon} alt="CHERRY Mobile" className="h-12" />,
    description: 'A mobile app for CHERRY with an improved UI and additional features.',
    tags: ['REST API', 'React Native', 'TypeScript', 'Spring Boot'],
    links: [
      { href: 'https://www.youtube.com/watch?v=fkjwlnVtwew', icon: youtubeIcon, label: 'Demo video' },
      { href: 'https://github.com/joshroundy9/CherryMobileApp', icon: githubIcon, label: 'GitHub' },
    ],
  },
  {
    to: '/projects/cherry',
    image: cherryExample,
    title: (
      <span className="flex flex-row items-center text-6xl font-bold text-red-600 font-jomhuria">
        CHERRY
        <img src={cherryIcon} alt="" className="w-10 h-10" />
      </span>
    ),
    description: 'A full-stack AI-powered meal tracking web app with analytics.',
    tags: ['REST API', 'React.js', 'Spring Boot', 'SQL', 'AWS'],
    links: [
      { href: 'https://cherry.joshroundy.dev', icon: liveIcon, label: 'Live site', size: 'w-8 h-8' },
      { href: 'https://www.youtube.com/watch?v=IligeviHT-M', icon: youtubeIcon, label: 'Demo video' },
      { href: 'https://github.com/joshroundy9/Cherry', icon: githubIcon, label: 'GitHub' },
    ],
  },
  {
    to: '/projects/shank',
    image: interpreterExample,
    title: (
      <span className="flex flex-row items-center text-5xl font-bold text-green-500 font-shadows-into-light">
        SHANK
        <img src={shankIcon} alt="" className="w-12 h-12" />
      </span>
    ),
    description: 'Interpreter for my custom programming language "Shank".',
    tags: ['Java', 'Custom Programming Language'],
    links: [
      { href: 'https://github.com/joshroundy9/Interpreter', icon: githubIcon, label: 'GitHub' },
    ],
  },
];

function Projects() {
  return (
    <div className="p-4 sm:p-8 flex flex-col items-center justify-center mt-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-10">My Projects</h2>
      <ul className="list-none w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((p) => (
          <li
            key={p.to}
            className="flex flex-col rounded-2xl bg-white border border-slate-200 shadow-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200"
          >
            <Link to={p.to} className="flex flex-col flex-1">
              <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50 mb-4">
                <img src={p.image} alt="Project thumbnail" className="w-full h-auto object-cover" />
              </div>
              <div className="flex items-center mb-2 min-h-12">{p.title}</div>
              <p className="text-slate-600 text-lg leading-relaxed">{p.description}</p>
              <div className="flex flex-row flex-wrap gap-2 pt-4">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </Link>
            <div className="flex flex-row items-center gap-5 mt-5 pt-4 border-t border-slate-100">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}>
                  <img src={l.icon} alt={l.label} className={`${l.size || 'w-10 h-10'} transition-transform duration-300 hover:scale-110`} />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Projects;
