import { Toaster } from "/src/components/ui/toaster";
import { Toaster as Sonner } from "/src/components/ui/sonner";
import { TooltipProvider } from "/src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "/src/components/Layout";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import NotFound from "/src/pages/NotFound";
import Blog from "/src/pages/Blog";

// Services
import MedicalSEO from "/src/pages/services/MedicalSEO";
import SocialMedia from "/src/pages/services/SocialMedia";
import ContentMarketing from "/src/pages/services/ContentMarketing";
import PaidMarketing from "/src/pages/services/PaidMarketing";
import ReputationManagement from "/src/pages/services/ReputationManagement";
import WebsiteDesign from "/src/pages/services/WebsiteDesign";
import MarketingAutomation from "/src/pages/services/MarketingAutomation";

// Specialities
import AddictionCenters from "/src/pages/specialities/AddictionCenters";
import Chiropractors from "/src/pages/specialities/Chiropractors";
import EyeClinics from "/src/pages/specialities/EyeClinics";
import FertilityClinics from "/src/pages/specialities/FertilityClinics";
import MultispecialtyHospitals from "/src/pages/specialities/MultispecialtyHospitals";
import DentalClinics from "/src/pages/specialities/DentalClinics";
import SkinClinics from "/src/pages/specialities/SkinClinics";
import SpecialistsAndDoctors from "/src/pages/specialities/SpecialistsAndDoctors";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />

            {/* Services Routes */}
            <Route path="services/medical-seo" element={<MedicalSEO />} />
            <Route path="services/social-media" element={<SocialMedia />} />
            <Route path="services/content-marketing" element={<ContentMarketing />} />
            <Route path="services/paid-marketing" element={<PaidMarketing />} />
            <Route path="services/reputation-management" element={<ReputationManagement />} />
            <Route path="services/website-design" element={<WebsiteDesign />} />
            <Route path="services/marketing-automation" element={<MarketingAutomation />} />

            {/* Specialities Routes */}
            <Route path="specialities/addiction-centers" element={<AddictionCenters />} />
            <Route path="specialities/chiropractors" element={<Chiropractors />} />
            <Route path="specialities/eye-clinics" element={<EyeClinics />} />
            <Route path="specialities/fertility-clinics" element={<FertilityClinics />} />
            <Route path="specialities/multispecialty-hospitals" element={<MultispecialtyHospitals />} />
            <Route path="specialities/dental-clinics" element={<DentalClinics />} />
            <Route path="specialities/skin-clinics" element={<SkinClinics />} />
            <Route path="specialities/specialists-and-doctors" element={<SpecialistsAndDoctors />} />
          </Route>

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;