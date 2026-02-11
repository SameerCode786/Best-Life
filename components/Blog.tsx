
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, User, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const posts = [
    {
      title: "For Car auto you will get 90% loan amount",
      date: "31 Dec, 2023",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "How to get education loan for overseas",
      date: "31 Dec, 2023",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Easy way to calculate interest on a loan",
      date: "31 Dec, 2023",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="text-blue-primary font-bold tracking-widest uppercase mb-4 text-sm inline-flex items-center">
          <span className="w-8 h-[2px] bg-blue-primary mr-3"></span>
          Directly From The Blog
          <span className="w-8 h-[2px] bg-blue-primary ml-3"></span>
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-16">News & Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-left bg-gray-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-4 left-4 bg-blue-primary text-white text-xs font-bold px-4 py-2 rounded">
                  {p.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6 group-hover:text-blue-primary transition-colors cursor-pointer leading-tight">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <div className="flex items-center space-x-6 text-gray-500 text-xs font-bold uppercase">
                    <button className="flex items-center space-x-2 hover:text-blue-primary">
                      <ArrowRight size={14} className="text-blue-primary" />
                      <span>Read More</span>
                    </button>
                    <div className="flex items-center space-x-2">
                      <MessageSquare size={14} className="text-blue-primary" />
                      <span>0 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
