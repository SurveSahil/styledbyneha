import { useState, useEffect, createContext } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Socials from './components/Socials';

// Optional: Context for theme if needed in children
export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* Toggle Button */}
      <button
        className="fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-white/10 hover:scale-110 transition-all"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle light/dark mode"
      >
        {darkMode ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
      <div className="bg-white dark:bg-black text-black dark:text-white font-sans overflow-x-hidden min-h-screen transition-colors duration-500">
        <div className="relative">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black opacity-90 transition-colors duration-500"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.03),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          {/* Content */}
          <div className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
            <Socials />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
