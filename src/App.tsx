
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Archive from "./pages/Archive";
import PhotoGallery from "./pages/PhotoGallery";
import NotFound from "./pages/NotFound";
import TheArtOfProfessionalBlogging from "./pages/posts/2024-12-20-the-art-of-professional-blogging";
import MinimalistDesignPrinciples from "./pages/posts/2024-12-18-minimalist-design-principles";
import BuildingSustainableHabits from "./pages/posts/2024-12-15-building-sustainable-habits";
import TheFutureOfRemoteWork from "./pages/posts/2024-12-12-the-future-of-remote-work";
import EffectiveCommunicationStrategies from "./pages/posts/2024-12-10-effective-communication-strategies";
import DigitalWellnessInModernLife from "./pages/posts/2024-12-08-digital-wellness-in-modern-life";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.PROD ? "/anno-datorum" : ""}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/2024/12/20/the-art-of-professional-blogging" element={<TheArtOfProfessionalBlogging />} />
          <Route path="/2024/12/18/minimalist-design-principles" element={<MinimalistDesignPrinciples />} />
          <Route path="/2024/12/15/building-sustainable-habits" element={<BuildingSustainableHabits />} />
          <Route path="/2024/12/12/the-future-of-remote-work" element={<TheFutureOfRemoteWork />} />
          <Route path="/2024/12/10/effective-communication-strategies" element={<EffectiveCommunicationStrategies />} />
          <Route path="/2024/12/08/digital-wellness-in-modern-life" element={<DigitalWellnessInModernLife />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
