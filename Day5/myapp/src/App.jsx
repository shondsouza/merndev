import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Testting from "./testting";
import Register from "./Components/MUI/Register";
import ArrowFunction from "./ES7/ArrowFunction";

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome</h1>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/Testting" style={{ marginRight: "1rem", padding: "0.5rem 1rem", background: "blue", color: "white", textDecoration: "none", borderRadius: "4px" }}>Go to Testting</Link>
        <Link to="/Register" style={{ padding: "0.5rem 1rem", background: "green", color: "white", textDecoration: "none", borderRadius: "4px" }}>Go to Register</Link>
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
          <Route path="/Arrow" element={<ArrowFunction/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
