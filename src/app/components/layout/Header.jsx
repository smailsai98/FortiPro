'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`${poppins.className} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Centered container with max-width */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <img
                src="/assets/logot.png"
                alt="logo"
                className="h-8 sm:h-9 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link 
                href="/Ride" 
                className="text-sm font-bold text-purple-800 hover:text-purple-600 transition-colors"
              >
                Commander
              </Link>
            
            </nav>

            {/* Desktop Badge */}
            <div className="hidden lg:flex items-center">
              <Badge text="English" color="bg-purple-700" />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-purple-800 hover:text-purple-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-white border-t border-gray-100 shadow-lg">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-3xl px-4 sm:px-6 py-4 space-y-1">
              <Link 
                href="/Ride" 
                className="block py-2 text-sm font-bold text-purple-800 hover:text-purple-600 transition-colors"
              >
                Commander
              </Link>
              
              <div className="pt-3 mt-3 border-t border-gray-100">
                <Badge text="English" color="bg-purple-700" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

const MobileDropdown = ({ title, items = [] }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="py-1">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex items-center justify-between w-full py-2 text-sm font-bold text-purple-800 hover:text-purple-600 transition-colors"
      >
        {title}
        <ChevronDown className={`ml-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} size={16} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="pl-4 py-1 space-y-1">
          {items.map((item, i) => (
            <li key={i}>
              <Link 
                href="/#" 
                className="block py-1.5 text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Badge = ({ text, color = "bg-blue-500" }) => (
  <span className={`inline-flex items-center px-3 py-1.5 text-xs sm:text-sm font-semibold text-white rounded-full ${color}`}>
    <Globe className="w-3.5 h-3.5 mr-1.5" />
    {text}
  </span>
);