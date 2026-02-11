
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  const listItems = [
    "Credit Card Per Day",
    "Personal Loan",
    "Car / Auto Loan",
    "Home Loan",
    "Gold Loan Per Day",
    "Mortgage Loan",
    "Education / Student Loan",
    "Wedding Loan"
  ];

  const steps = [
    { num: 1, text: "Easy loan solutions for small agency, business and companies" },
    { num: 2, text: "Submit Required Document and Details for loan approval" },
    { num: 3, text: "Take our loans now and pay later when studies completed" },
    { num: 4, text: "Get small loans for more needs in 2 hours with less documents" }
  ];

  return (
    <section className="bg-navy-900 py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center">
              <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
              Trusted Company
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">Most of the People Trust on Us For Fast Services</h2>
            
            <div className="flex items-center gap-6 mb-10">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1556742049-63cf56980111?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Happy client" className="w-48 h-32 object-cover rounded-xl" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "There are many variations of passages of lorem ipsum available the majority have suffered alteration in some form by injected humour."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {listItems.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-semibold">
                  <div className="w-5 h-5 rounded-full border border-blue-primary flex items-center justify-center">
                    <Check size={12} className="text-blue-primary" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 space-y-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 p-8 rounded-xl flex items-center space-x-8 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-primary flex items-center justify-center text-2xl font-black shrink-0 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <p className="text-lg font-bold text-gray-100">{step.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
