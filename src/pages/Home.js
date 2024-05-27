import React from 'react'
import {Card} from '../componentes/Card'
import db from '../db.json';

export const Home = () => {
  const cardArr = db;
  return (
    <>
      <section className="hero">
        {
          db.map((cardInfo)=>(
            <Card
            titulo={cardInfo.nombre_parcela}
            descripcion={cardInfo.descripcion_parcela}
            
            />
          ))
        }

      </section>
    </>
  )
}
