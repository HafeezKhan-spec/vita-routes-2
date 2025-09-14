import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSpecialitiesOpen, setIsSpecialitiesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Medical SEO', path: '/services/medical-seo' },
    { name: 'Social Media', path: '/services/social-media' },
    { name: 'Content Marketing', path: '/services/content-marketing' },
    { name: 'Paid Marketing', path: '/services/paid-marketing' },
    { name: 'Reputation Management', path: '/services/reputation-management' },
    { name: 'Website Design', path: '/services/website-design' },
    { name: 'Marketing Automation', path: '/services/marketing-automation' },
  ];

  const specialities = [
    { name: 'Addiction Centers', path: '/specialities/addiction-centers' },
    { name: 'Chiropractors', path: '/specialities/chiropractors' },
    { name: 'Eye Clinics', path: '/specialities/eye-clinics' },
    { name: 'Fertility Clinics', path: '/specialities/fertility-clinics' },
    { name: 'Multispecialty Hospitals', path: '/specialities/multispecialty-hospitals' },
    { name: 'Dental Clinics', path: '/specialities/dental-clinics' },
    { name: 'Skin Clinics', path: '/specialities/skin-clinics' },
    { name: 'Specialists and Doctors', path: '/specialities/specialists-and-doctors' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Advance Edge" className="h-10 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-dropdown z-50">
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Specialities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSpecialitiesOpen(true)}
              onMouseLeave={() => setIsSpecialitiesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                <span>Specialities</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isSpecialitiesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-dropdown z-50">
                  <div className="py-2">
                    {specialities.map((speciality) => (
                      <Link
                        key={speciality.path}
                        to={speciality.path}
                        className="block px-4 py-3 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {speciality.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:inline-flex bg-foreground text-background hover:bg-foreground/90">
            BOOK A CALL
          </Button>

          {/* Mobile menu button - placeholder for future implementation */}
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;