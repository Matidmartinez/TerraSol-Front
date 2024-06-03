import React from 'react';
import { ReactComponent as M2Icon } from '../assets/m2-card-icon.svg';
import { ReactComponent as PriceIcon } from '../assets/price-card-icon.svg';
import { ParcelsButton } from './ButtonParcels';

export function Card({ id, titulo, region, descripcion, imagen, metros, precio }) {
    const formattedPrecio = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(precio);
    return (
        <div key={id} className='box'>
            <div className='card'>
                <div className='image'>
                    <img src={imagen} alt='' />
                    <div className='description'>
                        <h1>{titulo}</h1>
                        <h3>{region}</h3>
                    </div>
                </div>
                <div className='overlay'>
                    <h1>{titulo}</h1>
                    <p>{descripcion}</p>
                    <div className='additional-info'>
                        <div className='info-data'> 
                            <p className='info-item'><M2Icon className='m2-icon'/> {metros} metros cuadrados</p>
                            <p className='info-item'><PriceIcon className='precio-icon'/> Precios desde {(formattedPrecio)}</p>
                        </div>
                        <div className='button-container'> 
                            <ParcelsButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
