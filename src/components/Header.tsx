import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.webp';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSpecialitiesOpen, setIsSpecialitiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Timers to avoid flicker when moving from trigger to dropdown
  const servicesCloseTimer = useRef<number | null>(null);
  const specialitiesCloseTimer = useRef<number | null>(null);

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setIsServicesOpen(true);
  };
  const closeServicesDelayed = () => {
    servicesCloseTimer.current = window.setTimeout(() => setIsServicesOpen(false), 150);
  };

  const openSpecialities = () => {
    if (specialitiesCloseTimer.current) clearTimeout(specialitiesCloseTimer.current);
    setIsSpecialitiesOpen(true);
  };
  const closeSpecialitiesDelayed = () => {
    specialitiesCloseTimer.current = window.setTimeout(() => setIsSpecialitiesOpen(false), 150);
  };

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
    <header
      className={`sticky top-0 z-50 transition-all duration-500 relative ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
          : 'bg-white'
      }`}
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-28 transition-all duration-500">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Advance Edge"
              className={`h-20 w-auto transition-transform duration-500 ${
                isScrolled ? 'scale-120' : 'scale-110'
              } translate-x-[100px]`}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative text-xl font-semibold transition-all duration-300 hover:text-primary hover:scale-105
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full
                ${isActive('/') ? 'text-primary' : 'text-foreground'} -translate-x-[10px]`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServicesDelayed}
            >
              <button
                className={`flex items-center space-x-1 text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105`}
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-64 bg-white border border-border rounded-lg shadow-xl transform origin-top animate-dropdown z-50"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesDelayed}
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:pl-6 hover:scale-[1.02]"
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
              onMouseEnter={openSpecialities}
              onMouseLeave={closeSpecialitiesDelayed}
            >
              <button
                className={`flex items-center space-x-1 text-lg font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105`}
                onClick={() => setIsSpecialitiesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isSpecialitiesOpen}
              >
                <span>Specialities</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isSpecialitiesOpen ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>

              {isSpecialitiesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-64 bg-white border border-border rounded-lg shadow-xl transform origin-top animate-dropdown z-50"
                  onMouseEnter={openSpecialities}
                  onMouseLeave={closeSpecialitiesDelayed}
                >
                  <div className="py-2">
                    {specialities.map((speciality) => (
                      <Link
                        key={speciality.path}
                        to={speciality.path}
                        className="block px-4 py-3 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:pl-6 hover:scale-[1.02]"
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
              className={`relative text-lg font-semibold transition-all duration-300 hover:text-primary hover:scale-105
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full
                ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`relative text-lg font-semibold transition-all duration-300 hover:text-primary hover:scale-105
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full
                ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => setIsContactModalOpen(true)}
            className="hidden md:inline-flex bg-black text-white font-semibold border-2 border-orange-500 
                       px-6 py-3 rounded-md 
                       transition-all duration-300 
                       hover:text-orange-500 bg-black hover:shadow-[0_0_15px_3px_rgba(249,115,22,0.7)] 
                       -ml-[100px]"
          >
            BOOK A CALL
          </Button>


          {/* Mobile menu button */}
          <button className="md:hidden" title="Open mobile menu" aria-label="Open mobile menu">
            <svg
              className={`h-6 w-6 text-foreground transition-transform duration-300 hover:rotate-90`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-md w-full mx-4 relative my-8 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">CONTACT US</h2>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted:', formData);
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({ name: '', email: '', phone: '', message: '' });
                setIsContactModalOpen(false);
              }} className="space-y-4">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Phone"
                  />
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="modal-message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical"
                    rows={4}
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  SUBMIT
                </button>
              </form>

              <p className="text-sm text-gray-600 text-center mt-4">
                Fill out the form below, and we will be in touch shortly.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
