
import React from 'react';
import { motion } from 'framer-motion';
import { Home, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Home Buying",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Find the perfect loan to purchase your dream home with low rates and flexible terms.",
      icon: <Home className="text-white" size={24} />
    },
    {
      title: "Refinancing",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Lower your monthly payments or tap into your home's equity with our refinance options.",
      icon: <RefreshCw className="text-white" size={24} />
    },
    {
      title: "Loan Pre-Approval",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Get a head start on your home search with a solid pre-approval letter in your hand.",
      icon: <CheckCircle className="text-white" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm inline-flex items-center">
          <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
          What We're Offering
          <span className="w-8 h-[2px] bg-blue-primary ml-3"></span>
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-16">All Loans Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-blue-primary p-3 rounded-lg shadow-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-10 text-left">
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{s.desc}</p>
                <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
