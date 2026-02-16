
import React from 'react';
import Section from './Section';
import { Mail, Linkedin, Phone, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const photoUrl = "https://lh3.googleusercontent.com/d/1jIfJhQOWaznNbK_B7ScLHk6Vx3kiX4mI";

  const contactMethods = [
    {
      icon: <Phone size={18} />,
      label: "+91-8696067222",
      href: "tel:+918696067222",
      color: "brand-purple"
    },
    {
      icon: <Mail size={18} />,
      label: "sakshi.shahani0211@gmail.com",
      href: "mailto:sakshi.shahani0211@gmail.com",
      color: "brand-blue"
    },
    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/sakshi-shahani-57902a25b/",
      color: "brand-purple",
      isExternal: true
    }
  ];

  return (
    <div className="relative">
      {/* Soft Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      </div>

      <Section id="contact" title="Let’s Connect" subtitle="">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              {/* Glow Effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={photoUrl} 
                  alt="Sakshi Shahani" 
                  className="w-full h-auto max-w-sm object-cover"
                />
              </div>
              
              {/* Floating Decoration */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:block"
              >
                <Sparkles className="text-brand-purple" size={24} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col text-center lg:text-left"
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              Sakshi Shahani
            </h3>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
              Hey! If you have an idea you’d like to talk about, a product to build, or just want to connect, I’d love to chat.
            </p>

            <div className="flex flex-col gap-4 mb-10 items-center lg:items-start">
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.href}
                  target={method.isExternal ? "_blank" : undefined}
                  rel={method.isExternal ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="w-fit flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:border-brand-purple/40 hover:shadow-brand-purple/10 transition-all group"
                >
                  <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-${method.color} group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-700 dark:text-slate-200">
                    {method.label}
                  </span>
                  {method.isExternal && <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
                </motion.a>
              ))}
            </div>

            <p className="text-slate-400 dark:text-slate-500 font-medium italic">
              Looking forward to building something meaningful together.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
