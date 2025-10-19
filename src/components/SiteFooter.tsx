import React from 'react';

const SiteFooter: React.FC = () => (
  <footer className="bg-[#0B1220] text-gray-400">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">AdvanceEdge Digital</h3>
          <p className="text-sm text-white">Driving patient growth for healthcare practices across the USA.</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Our Address</h3>
          <p className="text-sm text-white">123 Main St, Immokalee, FL</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-white">info@advancedgedigital.com</p>
          <p className="text-sm text-white">832-937-7738</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-800 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-sm transition-colors duration-200"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md transition-transform duration-200 transform hover:scale-105">
              &rarr;
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-[#141b2d] pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="text-white">&copy; 2025. All Rights reserved. AdvanceedgeDigital.</p>
        <div className="flex items-center gap-6 mt-4 sm:mt-0 text-[#f5b17a]">
          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="group p-1.5 rounded-md transition-all duration-200 hover:text-white hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b17a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
              <circle cx="8" cy="9" r="1.5" fill="currentColor" stroke="none" />
              <rect x="7" y="11" width="2" height="7" fill="currentColor" stroke="none" />
              <path
                d="M12 11h2v1c.5-.8 1.5-1.4 3-1.4 2.2 0 3.5 1.3 3.5 3.8V18h-2v-3.5c0-1.3-.6-2.1-1.8-2.1-1.2 0-1.7.9-1.7 2V18h-2v-7Z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="group p-1.5 rounded-md transition-all duration-200 hover:text-white hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b17a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path
                d="M12 18v-4h-2v-2h2v-1.2c0-1.6 1-2.6 2.6-2.6H17v2h-1.6c-.6 0-1 .4-1 .9V12h2l-.3 2H14v4Z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="group p-1.5 rounded-md transition-all duration-200 hover:text-white hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b17a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.3" />
            </svg>
          </a>
          {/* TikTok */}
          <a
            href="#"
            aria-label="TikTok"
            className="group p-1.5 rounded-md transition-all duration-200 hover:text-white hover:scale-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b17a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 6v6.3a3.7 3.7 0 1 1-3.4-3.6" />
              <path d="M14 6c.8 1.4 2.6 2.4 4.5 2.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;