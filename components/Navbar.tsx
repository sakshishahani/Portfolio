import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Linkedin } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Cases', id: 'cases' },
    { name: 'PORs', id: 'pors' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top-ish part of viewport
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#about" 
          onClick={(e) => handleNavClick(e, 'about')}
          className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue"
        >
          &lt;Sakshi Shahani&gt;
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-bold transition-all duration-300 relative py-2 ${
                  isActive 
                    ? 'text-brand-purple' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-purple/70'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-purple rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="https://www.linkedin.com/in/sakshi-shahani-57902a25b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-300 hover:text-brand-blue transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-brand-charcoal border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-lg font-bold transition-colors ${
                    activeSection === link.id 
                      ? 'text-brand-purple' 
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;