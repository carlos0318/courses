import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Favorites from './components/Favorites';
import NoFavorites from './components/NoFavorites';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/nofavorites" element={<NoFavorites />} />
    </Routes>
  </Router>
);
