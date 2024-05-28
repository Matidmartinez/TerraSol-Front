import React from 'react'
import '../styles/About.css'
import fondoNosotros from '../assets/fondo_nosotros 1.png'

export const About = () => {
  return (
    <div className="text-about">
        <h3>Terrasol nace dentro del rubro inmobiliario gracias a la necesidad de posicionar una empresa seria y 
          responsable, que además de brindar la seguridad de adquirir una propiedad y garantice a cada uno de 
          nuestros clientes la satisfacción de realizar su proyecto de vida.</h3>
          <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />
    </div>
  )
}
