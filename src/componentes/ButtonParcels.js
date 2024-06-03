import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/ButtonCoti.css'
import { Parcels } from '../pages/Parcels';

export function ParcelsButton() {
  return (
    <>
      <NavLink to="/contacto" className={({ isActive }) => isActive ? "parcels-button active" : "parcels-button"}>
        Ver Parcelas
      </NavLink>
      <Routes>
          <Route path="/parcelas" element={<Parcels />} />
      </Routes>
    </>
  );
}