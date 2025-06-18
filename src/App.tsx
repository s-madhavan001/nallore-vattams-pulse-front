
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/events" element={
                <div>
                  <Header />
                  <Events />
                </div>
              } />
              <Route path="/gallery" element={
                <div>
                  <Header />
                  <Gallery />
                </div>
              } />
              <Route path="/about" element={
                <div>
                  <Header />
                  <About />
                </div>
              } />
              <Route path="/login" element={
                <div>
                  <Header />
                  <Login />
                </div>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
