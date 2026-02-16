
import React from 'react';
import { Linkedin, Twitter, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
             <a href="#" className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Sakshi Shahani
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Made with <Heart size={14} className="inline-block text-red-500 animate-pulse mx-1" /> and React.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/sakshi-shahani-57902a25b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-purple transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-slate-500 dark:text-slate-400 hover:text-brand-charcoal dark:hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-slate-400 dark:text-slate-600">
          &copy; {new Date().getFullYear()} Sakshi Shahani. All rights reserved. 
          <br className="md:hidden" /> Developed with a focus on UX and Strategy.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
