import React, { useState, useEffect } from 'react';
import { Card } from '../componentes/Card';
import { Carousel } from '../componentes/Carousel';
import { Title } from '../componentes/Title';
import { Header } from '../componentes/Header';
import '../styles/Card.css'
import '../styles/Carousel.css'
import '../styles/Header.css'
import reviewData from '../data/reviewData.json';


export const Home = () => {
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
        <section className="HeaderSection">
          <Header
            text='Ven y descubre la parcela de tus sueños'
          />
        </section>

        <section className="NewParcel">
          <Title
            text='Conoce nuestros nuevos proyectos'
          />
          <div className='cardContainer'>
            {
              [cards.slice(0, 3).map((card) => (
                <Card
                  id={card.id_parcela}
                  titulo={card.nombre_parcela}
                  region={card.region_parcela}
                  descripcion={card.descripcion_parcela}
                  metros={card.metros_2}
                  precio={card.precios_desde}
                  imagen={card.img_1}
                />
              ))]
            }
          </div>
        </section>
        <section className='reviewSection'>
          <Title
            text='Reseñas'
          />
          <div className='carouselSection'>
            <Carousel data={reviewData.slides} />
          </div>
        </section>

      </>
    )
  }
