import React from 'react'
import { Card } from '../componentes/Card'

//Llamando a la API y guardando los datos en u arreglo, los 3 primeros.
let cards = [];
fetch('http://localhost/terrasol-backend/controller/ParcelController.php')
  .then((response) => response.json())
  .then((data) => {
    cards = data;
    console.log(cards);
  })
  .catch((err) => {
    console.log(err.message);
  });

export const Parcels = () => {
  return (
    <>
  <section>
  <div className='cardContainer'>
          {
            cards.map((card) => (
              <Card
                id={card.id_parcela}
                titulo={card.nombre_parcela}
                region={card.region_parcela}
                descripcion={card.descripcion_parcela}
                imagen={card.img_1}
              />
            ))
          }
        </div>
  </section>
    </>
  )
}
