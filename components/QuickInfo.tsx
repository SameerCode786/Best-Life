
import React from 'react';
import { motion } from 'framer-motion';
import { Percent, CheckCircle2, LayoutGrid } from 'lucide-react';

export const QuickInfo: React.FC = () => {
  const items = [
    {
      icon: <Percent className="text-blue-primary" size={36} />,
      title: "Very Low Rates on All Loans",
      desc: "We offer competitive interest rates to help you save more over time."
    },
    {
      icon: <CheckCircle2 className="text-blue-primary" size={36} />,
      title: "99% Success Rate Guarantee",
      desc: "Our specialized process ensures higher approval chances for you."
    },
    {
      icon: <LayoutGrid className="text-blue-primary" size={36} />,
      title: "Flexible with Your Repayments",
      desc: "Customized repayment plans tailored to your financial situation."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div className="lg:w-1/2">
            <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm flex items-center">
              <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
              Get to Know About
            </p>
            <h2 className="text-4xl font-extrabold text-navy-900 leading-tight">Flexible and Quick Business Loans For You</h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-8">
              Turpis cursus in hac habitasse platea dictumst quisque. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. There of available but the majority have suffered alteration in some form, by injected humou.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow flex items-start space-x-6"
            >
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
