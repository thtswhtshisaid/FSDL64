import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormComponent from "./FormComponent";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/form">Form</Link>
      </nav>
      <Route path="/" exact>
        <h1>React Advanced Features</h1>
      </Route>
      <Route path="/form" component={FormComponent} />
    </Router>
  );
}

export default App;