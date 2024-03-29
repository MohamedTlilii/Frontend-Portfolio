import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

import Loader from "./components/Loader";
import "./App.css";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for loading
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      {/* Conditionally render Loader component based on the loading state */}
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Admin />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
