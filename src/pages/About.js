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

        <p>Valoramos la conservación del medio ambiente y el desarrollo responsable, asegurando que cada parcela no
          solo sea una inversión en tierra, sino también en calidad de vida. Nos comprometemos a<span className='negrita'> brindar asesoramiento
            personalizado</span> y soluciones integrales que satisfagan las necesidades y aspiraciones de nuestros clientes,
          mientras contribuimos al crecimiento y bienestar de las comunidades locales.</p>
      </section>
      <br></br>
      <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />
      <section className="section">
        <Title text="NUESTRA VISIÓN" />
        <p>Aspiramos a ser líderes en la venta de parcelas en el sur de Chile, reconocidos por nuestra integridad, calidad y compromiso
          con el medio ambiente.</p>
        <br></br>
        <p>
          Nos vemos como impulsores del desarrollo responsable, donde la armonía entre el hombre y la naturaleza sea la norma. Nuestro objetivo 
          es crear espacios que inspiren a nuestros clientes a<span className='negrita'> vivir vidas plenas y conectadas con el entorno</span>, mientras 
          fomentamos un impacto positivo y duradero en las comunidades locales y en la preservación de la biodiversidad de la región.</p>
      </section>
      <br></br>
      <img src={fondoNosotros} alt="fondoNosotros" className="FondoUs" />
    </div>
  )
}