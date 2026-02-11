
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram, Search, ShoppingCart, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden lg:flex bg-gray-50 border-b border-gray-200 py-2 px-8 justify-between items-center text-xs text-gray-600">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Facebook size={14} className="cursor-pointer hover:text-blue-primary" />
            <Twitter size={14} className="cursor-pointer hover:text-blue-primary" />
            <Linkedin size={14} className="cursor-pointer hover:text-blue-primary" />
            <Instagram size={14} className="cursor-pointer hover:text-blue-primary" />
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-primary">Login</a>
            <span>/</span>
            <a href="#" className="hover:text-blue-primary">Company News</a>
            <span>/</span>
            <a href="#" className="hover:text-blue-primary">FAQs</a>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-blue-primary" />
            <span>needhelp@bestlifehomeloans.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-blue-primary" />
            <span>Mon - Sat 8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`${isScrolled ? 'fixed top-0 left-0 bg-white shadow-md' : 'relative bg-white'} w-full transition-all duration-300 py-4 px-4 lg:px-8`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy-900 leading-tight">BEST LIFE</h1>
              <p className="text-[10px] tracking-widest text-gray-500 font-bold uppercase -mt-1">HOME LOANS</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-800">
            <li><a href="#" className="text-blue-primary">Home</a></li>
            <li><a href="#" className="hover:text-blue-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-primary transition-colors">Service</a></li>
            <li><a href="#" className="hover:text-blue-primary transition-colors">Page</a></li>
            <li><a href="#" className="hover:text-blue-primary transition-colors">News</a></li>
            <li><a href="#" className="hover:text-blue-primary transition-colors">Shop</a></li>
            <li><a href="#" className="hover:text-blue-primary transition-colors">Contact Us</a></li>
          </ul>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <Search size={20} className="text-gray-400 cursor-pointer hover:text-blue-primary" />
              <div className="relative">
                <ShoppingCart size={20} className="text-gray-400 cursor-pointer hover:text-blue-primary" />
                <span className="absolute -top-2 -right-2 bg-blue-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-gray-200"></div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Phone size={18} className="text-blue-primary" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase">Call Anytime</p>
                <p className="text-sm font-bold text-navy-900">+1 9812310000</p>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-navy-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6">
          <ul className="space-y-6 text-xl font-bold text-navy-900">
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Service</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>News</a></li>
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};
