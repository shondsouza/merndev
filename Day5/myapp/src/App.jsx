import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Testting from "./testting";
import Register from "./Components/MUI/Register";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome</h1>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/Testting" style={{ marginRight: "1rem", padding: "0.5rem 1rem", background: "#007bff", color: "white", textDecoration: "none", borderRadius: "4px" }}>Go to Testting</Link>
        <Link to="/Register" style={{ padding: "0.5rem 1rem", background: "#28a745", color: "white", textDecoration: "none", borderRadius: "4px" }}>Go to Register</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Testting" element={<Testting />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
