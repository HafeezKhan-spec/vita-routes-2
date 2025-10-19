import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

type FormData = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  lookingFor: string;
};

type ContactModalContextValue = {
  isOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export const useContactModal = () => {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider');
  return ctx;
};

const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    lookingFor: '',
  });

  const openContactModal = () => setIsOpen(true);
  const closeContactModal = () => setIsOpen(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, openContactModal, closeContactModal }),
    [isOpen]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 z-[1200]">
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeContactModal}
              aria-hidden="true"
            />

            {/* Centered modal container */}
            <div className="absolute inset-0 flex items-center justify-center p-4 animate-in fade-in duration-300">
              <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20 animate-in zoom-in-95 duration-300">
                {/* Close button (top-right) */}
                <button
                  onClick={closeContactModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-200 rounded-full p-1 hover:bg-gray-100"
                  aria-label="Close contact form"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="p-8 pt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">CONTACT US</h2>

                  <form
                    name="book-call"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const payload = {
                        'form-name': 'book-call',
                        fullName: formData.fullName,
                        company: formData.company,
                        phone: formData.phone,
                        email: formData.email,
                        lookingFor: formData.lookingFor,
                        'bot-field': (document.getElementById('modal-bot-field') as HTMLInputElement)?.value || ''
                      };
                      try {
                        const body = new URLSearchParams(payload as Record<string, string>).toString();
                        const resp = await fetch('/', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                          body
                        });
                        if (!resp.ok) throw new Error(`Submission failed: ${resp.status}`);
                        alert('Thank you! We will contact you shortly.');
                        setFormData({ fullName: '', company: '', phone: '', email: '', lookingFor: '' });
                        closeContactModal();
                      } catch (err) {
                        console.error(err);
                        alert('Sorry, submission failed. Please try again.');
                      }
                    }}
                    className="space-y-4"
                  >
                    <input type="hidden" name="form-name" value="book-call" />
                    <div hidden>
                      <label>Don’t fill this out: <input id="modal-bot-field" name="bot-field" /></label>
                    </div>
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="modal-name"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 text-black"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company *
                      </label>
                      <input
                        id="modal-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 text-black"
                        placeholder="Company Name / Brand name / Business Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        id="modal-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 text-black"
                        placeholder="10 Digit Call & WhatsApp Mobile Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 text-black"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-lookingFor" className="block text-sm font-medium text-gray-700 mb-1">
                        Looking For *
                      </label>
                      <select
                        id="modal-lookingFor"
                        required
                        value={formData.lookingFor}
                        onChange={(e) => setFormData((prev) => ({ ...prev, lookingFor: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-gray-400 text-black"
                      >
                        <option value="" disabled>
                          Select the services you are looking for
                        </option>
                        <option value="SEO">SEO</option>
                        <option value="Paid Ads">Paid Ads</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Website Design">Website Design</option>
                      </select>
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
          </div>,
          document.body
        )}
    </ContactModalContext.Provider>
  );
};

export default ContactModalProvider;

