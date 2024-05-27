import React from 'react';

export function Card({titulo,descripcion}) {
    return (
        <div>
          <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}