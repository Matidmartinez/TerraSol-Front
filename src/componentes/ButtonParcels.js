import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../styles/ButtonCoti.css'
import { Contact } from '../pages/Parcels.js';

export function ParcelsButton() {
    return (
        <NavLink to="/contacto" className={({ isActive }) => isActive ? "parcels-button active" : "parcels-button"}>
            Ver Parcelas
        </NavLink>
    );
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/parcelas" element={<Parcels />} />
            </Routes>
        </div>
    );
}