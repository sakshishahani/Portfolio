
import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Calendar, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My professional journey and internships">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {EXPERIENCES.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
            className="group relative bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:border-brand-purple/40 transition-all duration-500 flex flex-col overflow-hidden"
          >
            {/* Background Accent Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-brand-purple/10 transition-colors duration-500" />
            
            {/* Top Glow Highlight Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple bg-[length:200%_auto] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
              
              {/* 1. Header: Hierarchy - Company, Role, Duration */}
              <div className="space-y-2 mb-6 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple bg-[length:200%_auto] animate-gradient-x tracking-tight">
                  {exp.company}
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center md:justify-start">
                  <span className="flex items-center text-slate-800 dark:text-slate-100 font-semibold text-lg md:text-xl">
                    <Briefcase size={18} className="mr-2 text-brand-purple" />
                    {exp.role}
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start text-slate-400 dark:text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                  <Calendar size={14} className="mr-2" />
                  {exp.period}
                </div>
              </div>

              {/* 2. Large Image Showcase - Anchoring the card */}
              {/* Spacing 24-32px before/after image is handled by margins */}
              <div className="mb-8 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 group-hover:scale-[1.01] transition-transform duration-700">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} internship showcase`} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* 3. Bullet Points */}
              <div className="flex-grow space-y-3 md:space-y-4 mb-8">
                {exp.description.map((point, idx) => (
                  <div key={idx} className="flex items-start text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed group/bullet">
                    <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 shadow-[0_0_8px_rgba(139,92,246,0.6)] group-hover/bullet:scale-125 transition-transform" />
                    <span className="group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{point}</span>
                  </div>
                ))}
              </div>

              {/* 4. Links Section - Above Skills */}
              {exp.links && exp.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800/50">
                  {exp.links.map((link, lIdx) => (
                    <a 
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 hover:from-brand-purple hover:to-brand-blue text-brand-purple hover:text-white border border-brand-purple/20 transition-all duration-300 flex items-center group/btn"
                    >
                      {link.label}
                      <ExternalLink size={12} className="ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              )}

              {/* 5. Key Skills Learnt - Styled as Gradient Blocks */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles size={16} className="text-brand-purple animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Skills Learnt</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.skills.map((skill, sIdx) => (
                      <motion.div 
                        key={sIdx}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-xl text-[10px] md:text-xs font-bold shadow-md shadow-brand-purple/10 hover:shadow-brand-purple/25 border border-white/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
