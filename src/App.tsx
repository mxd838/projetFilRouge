import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import './App.css';
import Button from './components/button/Button';
import Footer from './components/footer/Footer';
import Card from './components/card/Card'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar />
      <Card />
      <Button />
      <Footer />
    </div >
  );
}

export default App;
