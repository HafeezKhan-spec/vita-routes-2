import React, { useState, useCallback } from 'react';
import contact from "../assets/contact_bg.jpg";

// Helper component for SVG icons to keep the main component cleaner
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d={path} />
    </svg>
);

// Main App Component
const App = () => {
    // State to show the success message after the form has been submitted
    const [submitted, setSubmitted] = useState(false);
    
    // Handler for a successful submission. Netlify will redirect to a success page
    // but in a single-page React app, we often use a hidden input and history push.
    // However, the simplest Netlify integration is to monitor URL query params.
    // For this example, we'll use a simple onSubmit handler that will be overridden by Netlify.
    // Note: Netlify's standard redirect handles the submission, 
    // so this is a simplified approach for demonstration.
    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        // We let Netlify handle the submission first, 
        // but can update local state for a better UX after a successful redirect.
        // For simple integration, Netlify's built-in redirect is often used.
        // In a complex React setup, you'd use Netlify's AJAX submission.
        // For the easiest setup, we rely on the attributes.
        setSubmitted(true);
    }, []);


    // Data for navigation links (kept for original component structure)
    const navLinks = ["HOME", "SERVICES", "SPECIALITIES", "ABOUT", "CONTACT"];

    return (
        <div className="bg-white font-sans text-gray-800">
            <main>
                {/* Hero Section */}
                <section 
                    className="py-16 px-4 sm:px-8 lg:px-16 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${contact})` }}
                >
                    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side: Contact Info */}
                        <div>
                            <span className="text-white font-semibold text-sm">GET IN TOUCH</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-8">Contact Information</h1>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                                    <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                        <Icon path="M12,2a8,8,0,0,0-8,8c0,5.4,7,11.5,7.35,11.8a1,1,0,0,0,1.3,0C13,21.5,20,15.4,20,10A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" className="w-8 h-8 text-blue-600"/>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">Location</h3>
                                    <p className="text-sm text-gray-600">1008 Hamilton St, Immokalee, FL 34142.</p>
                                </div>
                                <div className="bg-[#0a101e] text-white p-8 rounded-lg shadow-lg text-center">
                                    <div className="bg-gray-700 rounded-full p-4 inline-block mb-4">
                                       <Icon path="M17.3,21.8a1,1,0,0,1-.5-.1l-.1-.1-2-1.3a1,1,0,0,1-.6-1.5,10.1,10.1,0,0,0-3.6-3.6,1,1,0,0,1,1.5-.6l1.3,2,.1.1a1,1,0,0,1,0,1.4l-1,1a1,1,0,0,1-1.4,0,12.1,12.1,0,0,1-7-7,1,1,0,0,1,0-1.4l1-1a1,1,0,0,1,1.4,0l.1.1,2,1.3a1,1,0,0,1,.6,1.5,10.1,10.1,0,0,0,3.6,3.6,1,1,0,0,1,1.5.6l1.3,2,.1.1a1,1,0,0,1,.1.5A1,1,0,0,1,17.3,21.8Z" className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                                    <p className="text-sm text-gray-300">(832) 937-7738</p>
                                    <p className="text-sm text-gray-300">info@advancedgellc.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form & Image */}
                        <div className="relative">
                            <img src="src/assets/Businessman_small.png" alt="Business Professional" className="rounded-lg object-cover w-full h-full" style={{minHeight: '500px'}}/>
                            <div className="absolute -bottom-8 right-0 lg:-right-8 bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
                                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                                
                                {/* NETLIFY FORM INTEGRATION HERE */}
                                <form 
                                    name="contact" 
                                    method="POST" 
                                    data-netlify="true" // REQUIRED: Tells Netlify to process the form
                                    netlify-honeypot="bot-field" // OPTIONAL: Anti-spam
                                    onSubmit={handleSubmit} // This is for local UX update only
                                    className="space-y-4"
                                >
                                    {/* REQUIRED: Hidden field for Netlify to identify the form */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    {/* OPTIONAL: Anti-spam field (must be hidden with CSS/Tailwind if used) */}
                                    <div hidden>
                                        <label>Don’t fill this out: <input name="bot-field" /></label>
                                    </div>
                                    
                                    <input 
                                        type="text" 
                                        name="name" // REQUIRED: Name attribute
                                        placeholder="Name" 
                                        required
                                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input 
                                            type="email" 
                                            name="email" // REQUIRED: Name attribute
                                            placeholder="Email" 
                                            required
                                            className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
                                        />
                                        <input 
                                            type="tel" 
                                            name="phone" // REQUIRED: Name attribute
                                            placeholder="Phone" 
                                            className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
                                        />
                                    </div>
                                    <textarea 
                                        name="message" // REQUIRED: Name attribute
                                        placeholder="Message" 
                                        rows={4} 
                                        required
                                        className="w-full p-3 border border-gray-200 rounded-md bg-gray-50"
                                    ></textarea>
                                    
                                    <button 
                                        type="submit" 
                                        className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        SEND NOW
                                    </button>

                                    {/* Submission Success Message (Client-side) */}
                                    {submitted && (
                                        <p className="text-green-600 font-bold mt-2">Message submitted! Netlify will send you an email confirmation.</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-[#0a101e] text-white py-12 px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 text-center sm:text-left">
                        <Icon path="M21.3,9.55a1,1,0,0,0-1,0L13,13.29V3a1,1,0,0,0-2,0V13.29L3.73,9.55a1,1,0,0,0-1.46,1.37l9,5.14a1,1,0,0,0,1.46,0l9-5.14A1,1,0,0,0,21.3,9.55ZM12,18.5,4.28,14,12,9.3l7.72,4.7Z M22,19H2a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" className="w-12 h-12 text-gray-400" />
                        <div className="flex items-center gap-8">
                            <span className="text-5xl font-bold text-blue-500">5+</span>
                            <p className="max-w-[150px]">Healthcare Marketing Services Delivered</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-5xl font-bold text-blue-500">6+</span>
                            <p className="max-w-[150px]">Industries in the U.S. Served</p>
                        </div>
                    </div>
                </section>

                {/* Growth Brief Section */}
                <section className="py-20 px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <img src="src/assets/contact.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-full"/>
                        <div className="bg-gray-50 p-12 rounded-lg relative -mt-12 lg:mt-0 lg:-ml-12">
                            <h2 className="text-3xl font-bold text-[#0a101e] mb-4">Healthcare Marketing Growth Brief - Trends, Strategies & Insights for U.S. Healthcare Practices</h2>
                            <p className="text-gray-600">
                                Stay ahead with practical playbooks from a healthcare marketing agency USA. Each issue distills what works now in patient acquisition, SEO, PPC, social, content, websites, and analytics, direct from our healthcare digital marketing agency team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-[#0a101e] text-white py-16 px-4 sm:px-8 lg:px-16">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                             <span className="text-blue-500 font-semibold text-sm">GET IN TOUCH</span>
                            <h2 className="text-4xl font-bold mt-2">Partner with AdvanceEdge today and take your Firm to the next level.</h2>
                        </div>
                        <div className="bg-blue-600 p-8 rounded-lg text-center shrink-0">
                            <p className="text-3xl font-bold">832-937-7738</p>
                            <p className="text-sm opacity-80">FEEL FREE TO CALL US</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 text-gray-600 py-16 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto grid md:grid-cols-3 gap-12">
                    <div>
                        <h4 className="font-bold text-lg text-[#0a101e] mb-4">Our Address</h4>
                        <p className="text-sm">1008 Hamilton St, Immokalee, FL 34142.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-lg text-[#0a101e] mb-4">Connect with us</h4>
                        <a href="mailto:info@advancedgellc.com" className="block text-sm hover:text-blue-600" id='email'>info@advancedgellc.com</a>
                        <a href="tel:8329377738" className="block text-sm hover:text-blue-600">832-937-7738</a>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#0a101e] mb-4">Our Newsletter</h4>
                        <p className="text-sm mb-4">Signup for our latest news & articles.</p>
                        <form className="flex">
                            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button type="submit" className="bg-[#0a101e] p-3 rounded-r-md">
                               <Icon path="M21.61,11.23l-8-8a1,1,0,0,0-1.41,1.41L17.34,10H3a1,1,0,0,0,0,2H17.34l-5.14,5.14a1,1,0,0,0,1.41,1.41l8-8A1,1,0,0,0,21.61,11.23Z" className="w-6 h-6 text-white"/>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="container mx-auto text-center border-t border-gray-300 mt-12 pt-6">
                    <p className="text-xs">&copy; Copyright 2025. All rights reserved. <span className="font-bold">AdvanceEdge.</span></p>
                </div>
            </footer>
        </div>
    );
};

export default App;