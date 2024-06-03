import React from 'react';
import { Title } from '../componentes/Title';
import { Formulario } from '../componentes/Formulario';
import casitaFormulario from '../assets/casita-formulario.jpg';
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <>
      <section className='contact-tittle'>
        <Title
          text='Contáctenos'
        />
        <p>Si quieres cumplir tus sueños y hacer una inversión inteligente, nuestro equipo siempre está atento a responder tus dudas y asistirte en el proceso. Tu Terreno ideal está a solo un clic de distancia.</p>
        <p>Escíbenos y te contactarémos a la brevedad posible</p>
      </section>
      <section className='contact-escribenos'>
        <div className='escribenos-imagen'>
          <img src={casitaFormulario}></img>
        </div>
        <div className='escribenos-formulario'>
        <Formulario />
        </div>
      </section> 
    </>
  )
}
