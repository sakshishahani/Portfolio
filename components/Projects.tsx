
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of my personal and academic work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="flex space-x-4">
                  <button className="p-3 bg-white text-brand-charcoal rounded-xl hover:bg-brand-purple hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 bg-white text-brand-charcoal rounded-xl hover:bg-brand-blue hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="px-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-brand-purple px-2 py-1 bg-brand-purple/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-purple transition-colors">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
