import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/ButtonParcels.css'
import { Parcels } from '../pages/Parcels';
import { Contact } from '../pages/Contact';

export function ParcelsButton({ isMain }) {
  return (
    <>
      <NavLink 
        to={isMain ? "/parcelas" : "/contacto"} 
        className="parcels-button"
      >
        {isMain ? "Ver Parcelas" : "Cotizar Parcela"} 
      </NavLink>
      <Routes>
        <Route path="/parcelas" element={<Parcels />} />
        <Route path="/contacto" element={<Contact />} /> {/* Asegúrate de tener esta ruta */}
      </Routes>
    </>
  );
}