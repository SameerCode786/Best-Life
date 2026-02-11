
import React from 'react';
import { motion } from 'framer-motion';

export const Stats: React.FC = () => {
  const stats = [
    { value: "99%", label: "We Approve Loans" },
    { value: "$90K", label: "Daily Payments" },
    { value: "8,900", label: "Happy Customers" },
    { value: "346", label: "Staff Members" }
  ];

  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Office building" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-primary/90"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <h3 className="text-5xl lg:text-6xl font-black mb-4">{s.value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">{s.label}</p>
              <div className="w-10 h-[2px] bg-white mx-auto mt-6 opacity-30"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
