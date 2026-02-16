
import React from 'react';
import Section from './Section';
import { PORS } from '../constants';
import { ExternalLink, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PORs: React.FC = () => {
  // Helper to highlight numbers and key metrics
  const highlightMetrics = (text: string) => {
    const parts = text.split(/(₹\d+(?:\.\d+)?L\+?|\d+%|\d+(?:,\d+)?\+?|1M\+)/g);
    return parts.map((part, i) => {
      const isMetric = /(₹\d+(?:\.\d+)?L\+?|\d+%|\d+(?:,\d+)?\+?|1M\+)/.test(part);
      if (isMetric) {
        return (
          <span key={i} className="font-bold text-brand-purple dark:text-brand-purple/90 bg-brand-purple/5 px-1 rounded">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Section 
      id="pors" 
      title="Positions of Responsibility" 
      subtitle="Leadership roles and community impact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {PORS.map((por, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl p-8 md:p-10 flex flex-col overflow-hidden transition-all duration-500 hover:border-brand-purple/30"
          >
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/5 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-brand-purple/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-[60px] -ml-10 -mb-10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col h-full">
              {/* 1. Card Header: Title & Role */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
                    {por.organization}
                  </h3>
                  {por.link && (
                    <a 
                      href={por.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-purple transition-colors p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 group/link"
                    >
                      <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
                
                {por.position && (
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-wider uppercase border border-brand-purple/20">
                    <ShieldCheck size={14} className="mr-2" />
                    {por.position}
                  </div>
                )}
              </div>

              {/* 2. Photo Showcase */}
              {por.image && (
                <div className="mb-8 w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 group-hover:scale-[1.01] transition-transform duration-700">
                  <img 
                    src={por.image} 
                    alt={`${por.organization} showcase`} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              )}

              {/* 3. Bullet Points */}
              <div className="space-y-4 flex-grow">
                {por.description.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-4 group/bullet">
                    <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-brand-purple shadow-[0_0_8px_rgba(139,92,246,0.6)] group-hover/bullet:scale-125 transition-transform" />
                    <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      {highlightMetrics(bullet)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Floating Decoration Icon */}
              <div className="absolute top-8 right-8 text-slate-100 dark:text-slate-800 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <Star size={64} strokeWidth={1} />
              </div>
            </div>

            {/* Subtle Gradient Line at Bottom */}
            <div className="absolute bottom-0 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default PORs;
