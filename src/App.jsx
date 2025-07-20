import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './pages/Projects.jsx'
import AboutMe from './pages/AboutMe.jsx'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="w-full h-full flex flex-col">
      <nav className="w-full border-b-1 border-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex shrink-0 items-center">
                <span className="ml-2 text-4xl font-bold text-black">Josh Roundy</span>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className={`mr-4 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${activeTab === 'about' ? 'text-blue-400 underline underline-offset-3' : 'text-black hover:text-blue-400'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </button>
              <button
                type="button"
                className={`mr-4 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${activeTab === 'projects' ? 'text-blue-400 underline underline-offset-3' : 'text-black hover:text-blue-400'}`}
                onClick={() => setActiveTab('projects')}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 w-full">
        {activeTab === 'about' && (
            <AboutMe />          
        )}
        {activeTab === 'projects' && (          
            <Projects />          
        )}
      </main>
    </div>
  )
}

export default App
