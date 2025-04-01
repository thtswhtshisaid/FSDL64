import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={FormComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;