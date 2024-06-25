import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MusicPage from "./pages/MusicPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MusicResourcesPage from "./pages/MusicResourcesPage.jsx";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} errorElement={<ErrorPage />} />
        <Route element={<Layout />}>
          <Route
            path="/home"
            element={<HomePage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/music"
            element={<MusicPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/media"
            element={<MediaPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/musicresources"
            element={<MusicResourcesPage />}
            errorElement={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
