
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Clock, MapPin, Phone, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080E21] text-gray-400 pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white leading-tight">BEST LIFE</h1>
                <p className="text-[10px] tracking-widest text-gray-500 font-bold uppercase -mt-1">HOME LOANS</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Welcome to Best Life Home Loans. We provide loan as very reasonably interest and you can find out document etur labore. Guiding GA & FL homebuyers for 24+ years.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center text-blue-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Call Anytime</p>
                <p className="text-lg font-bold text-white">44 666 888 0000</p>
              </div>
            </div>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-primary"></span>
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group">
                <ChevronRight size={14} className="text-blue-primary group-hover:translate-x-1 transition-transform" />
                <span>About</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group">
                <ChevronRight size={14} className="text-blue-primary group-hover:translate-x-1 transition-transform" />
                <span>Our Service</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group">
                <ChevronRight size={14} className="text-blue-primary group-hover:translate-x-1 transition-transform" />
                <span>Latest News</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group">
                <ChevronRight size={14} className="text-blue-primary group-hover:translate-x-1 transition-transform" />
                <span>Contact Us</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group">
                <ChevronRight size={14} className="text-blue-primary group-hover:translate-x-1 transition-transform" />
                <span>Testimonial</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-white transition-colors cursor-pointer group">
                <ChevronRight size={14} className="text-blue-primary group-hover:translate-x-1 transition-transform" />
                <span>Loan Calculator</span>
              </li>
            </ul>
          </div>

          {/* News Col */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 relative inline-block">
              Latest News
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-primary"></span>
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <img src="https://picsum.photos/id/1/60/60" alt="News" className="w-16 h-16 rounded object-cover" />
                <div>
                  <p className="text-xs text-blue-primary font-bold uppercase mb-1">Dec 31, 2023</p>
                  <p className="text-sm font-bold text-white leading-tight hover:text-blue-primary cursor-pointer transition-colors">For Car auto you will get 90% loan amount</p>
                </div>
              </div>
              <div className="flex gap-4">
                <img src="https://picsum.photos/id/2/60/60" alt="News" className="w-16 h-16 rounded object-cover" />
                <div>
                  <p className="text-xs text-blue-primary font-bold uppercase mb-1">Dec 31, 2023</p>
                  <p className="text-sm font-bold text-white leading-tight hover:text-blue-primary cursor-pointer transition-colors">How to get education loan for overseas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-blue-primary"></span>
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start space-x-4 group">
                <Mail className="text-blue-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span className="hover:text-white cursor-pointer">needhelp@bestlifehomeloans.com</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <Clock className="text-blue-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>Mon - Sat 8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <MapPin className="text-blue-primary shrink-0 group-hover:scale-110 transition-transform" size={20} />
                <span>80 Brooklyn Golden Street, New York. USA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © Copyright 2024 by Best Life Home Loans. NMLS #546285.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-primary hover:text-white transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
