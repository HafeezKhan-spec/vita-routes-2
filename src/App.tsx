import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Services
import MedicalSEO from "./pages/services/MedicalSEO";
import SocialMedia from "./pages/services/SocialMedia";
import ContentMarketing from "./pages/services/ContentMarketing";
import PaidMarketing from "./pages/services/PaidMarketing";
import ReputationManagement from "./pages/services/ReputationManagement";
import WebsiteDesign from "./pages/services/WebsiteDesign";
import MarketingAutomation from "./pages/services/MarketingAutomation";

// Specialities
import AddictionCenters from "./pages/specialities/AddictionCenters";
import Chiropractors from "./pages/specialities/Chiropractors";
import EyeClinics from "./pages/specialities/EyeClinics";
import FertilityClinics from "./pages/specialities/FertilityClinics";
import MultispecialtyHospitals from "./pages/specialities/MultispecialtyHospitals";
import DentalClinics from "./pages/specialities/DentalClinics";
import SkinClinics from "./pages/specialities/SkinClinics";
import SpecialistsAndDoctors from "./pages/specialities/SpecialistsAndDoctors";

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
