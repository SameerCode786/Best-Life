
import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section className="bg-navy-900 py-16 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-blue-primary text-sm font-bold uppercase tracking-widest mb-2">Simple / Transparent / Secure</p>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white">Get a Business Loans Quickly</h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-primary hover:bg-blue-600 transition-all text-white px-10 py-5 rounded font-black uppercase tracking-widest"
          >
            Apply For Loan
          </motion.button>
        </div>
      </div>
    </section>
  );
};
