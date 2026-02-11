
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, CreditCard, ShieldCheck } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="text-blue-primary" size={32} />,
      title: "Quick Payment Process",
      desc: "Fast and hassle-free application tracking for your peace of mind."
    },
    {
      icon: <CreditCard className="text-blue-primary" size={32} />,
      title: "No Prepayment Fees",
      desc: "Flexibility to pay off your loan early without any extra charges."
    },
    {
      icon: <ShieldCheck className="text-blue-primary" size={32} />,
      title: "100% Secure & Trusted",
      desc: "NMLS #546285. We prioritize your data security and privacy."
    }
  ];

  return (
    <div className="container mx-auto px-6 -mt-16 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-2xl bg-white">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ backgroundColor: '#F0F7FF' }}
            className={`p-10 flex items-start space-x-6 border-gray-100 ${i !== 2 ? 'md:border-r' : ''}`}
          >
            <div className="p-4 bg-blue-50 rounded-lg group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold text-navy-900 mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
