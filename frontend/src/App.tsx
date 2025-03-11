
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Achievements from "./pages/Achievements";
import AchievementDetail from "./pages/AchievementDetail";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Alumni from "./pages/Alumni";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminAchievements from "./admin/adminachievement";
import Nav from "./components/Anav";

import Adminpage from "./admin/adminpage";
import AdminProject from "./admin/adminproject";
import AdminNews from "./admin/adminnews";
import AdminGallary from "./admin/admingallery";
import AdminAlumni from "./admin/adminalumni";

const queryClient = new QueryClient();


const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navigation />}
      <main className="flex-grow pt-16">
        <Routes>

          
              <Route path="/adminachievements" element={<AdminAchievements />} />
              <Route path="/adminpage" element={<Adminpage />} />
              <Route path="/" element={<Index />} />
              <Route path="/achievements" element={<Achievements />} />                
              <Route path="/achievements/:id" element={<AchievementDetail />} />
              <Route path="/research" element={<Research />} />
              <Route path="/research/:id" element={<ResearchDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nav" element={<Nav/>} />
              <Route path="/adminproject" element={<AdminProject/>} />
              <Route path="/adminnews" element={<AdminNews/>} />
              <Route path="/admingallary" element={<AdminGallary/>} />
              <Route path="/adminalumni" element={<AdminAlumni/>} />




        </Routes>
      </main>
       <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent /> 
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;