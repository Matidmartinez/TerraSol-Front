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

      <h3>En <span className='negrita'>Terrasol</span>, nuestra misión es ofrecer parcelas únicas en el sur de Chile, combinando <span className='negrita'>la belleza natural
        de la región con un servicio excepcional</span>. Nos dedicamos a crear comunidades sostenibles y armoniosas,
        donde nuestros clientes puedan construir sus sueños y disfrutar de un entorno natural prístino.

        Valoramos la <span className='negrita'>conservación del medio ambiente</span> y el desarrollo responsable, asegurando que cada parcela no
        solo sea una inversión en tierra, sino también en calidad de vida. Nos comprometemos a brindar<span className='negrita'> asesoramiento
          personalizado </span>y soluciones integrales que satisfagan las necesidades y aspiraciones de nuestros clientes,
        mientras contribuimos al crecimiento y bienestar de las comunidades locales.</h3>
      <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />

      <h3>Aspiramos a ser líderes en la venta de parcelas en el sur de Chile, reconocidos por nuestra integridad, calidad y compromiso con el medio ambiente.
        Nos vemos como impulsores del desarrollo responsable, donde la armonía entre el hombre y la naturaleza sea la norma. Nuestro objetivo es crear espacios 
        que inspiren a nuestros clientes a<span className='negrita'> vivir vidas plenas y conectadas con el entorno</span>, mientras fomentamos un impacto positivo y duradero en las comunidades 
        locales y en la preservación de la biodiversidad de la región.</h3>
      
    </div>
  )
}
