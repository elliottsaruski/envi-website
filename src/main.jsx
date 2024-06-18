import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import MusicPage from "./pages/MusicPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MusicResourcesPage from "./pages/MusicResourcesPage.jsx";
import Layout from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/music" element={<MusicPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/musicresources" element={<MusicResourcesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
