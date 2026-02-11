
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Leena Woods",
      role: "Manager",
      img: "https://picsum.photos/id/1011/100/100",
      text: "I was very impressed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
    },
    {
      name: "Vernon Ray",
      role: "CEO",
      img: "https://picsum.photos/id/1012/100/100",
      text: "I was very impressed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
    },
    {
      name: "Jack Wilson",
      role: "Founder",
      img: "https://picsum.photos/id/1014/100/100",
      text: "I was very impressed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est dolorem ipsum quia."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Background Map Decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"><path d="M150,100 L850,100 L850,900 L150,900 Z" fill="currentColor" /></svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm inline-flex items-center">
          <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
          Customers Testimonials
          <span className="w-8 h-[2px] bg-blue-primary ml-3"></span>
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-16">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-xl shadow-lg text-left relative"
            >
              <Quote size={40} className="absolute top-10 right-10 text-gray-100" />
              <p className="text-gray-500 italic mb-10 leading-relaxed z-10 relative">"{t.text}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-navy-900">{t.name}</h4>
                  <p className="text-xs text-blue-primary font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-primary"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-primary cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-primary cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};
