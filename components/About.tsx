
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center">
              <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
              Company Introductions
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">
              Our Loans will Fill Your Dreams <br /> Come True
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour. Duis aute irure dolor lipsum is simply free text used by copy typing refreshing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-blue-50 rounded-full">
                  <Award size={32} className="text-blue-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1 text-lg">Award Winning</h4>
                  <p className="text-sm text-gray-500">Finance categories winning more than 10 awards</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-blue-50 rounded-full">
                  <Shield size={32} className="text-blue-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1 text-lg">Certified Company</h4>
                  <p className="text-sm text-gray-500">Approved Finance company to provide loans</p>
                </div>
              </div>
            </div>

            <button className="mt-12 border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white transition-all px-10 py-4 rounded font-bold uppercase text-sm tracking-widest">
              Learn More
            </button>
          </motion.div>

          {/* Right Image Layout */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c295944b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business Discussion" 
                className="w-full h-auto"
              />
            </div>
            {/* Overlay stats card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl border-l-4 border-blue-primary z-20">
              <p className="text-4xl font-extrabold text-navy-900">24+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
