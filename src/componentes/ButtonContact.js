import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './ButtonCoti.css'; 
import Contact from './Contacto'; 

export function CotizarButton() {
  return (
  <NavLink to="/contacto" className={({ isActive }) => isActive ? "cotizar-button active" : "cotizar-button"}> 
    Cotizar
  </NavLink>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}




