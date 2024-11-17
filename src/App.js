import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';  // lowercase path

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;