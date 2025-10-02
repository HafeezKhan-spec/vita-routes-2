import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.webp';
import bgvid from '@/assets/bgvid.mp4'; 

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSpecialitiesOpen, setIsSpecialitiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSpecialitiesOpen, setIsMobileSpecialitiesOpen] = useState(false);
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
    if (isContactModalOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isContactModalOpen, isMobileMenuOpen]);
  const location = useLocation();
  const navigate = useNavigate();

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
  
  // Define the base text color based on scroll state
  const textColorClass = isScrolled ? 'text-foreground' : 'text-orange-500 text-glow';
  // Define the hover color to always be primary
  const hoverColorClass = 'hover:text-primary';

  return (
    <header
      className={`sticky top-0 ${isMobileMenuOpen ? 'z-[1000]' : 'z-50'} transition-all duration-500 relative ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl shadow-blue-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Video Background Container */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden opacity-82"
      >
        {/* Video: Only render when not scrolled for better performance/behavior */}
        {!isScrolled && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out" 
            src={bgvid}
          />
        )}

        {/* White Overlay: This smoothly transitions from transparent to white */}
        <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isScrolled ? 'opacity-100' : 'opacity-0'
            }`} 
            style={{ backgroundColor: 'white' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20 md:h-28 transition-all duration-700 ease-out">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* Mobile-only back button */}
            <button
              className="md:hidden rounded-full p-1 transition-all duration-200 hover:bg-gray-100"
              aria-label="Go back"
              title="Go back"
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate('/');
                }
              }}
            >
              <ArrowLeft className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            </button>

            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Advance Edge"
                className={`h-12 md:h-20 w-auto transition-all duration-700 ease-out hover:scale-105 ${
                  isScrolled ? 'md:scale-110 drop-shadow-lg' : 'scale-100'
                } md:translate-x-[100px]`}
              />
            </Link>
          </div>

          {/* Horizontal Lines: show only before scrolling */}
          {!isScrolled && (
            <>
              <div className="hidden md:block w-px h-16 absolute left-[calc(50%-300px)] transition-colors duration-500 bg-white/60"></div>
              <div className="hidden md:block w-80 h-px absolute left-[calc(50%-620px)] top-[100px] transition-colors duration-500 bg-white/60"></div>
            </>
          )}



          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative text-xl font-bold transition-all duration-300 ${hoverColorClass} hover:scale-105 hover:drop-shadow-sm
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-500 after:ease-out hover:after:w-full
                ${isActive('/') ? 'text-primary' : textColorClass} -translate-x-[10px]`}
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
                // Apply color class to button
                className={`flex items-center space-x-1 text-lg font-bold ${textColorClass} ${hoverColorClass} transition-all duration-300 hover:scale-105 hover:drop-shadow-sm`}
                onClick={() => setIsServicesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 ease-out ${
                    isServicesOpen ? 'rotate-180 text-primary scale-110' : ''
                  } ${textColorClass}`}
                />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl shadow-blue-500/20 transform origin-top animate-dropdown z-50"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServicesDelayed}
                >
                  <div className="py-3">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-5 py-3 text-base font-medium text-gray-700 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-7 hover:scale-[1.02] hover:shadow-sm rounded-lg mx-2"
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
                // Apply color class to button
                className={`flex items-center space-x-1 text-lg font-bold ${textColorClass} ${hoverColorClass} transition-all duration-300 hover:scale-105 hover:drop-shadow-sm`}
                onClick={() => setIsSpecialitiesOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isSpecialitiesOpen}
              >
                <span>Specialities</span>
                <ChevronDown
                  className={`h-4 w-4 transition-all duration-300 ease-out ${
                    isSpecialitiesOpen ? 'rotate-180 text-primary scale-110' : ''
                  } ${textColorClass}`}
                />
              </button>

              {isSpecialitiesOpen && (
                <div
                  className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl shadow-blue-500/20 transform origin-top animate-dropdown z-50"
                  onMouseEnter={openSpecialities}
                  onMouseLeave={closeSpecialitiesDelayed}
                >
                  <div className="py-3">
                    {specialities.map((speciality) => (
                      <Link
                        key={speciality.path}
                        to={speciality.path}
                        className="block px-5 py-3 text-base font-medium text-gray-700 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-7 hover:scale-[1.02] hover:shadow-sm rounded-lg mx-2"
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
              className={`relative text-lg font-bold transition-all duration-300 ${hoverColorClass} hover:scale-105 hover:drop-shadow-sm
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-500 after:ease-out hover:after:w-full
                ${isActive('/about') ? 'text-primary' : textColorClass}`}
            >
              About
            </Link>

            <Link
              to="/blog"
              className={`relative text-lg font-bold transition-all duration-300 ${hoverColorClass} hover:scale-105 hover:drop-shadow-sm
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-500 after:ease-out hover:after:w-full
                ${isActive('/blog') ? 'text-primary' : textColorClass}`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`relative text-lg font-bold transition-all duration-300 ${hoverColorClass} hover:scale-105 hover:drop-shadow-sm
                after:content-[''] after:block after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent after:transition-all after:duration-500 after:ease-out hover:after:w-full
                ${isActive('/contact') ? 'text-primary' : textColorClass}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => setIsContactModalOpen(true)}
            className="hidden md:inline-flex bg-gradient-to-r from-black to-gray-800 text-white font-semibold border-2 border-orange-500 
                       px-6 py-3 rounded-xl 
                       transition-all duration-300 ease-out
                       hover:text-orange-500 hover:bg-gradient-to-r hover:from-gray-900 hover:to-black hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.4)] hover:scale-105 hover:-translate-y-0.5
                       -ml-[100px]"
          >
            BOOK A CALL
          </Button>


          {/* Mobile menu button */}
          <button
            className="md:hidden hover:scale-110 transition-transform duration-200"
            title="Open mobile menu"
            aria-label="Open mobile menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              // Apply color class to mobile icon
              className={`h-6 w-6 transition-all duration-300 hover:rotate-90 hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        createPortal(
          <div className="fixed inset-0 z-[1100] md:hidden">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-11/12 sm:w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200/60 shadow-2xl shadow-blue-500/20 animate-in slide-in-from-right duration-300 overflow-y-auto scroll-smooth overscroll-contain">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4 sticky top-0 bg-white/95 backdrop-blur-xl z-10 pb-3 border-b border-gray-200">
                  <span className="text-xl font-bold text-gray-900">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-200 rounded-full p-1 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${isActive('/') ? 'text-primary' : 'text-gray-800'} hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-5 hover:scale-[1.01] active:bg-gray-200`}
                >
                  Home
                </Link>

                {/* Services accordion */}
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-gray-800 transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary active:bg-gray-200"
                  onClick={() => setIsMobileServicesOpen((v) => !v)}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-2 space-y-1 max-h-48 overflow-y-auto pr-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded-md text-sm text-gray-700 transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-5 active:bg-gray-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Specialities accordion */}
                <button
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-gray-800 transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary active:bg-gray-200"
                  onClick={() => setIsMobileSpecialitiesOpen((v) => !v)}
                  aria-expanded={isMobileSpecialitiesOpen}
                >
                  <span>Specialities</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSpecialitiesOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                {isMobileSpecialitiesOpen && (
                  <div className="ml-2 space-y-1 max-h-48 overflow-y-auto pr-2">
                    {specialities.map((speciality) => (
                      <Link
                        key={speciality.path}
                        to={speciality.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded-md text-sm text-gray-700 transition-all hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-5 active:bg-gray-200"
                      >
                        {speciality.name}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${isActive('/about') ? 'text-primary' : 'text-gray-800'} hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-5 hover:scale-[1.01] active:bg-gray-200`}
                >
                  About
                </Link>

                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${isActive('/blog') ? 'text-primary' : 'text-gray-800'} hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-5 hover:scale-[1.01] active:bg-gray-200`}
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${isActive('/contact') ? 'text-primary' : 'text-gray-800'} hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary hover:pl-5 hover:scale-[1.01] active:bg-gray-200`}
                >
                  Contact
                </Link>

                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsContactModalOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-black to-gray-800 text-white font-semibold border-2 border-orange-500 px-4 py-3 rounded-xl transition-all hover:text-orange-500 hover:bg-gradient-to-r hover:from-gray-900 hover:to-black hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.4)]"
                  >
                    BOOK A CALL
                  </Button>
                </div>
                </nav>
              </div>
            </div>
          </div>,
          document.body
        )
      )}

      {/* Contact Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto animate-in fade-in duration-300">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl max-w-md w-full mx-4 relative my-8 max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20 animate-in zoom-in-95 duration-300">
              <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">CONTACT US</h2>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-200 rounded-full p-1 hover:bg-gray-100"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical transition-all duration-200 hover:border-gray-400"
                    rows={4}
                    placeholder="Message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium hover:scale-[1.02] hover:shadow-lg"
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