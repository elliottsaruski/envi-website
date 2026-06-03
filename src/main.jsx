import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./App.css";

import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MusicPage from "./pages/MusicPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MusicResourcesPage from "./pages/MusicResourcesPage.jsx";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<LandingPage />} errorElement={<ErrorPage />} />
        <Route element={<Layout />}>
          <Route path="/home"      element={<HomePage />}           errorElement={<ErrorPage />} />
          <Route path="/music"     element={<MusicPage />}          errorElement={<ErrorPage />} />
          <Route path="/media"     element={<MediaPage />}          errorElement={<ErrorPage />} />
          <Route path="/about"     element={<AboutPage />}          errorElement={<ErrorPage />} />
          <Route path="/resources" element={<MusicResourcesPage />} errorElement={<ErrorPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TooltipProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </React.StrictMode>
);
