import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FormComponent from "./FormComponent";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/form">Form</Link>
        </nav>

        {/* Routers */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
