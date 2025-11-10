// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@/contexts/ThemeContext";
// import { LanguageProvider } from "@/contexts/LanguageContext";
// import { AuthProvider } from "@/contexts/AuthContext";
// import { Navigation } from "@/components/Navigation";
// import Landing from "./pages/Landing";
// import Features from "./pages/Features";
// import Pricing from "./pages/Pricing";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import UserManagement from "./pages/User Management/UserManagement";
// import Masters from "./pages/Masters";
// import Country from "./pages/masters/Country";
// import State from "./pages/masters/State";
// import District from "./pages/masters/District";
// import City from "./pages/masters/City";
// import Zone from "./pages/masters/Zone";
// import Ward from "./pages/masters/Ward";
// import Area from "./pages/masters/Area";
// import Beat from "./pages/masters/Beat";
// import SoilType from "./pages/masters/SoilType";
// import CropType from "./pages/masters/CropType";
// import SoilAnalysis from "./pages/SoilAnalysis";
// import CropSimulation from "./pages/CropSimulation";
// import Irrigation from "./pages/Irrigation";
// import Analytics from "./pages/Analytics";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// // Layout component for pages that need navigation
// const Layout = ({ children }: { children: React.ReactNode }) => (
//   <div className="min-h-screen bg-background">
//     <Navigation />
//     <main className="pt-16"> {/* Add padding top to account for fixed nav */}
//       {children}
//     </main>
//   </div>
// );

// // Public layout without navigation
// const PublicLayout = ({ children }: { children: React.ReactNode }) => (
//   <div className="min-h-screen bg-background">
//     {children}
//   </div>
// );

// // Main App component with proper router wrapping
// const AppContent = () => {
//   return (
//     <Routes>
//       {/* Public routes without navigation */}
//       <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
//       <Route path="/features" element={<PublicLayout><Features /></PublicLayout>} />
//       <Route path="/pricing" element={<PublicLayout><Pricing /></PublicLayout>} />
//       <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
//       <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
//       <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

//       {/* Protected routes with navigation */}
//       <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
//       <Route path="/user-management" element={<Layout><UserManagement /></Layout>} />
//       <Route path="/masters" element={<Layout><Masters /></Layout>} />
//       <Route path="/masters/country" element={<Layout><Country /></Layout>} />
//       <Route path="/masters/state" element={<Layout><State /></Layout>} />
//       <Route path="/masters/district" element={<Layout><District /></Layout>} />
//       <Route path="/masters/city" element={<Layout><City /></Layout>} />
//       <Route path="/masters/zone" element={<Layout><Zone /></Layout>} />
//       <Route path="/masters/ward" element={<Layout><Ward /></Layout>} />
//       <Route path="/masters/area" element={<Layout><Area /></Layout>} />
//       <Route path="/masters/beat" element={<Layout><Beat /></Layout>} />
//       <Route path="/masters/soil-type" element={<Layout><SoilType /></Layout>} />
//       <Route path="/masters/crop-type" element={<Layout><CropType /></Layout>} />
//       <Route path="/soil-analysis" element={<Layout><SoilAnalysis /></Layout>} />
//       <Route path="/crop-simulation" element={<Layout><CropSimulation /></Layout>} />
//       <Route path="/irrigation" element={<Layout><Irrigation /></Layout>} />
//       <Route path="/analytics" element={<Layout><Analytics /></Layout>} />

//       {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//       <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
//     </Routes>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//       <ThemeProvider>
//         <LanguageProvider>
//           <AuthProvider>
//             <TooltipProvider>
//               <Toaster />
//               <Sonner />
//               <AppContent />
//             </TooltipProvider>
//           </AuthProvider>
//         </LanguageProvider>
//       </ThemeProvider>
//     </BrowserRouter>
//   </QueryClientProvider>
// );

// export default App;


import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navigation } from "@/components/Navigation";
import Landing from "./pages/Landing";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/User Management/UserManagement";
import Masters from "./pages/Masters";
import Country from "./pages/masters/Country";
import State from "./pages/masters/State";
import District from "./pages/masters/District";
import City from "./pages/masters/City";
import Zone from "./pages/masters/Zone";
import Ward from "./pages/masters/Ward";
import Area from "./pages/masters/Area";
import Beat from "./pages/masters/Beat";
import SoilType from "./pages/masters/SoilType";
import CropType from "./pages/masters/CropType";
import SoilAnalysis from "./pages/SoilAnalysis";
import CropSimulation from "./pages/CropSimulation";
import Irrigation from "./pages/Irrigation";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout component for pages that need navigation (Dashboard, etc.)
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-16"> {/* Add padding top to account for fixed nav */}
      {children}
    </main>
  </div>
);

// Layout with Header & Footer (Only for Landing page)
const LandingLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    {children}
  </div>
);

// Public layout without header & footer (for Features, Pricing, About, Contact, Login)
const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    {children}
  </div>
);

// Main App component with proper router wrapping
const AppContent = () => {
  return (
<>
     <ScrollToTop />
    <Routes>
      {/* Landing page with Header & Footer built into the component */}
      <Route path="/" element={<LandingLayout><Landing /></LandingLayout>} />
      
      {/* Public routes without header & footer */}
      <Route path="/features" element={<PublicLayout><Features /></PublicLayout>} />
      <Route path="/pricing" element={<PublicLayout><Pricing /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />

      {/* Protected routes with navigation */}
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/user-management" element={<Layout><UserManagement /></Layout>} />
      <Route path="/masters" element={<Layout><Masters /></Layout>} />
      <Route path="/masters/country" element={<Layout><Country /></Layout>} />
      <Route path="/masters/state" element={<Layout><State /></Layout>} />
      <Route path="/masters/district" element={<Layout><District /></Layout>} />
      <Route path="/masters/city" element={<Layout><City /></Layout>} />
      <Route path="/masters/zone" element={<Layout><Zone /></Layout>} />
      <Route path="/masters/ward" element={<Layout><Ward /></Layout>} />
      <Route path="/masters/area" element={<Layout><Area /></Layout>} />
      <Route path="/masters/beat" element={<Layout><Beat /></Layout>} />
      <Route path="/masters/soil-type" element={<Layout><SoilType /></Layout>} />
      <Route path="/masters/crop-type" element={<Layout><CropType /></Layout>} />
      <Route path="/soil-analysis" element={<Layout><SoilAnalysis /></Layout>} />
      <Route path="/crop-simulation" element={<Layout><CropSimulation /></Layout>} />
      <Route path="/irrigation" element={<Layout><Irrigation /></Layout>} />
      <Route path="/analytics" element={<Layout><Analytics /></Layout>} />

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
    </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <AppContent />
            </TooltipProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;