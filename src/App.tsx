import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/NavBar';
import Hearts from './pages/hearts/Hearts';
import Home from './pages/home/Home';
import Levels from './pages/levels/Levels';


function App() {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hearts" element={<Hearts />} />
        <Route path="/levels" element={<Levels />} />
      </Routes>
    </>
 );
}

export default App;
