import { Card } from '../componentes/Card';
import { Carousel } from '../componentes/Carousel';
import { Title } from '../componentes/Title';
import { Header } from '../componentes/Header';
import '../styles/Card.css'
import '../styles/Carousel.css'
import '../styles/Header.css'
import reviewData from '../data/reviewData.json';

//Llamando a la API y guardando los datos en u arreglo, los 3 primeros.
let cards = [];
fetch('http://localhost/terrasol-backend/controller/ParcelController.php')
  .then((response) => response.json())
  .then((data) => {
    cards = data.slice(0, 3);
    console.log(cards);
  })
  .catch((err) => {
    console.log(err.message);
  });

export const Home = () => {
  return (
    <>
      <section className="HeaderSection">
        <Header 
          text = 'Ven y descubre la parcela de tus sueños'
        />
      </section>

      <section className="NewParcel">
        <Title
          text='Conoce nuestros nuevos proyectos'
        />
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
