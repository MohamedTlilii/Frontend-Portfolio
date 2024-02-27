import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Register from "./pages/Admin/Register"; // Corrected import
import Login from "./pages/Admin/Login";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
        
        <AdminRoute>
        <Admin />
         </AdminRoute>
        
        
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
