import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Detalle from './pages/Detalle'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-2xl mx-auto px-5 py-8">
        <Routes>
          <Route path="/"             element={<Home />}     />
          <Route path="/usuarios/:id" element={<Detalle />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
