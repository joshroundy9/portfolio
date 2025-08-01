import { useEffect } from 'react';
// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'
import Projects from './pages/Projects.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Cherry from './pages/Cherry.jsx'
import Shank from './pages/Shank.jsx'
import Portfolio from './pages/Portfolio.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <main className="w-full h-full flex flex-col">
      <nav className="w-full sticky top-0 bg-white/80 md:bg-white z-50 backdrop-blur lg:px-4">
        <div className="mx-auto max-w-7xl px-4 lg:p-0">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-start">
              <div className="flex shrink-0 items-center">
                <span className="text-2xl sm:text-4xl font-bold text-black">Josh Roundy</span>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex flex-col sm:flex-row md:items-center pr-2 sm:pr-0 sm:static sm:inset-auto sm:ml-6">
              <Link
                to="/"
                className={`mr-4 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${location.pathname === '/' ? 'text-blue-400 underline underline-offset-3' : 'text-black hover:text-blue-400'}`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`sm:mr-0 mr-4 px-3 py-2 rounded-md text-xl font-medium transition-colors duration-200 ${location.pathname.includes('/projects') ? 'text-blue-400 underline underline-offset-3' : 'text-black hover:text-blue-400'}`}
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
              <Route path="/projects/cherry" element={
                <motion.div
                  key="cherry"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Cherry />
                </motion.div>
              } />
              <Route path="/projects/shank" element={
                <motion.div
                  key="shank"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shank />
                </motion.div>
              } />
              <Route path="/projects/portfolio" element={
                <motion.div
                  key="portfolio"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <Portfolio />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </main>
  );
}
export default App
