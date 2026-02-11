
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calculator } from 'lucide-react';

export const Hero: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(16000);
  const [months, setMonths] = useState(8);

  const calculateMonthly = () => {
    const rate = 0.05; // 5% simulated
    return ((loanAmount * (1 + rate)) / months).toFixed(2);
  };

  const calculateTotal = () => {
    const rate = 0.05;
    return (loanAmount * (1 + rate)).toFixed(0);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Home Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-white"
          >
            <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center">
              <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
              Simple & Secure Loan Process
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Connecting Your <br /> 
              <span className="text-blue-primary">Loan Needs</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Guiding GA & FL homebuyers for 24+ years with expert advice and tailored financing solutions. Your dream home is within reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-primary hover:bg-blue-600 transition-all px-8 py-4 rounded font-bold text-white flex items-center group">
                Discover More
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 transition-all px-8 py-4 rounded font-bold text-white">
                Our Services
              </button>
            </div>
          </motion.div>

          {/* Right Content - Loan Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-4 border-blue-primary">
              <div className="bg-navy-900 p-6 flex items-center justify-between">
                <h3 className="text-white text-xl font-bold flex items-center">
                  <Calculator size={20} className="mr-2 text-blue-primary" />
                  How Much You Need
                </h3>
              </div>
              
              <div className="p-8 space-y-8">
                {/* Amount Slider */}
                <div>
                  <div className="flex justify-between text-sm font-bold text-gray-500 mb-4">
                    <span>$1000</span>
                    <span className="text-navy-900 text-lg">${loanAmount}</span>
                    <span>$40000</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="40000" 
                    step="500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-primary"
                  />
                </div>

                {/* Months Slider */}
                <div>
                  <div className="flex justify-between text-sm font-bold text-gray-500 mb-4">
                    <span>1 Months</span>
                    <span className="text-navy-900 text-lg">{months} Months</span>
                    <span>12 Months</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="12" 
                    step="1"
                    value={months}
                    onChange={(e) => setMonths(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-primary"
                  />
                </div>

                {/* Results */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-500">Pay Monthly</span>
                    <span className="text-navy-900 font-bold text-lg">${calculateMonthly()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-500">Term of Use</span>
                    <span className="text-navy-900 font-bold">{months} Months</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-gray-500">Total Pay Back</span>
                    <span className="text-navy-900 font-bold text-lg text-blue-primary">${calculateTotal()}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-primary hover:bg-blue-600 transition-all py-4 rounded text-white font-bold uppercase tracking-wider mt-4">
                  Apply For Loan
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
