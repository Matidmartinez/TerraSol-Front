import React, { useState, useEffect } from 'react';
import { Card } from '../componentes/Card';
import { Title } from '../componentes/Title';
import '../styles/Card.css'

//Llamando a la API y guardando los datos en u arreglo, los 3 primeros.
let cards = [];



export const Parcels = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost/terrasol-backend/controller/ParcelController.php')
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <section className='AllParcels'>

        <Title
          text='Conoce todos nuesotros proyectos'
        />
        <div className='cardContainer'>
          {
            cards.map((card) => (
              <Card
                id={card.id_parcela}
                titulo={card.nombre_parcela}
                region={card.region_parcela}
                descripcion={card.descripcion_parcela}
                metros={card.metros_2}
                precio={card.precios_desde}
                imagen={card.img_1}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}
