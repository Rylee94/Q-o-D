import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Questions from "./pages/Questions";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
