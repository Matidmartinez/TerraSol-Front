import React from 'react'
import '../styles/About.css'
import fondoNosotros from '../assets/fondo_nosotros 1.png'
import { Title } from '../componentes/Title'

export const About = () => {
  return (
    <div className="text-about">
      <section className="section">
        <Title text="NOSOTROS" />
        <p>Terrasol nace dentro del rubro inmobiliario gracias a la necesidad de posicionar una empresa seria y
          responsable, que además de brindar la seguridad de adquirir una propiedad y garantice a cada uno de
          nuestros clientes la satisfacción de realizar su proyecto de vida.</p>
        <br></br>
      </section>
      <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />
      <section className="section">
        <Title text="NUESTRA MISIÓN" />
        <p>En <span className='negrita'>Terrasol</span>, nuestra misión es ofrecer parcelas únicas en el sur de Chile, combinando <span className='negrita'>la belleza natural
          de la región con un servicio excepcional</span>. Nos dedicamos a crear comunidades sostenibles y armoniosas,
          donde nuestros clientes puedan construir sus sueños y disfrutar de un entorno natural prístino.</p>
        <br></br>
        <p>Valoramos la<span className='negrita'> conservación del medio ambiente</span> y el desarrollo responsable, asegurando que cada parcela no
          solo sea una inversión en tierra, sino también en calidad de vida. Nos comprometemos a brindar<span className='negrita'> asesoramiento
          personalizado</span> y soluciones integrales que satisfagan las necesidades y aspiraciones de nuestros clientes,
          mientras contribuimos al crecimiento y bienestar de las comunidades locales.</p>
      </section>
      <br></br>
      <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />
    </div>
  )
}