import React from 'react';

export function Card({ id, titulo, region, descripcion, imagen }) {
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
                </div>
            </div>
        </div>
    )
}
