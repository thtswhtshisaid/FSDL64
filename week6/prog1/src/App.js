import React from 'react';
import './App.css';
import Header from './module/header';
import Sidebar from './module/sidebar';
import Footer from './module/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="Content">Content Area
        <p>Hello</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;