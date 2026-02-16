
import React from 'react';
import Section from './Section';
import { CASE_COMPS } from '../constants';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseCompetitions: React.FC = () => {
  // Helper to highlight specific words and metrics
  const highlightKeywords = (text: string) => {
    // Regex for specific keywords requested: Final round Shortlisted, top 100, 28.2k, top 3, 400+, 7+
    const parts = text.split(/(Final round Shortlisted|top 100|28\.2k|top 3|400\+|7\+)/gi);
    return parts.map((part, i) => {
      const isKeyword = /(Final round Shortlisted|top 100|28\.2k|top 3|400\+|7\+)/i.test(part);
      if (isKeyword) {
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
      id="cases" 
      title="Case Competitions" 
      subtitle="Selected achievements in product and strategy competitions"
      className="bg-slate-50/30 dark:bg-slate-900/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {CASE_COMPS.map((comp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white dark:bg-slate-900/60 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl hover:border-brand-purple/30 transition-all duration-500 flex flex-col overflow-hidden"
          >
            {/* Background Accent Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-brand-purple/10 transition-colors" />

            <div className="relative z-10 p-8 flex flex-col h-full">
              {/* 1. Title */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                    {comp.title}
                  </span>
                </h3>
              </div>

              {/* 2. Photo */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg mb-6">
                <img 
                  src={comp.image} 
                  alt={comp.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* 3. Description with Keywords Highlighted */}
              <div className="mb-8">
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  {highlightKeywords(comp.description)}
                </p>
              </div>

              {/* 4. View Deck Button */}
              <div className="mt-auto flex justify-end">
                <motion.a 
                  href={comp.deckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold shadow-lg shadow-brand-purple/10 hover:shadow-brand-purple/30 transition-all group/btn border border-white/10"
                >
                  View Deck
                  <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CaseCompetitions;
