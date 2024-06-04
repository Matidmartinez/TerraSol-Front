import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ButtonParcels.css';
import { ParcelContext } from '../contexts/ParcelContext';

export function ParcelsButton({ isMain, parcelName }) {
  const { setParcelName } = useContext(ParcelContext);
  const navigate = useNavigate();

  /**
   * Asigna el nombre de la parcela a la variable global solo si el usuario se encuentra en /parcelas. 
   * Dependiendo de si el botón se encuentra en main(home) o no, redirige a /parcelas o a /contaco
   */
  const handleClick = () => {
    if (!isMain) { 
      setParcelName(parcelName);
    }

    navigate(isMain ? "/parcelas" : "/contacto");
  };

  return (
    <button onClick={handleClick} className="parcels-button">
       {isMain ? "Ver Parcelas" : "Cotizar Parcela"} 
    </button>
  );
}