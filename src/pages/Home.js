import { Card } from '../componentes/Card'

//Llamando a la API y guardando los datos en u arreglo, los 3 primeros.
let cards = [];
fetch('http://localhost/terrasol-backend/controller/ParcelController.php')
  .then((reponse) => reponse.json())
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
      <section className="hero">
        {
          cards.map((card) => (
            <Card
              titulo={card.nombre_parcela}
              descripcion={card.descripcion_parcela}

            />
          ))
        }

      </section>
    </>
  )
}
