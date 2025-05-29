
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Security from "./pages/Security";
import Compliance from "./pages/Compliance";
import Privacy from "./pages/Privacy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import GDPRCompliance from "./pages/GDPRCompliance";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/security" element={<Security />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn-more" element={<LearnMore />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
