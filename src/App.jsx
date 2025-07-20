import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import Projects from './pages/Projects.jsx'
import AboutMe from './pages/AboutMe.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <div className="w-full h-full flex flex-col">
      <nav className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex shrink-0 items-center">
                <span className="ml-2 text-2xl sm:text-4xl font-bold text-black">Josh Roundy</span>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex flex-col sm:flex-row items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                to="/"
                className={`mr-4 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-blue-400 underline underline-offset-3' : 'text-black hover:text-blue-400'}`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`mr-4 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${location.pathname.includes('/projects') ? 'text-blue-400 underline underline-offset-3' : 'text-black hover:text-blue-400'}`}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutMe />
                </motion.div>
              } />
              <Route path="/projects" element={
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Projects />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
  );
}
export default App
