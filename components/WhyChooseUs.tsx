
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="bg-blue-primary text-white p-8 absolute top-0 left-0 z-20 rounded-xl flex items-center space-x-4">
              <span className="text-3xl font-black">26</span>
              <span className="text-sm font-bold uppercase tracking-widest leading-tight">Years of working <br /> experience</span>
            </div>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team working" className="w-full rounded-2xl shadow-2xl mt-12 relative z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center">
              <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
              Our Benefits
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-8 leading-tight">Why Choose Us?</h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">
              Provide your best loan services and our experience staff help you. Less document and fast approve process of passages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-navy-900 font-bold">
                  <ChevronRight size={18} className="text-blue-primary" />
                  <span>Professional Team</span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur notted.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-navy-900 font-bold">
                  <ChevronRight size={18} className="text-blue-primary" />
                  <span>Quick Payments</span>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur notted.</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-navy-900">Loan Process</span>
                  <span className="font-bold text-blue-primary">95%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-blue-primary"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-navy-900">Consultancy</span>
                  <span className="font-bold text-blue-primary">80%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-blue-primary"
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-navy-900">Payment Benefits</span>
                  <span className="font-bold text-blue-primary">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="h-full bg-blue-primary"
                  ></motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
