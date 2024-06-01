import { Card } from '../componentes/Card'
import '../styles/Card.css'
import '../styles/Review.css'

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
      <section className="home-card">
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
