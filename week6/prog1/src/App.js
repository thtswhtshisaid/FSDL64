import React from 'react';
import './App.css';
import Header from './module/header';
import Sidebar from './module/sidebar';
import Footer from './module/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main-content">
        <Sidebar />
        <div className="Content">
          <h2>Welcome to the main content area!</h2>
          <p>This is where your main content will go.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
