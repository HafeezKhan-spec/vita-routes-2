import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, Award, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const Home = () => {
  // State declarations
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Services data
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      icon: '🌐'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      icon: '📱'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase visibility, engagement, and conversions.',
      icon: '📊'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      icon: '☁️'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      icon: '🎨'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain customer trust.',
      icon: '🛡️'
    },
  ];

  // Portfolio projects
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_3.png',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: 'https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_4.png',
      technologies: ['React Native', 'Firebase', 'Blockchain']
    },
    {
      title: 'Healthcare Dashboard',
      category: 'UI/UX Design',
      description: 'Comprehensive healthcare management dashboard for medical professionals.',
      image: 'https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_5.png',
      technologies: ['Vue.js', 'D3.js', 'PostgreSQL']
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Enterprise cloud migration project reducing costs by 40% and improving performance.',
      image: 'https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_1.png',
      technologies: ['AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Multi-channel marketing campaign that increased conversions by 250%.',
      image: 'https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_2.png',
      technologies: ['Google Ads', 'Analytics', 'SEO']
    },
    {
      title: 'Cybersecurity Audit',
      category: 'Cybersecurity',
      description: 'Comprehensive security assessment and implementation for financial institution.',
      image: 'https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_3.png',
      technologies: ['Penetration Testing', 'SIEM', 'Compliance']
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Advance Edge Digital transformed our online presence completely. Our e-commerce sales increased by 300% within six months of launching the new platform. Their expertise is truly exceptional.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Solutions",
      image: "https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_2.png"
    },
    {
      quote: "The mobile app they developed for us has been a game-changer. User engagement increased by 250% and our customer satisfaction scores are at an all-time high. Highly recommended!",
      name: "Michael Chen",
      role: "Product Manager",
      company: "InnovateCorp",
      image: "https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_5.png"
    },
    {
      quote: "Their digital marketing strategy helped us reach new markets and grow our business by 400%. The team's creativity and data-driven approach delivered outstanding results.",
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthTech Inc.",
      image: "https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_4.png"
    },
  ];



  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };



  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-blue-800 bg-[url('/src/assets/image.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        <div className="relative z-10 container mx-auto px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Top Healthcare Marketing Agency
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              From Click to Appointment, HIPAA-Aware Patient Growth for Clinics and Hospitals. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <button className="bg-white text-orange-500 hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out px-8 py-4 text-lg font-semibold rounded-xl hover:-translate-y-1">
                Explore Services
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out px-8 py-4 text-lg font-semibold rounded-xl hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://c.animaapp.com/mfjwb3u5cixZOs/img/ai_2.png"
                alt="Digital innovation team"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Pioneering Digital Excellence Since 2015
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Advance Edge Digital, we specialize in transforming businesses through innovative digital solutions. Our expert team combines strategic thinking with cutting-edge technology to deliver results that drive growth and competitive advantage.
              </p>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                From web development and mobile applications to digital marketing and cloud solutions, we're your trusted partner in navigating the digital landscape and achieving sustainable success.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out px-8 py-3 rounded-xl font-semibold hover:-translate-y-1">
                Discover Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a full spectrum of digital services designed to transform your business and accelerate growth in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group hover:border-orange-200"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our successful projects and see how we've helped businesses across various industries achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group hover:border-orange-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from business leaders who have transformed their organizations with our digital solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-12 shadow-2xl shadow-blue-900/30 hover:shadow-3xl transition-shadow duration-500">
              <div className="text-center mb-8">
                <div className="text-5xl text-orange-500 mb-6 animate-pulse">"</div>
                <blockquote className="text-2xl text-gray-900 leading-relaxed mb-8 italic">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={`${testimonials[currentTestimonial].name} portrait`}
                  className="w-16 h-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <div className="text-left">
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-orange-500 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 p-3 rounded-xl backdrop-blur-sm"
              >
                ←
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    title={`Testimonial ${index + 1}`}
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentTestimonial ? 'bg-white shadow-lg' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white/20 text-white border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 p-3 rounded-xl backdrop-blur-sm"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Advance Your Digital Edge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our digital solutions can transform your business and drive sustainable growth in today's competitive landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Commitments */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Our Commitment to You
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When you partner with Advance Edge Digital, you're not just getting a service provider – you're gaining a strategic partner committed to your digital success.
              </p>
              <ul className="space-y-6">
                {[
                  'Personalized consultation within 24 hours',
                  'Transparent pricing with no hidden fees',
                  'Dedicated project manager for your account',
                  'Ongoing support and maintenance included',
                ].map((commitment, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <span className="text-green-500 text-2xl hover:scale-125 transition-transform duration-200">✓</span>
                    <span className="text-lg text-gray-900 leading-relaxed">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-2xl shadow-blue-500/10 hover:shadow-3xl transition-shadow duration-500">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Get Started Today
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 hover:shadow-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 hover:shadow-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 hover:shadow-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 hover:shadow-sm min-h-32 resize-vertical"
                    placeholder="Tell us about your business goals and how we can help you achieve them..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-out py-3 rounded-xl font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-8 py-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Advance Edge Digital for their digital transformation journey.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div>
                <h4 className="text-2xl font-bold mb-6">Advance Edge Digital</h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Empowering businesses with cutting-edge digital solutions and innovative strategies for sustainable growth.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-200">📘</a>
                  <a href="#" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-200">🐦</a>
                  <a href="#" className="text-gray-400 hover:text-white hover:scale-125 transition-all duration-200">📷</a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  <li><a href="#hero" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200">Home</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200">About</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200">Services</a></li>
                  <li><a href="#portfolio" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200">Portfolio</a></li>
                  <li><a href="#testimonials" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200">Testimonials</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-200">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                    <span>📞</span>
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200">
                    <span>✉️</span>
                    <span>info@advanceedgedigital.com</span>
                  </div>
                  <div className="flex items-start space-x-3 hover:text-white transition-colors duration-200">
                    <span>📍</span>
                    <span>
                      456 Innovation Drive<br />
                      Tech District<br />
                      San Francisco, CA 94105
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h4 className="text-xl font-bold mb-6">Office Hours</h4>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <div className="font-medium">Monday - Friday</div>
                    <div>8:00 AM - 6:00 PM EST</div>
                  </div>
                  <div>
                    <div className="font-medium">Saturday</div>
                    <div>9:00 AM - 2:00 PM EST</div>
                  </div>
                  <div>
                    <div className="font-medium">Sunday</div>
                    <div>Emergency Support Only</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Advance Edge Digital. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
