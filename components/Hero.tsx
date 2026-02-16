import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  // Direct Google Drive image display link derived from the user's provided URL
  const heroImageUrl = "https://lh3.googleusercontent.com/d/1VyghReaG21UVW5_L_Ov5MUSH81vWYjUW";

  return (
    <section id="about" className="relative min-h-[85vh] flex items-center overflow-hidden px-6 pt-10 md:pt-0">
      {/* Background ambient glows for depth */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left: Illustration (Desktop) / Second (Mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative z-10 w-full aspect-square md:aspect-[4/3] max-w-[600px] mx-auto group">
            {/* Soft Glow behind the free-floating image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-blue/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            {/* Free-floating Image Container with subtle floating animation */}
            <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <img 
                src={heroImageUrl} 
                alt="Sakshi Shahani Illustration" 
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                onError={(e) => {
                  // Robust fallback if external link fails
                  e.currentTarget.src = "https://r.jina.ai/i/6ef45501f28b4936bb483984d72db432";
                }}
              />
            </motion.div>

            {/* Decorative accent blurs */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-3xl" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Right: Content (Desktop) / First (Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="order-1 lg:order-2 space-y-6"
        >
          <div className="inline-flex items-center px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-sm border border-brand-purple/20">
             <Sparkles size={14} className="mr-2" />
             Aspiring product manager
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              Hey, <br />
              I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple bg-[length:200%_auto] animate-gradient-x">Sakshi Shahani</span> 👋
            </h1>
            
            <div className="space-y-3 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              <p>
                A final year undergraduate at <span className="font-semibold text-slate-900 dark:text-white border-b-2 border-brand-blue/30">BITS Pilani</span> with a strong interest in product, strategy and problem solving at scale.
              </p>
              <p>
                I've worked across business strategy, analytics and UX roles where I explored <span className="text-brand-purple font-semibold bg-brand-purple/5 px-2 py-0.5 rounded">data-driven decision making</span>, stakeholder coordination, and market insights.
              </p>
              <p>
                I enjoy turning ambiguity into structured decisions and measurable outcomes.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="https://drive.google.com/file/d/19to4ha53yXD9Udh2B73qyO1ktErusmU9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-2xl font-bold shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/30 hover:-translate-y-1 active:scale-95 transition-all flex items-center group text-sm md:text-base"
            >
              <Download size={18} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/sakshi-shahani-57902a25b/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-blue hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-brand-blue/30 transition-all shadow-sm"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;