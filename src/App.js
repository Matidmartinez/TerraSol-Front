import React from 'react';
import './App.css'; //Importa el archivo CSS específico para el componente App.

const App = () => { //Define el componente funcional App, que es el componente principal de la aplicación.
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="https://i.imgur.com/6sT02j6.png" alt="Logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/parcelas">Parcelas</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/preguntas-frecuentes">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="/contacto">Contáctenos</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <img src="https://i.imgur.com/w67fQ4Y.jpg" alt="Hero" />
        <div className="hero-content">
          <h1>Conoce la parcela de tus sueños</h1>
          <p>Cotzar</p>
          <button>CONOCE NUESTRAS NUEVAS PARCELAS</button>
        </div>
      </section>
      <section className="features">
        <div className="feature">
          <h2>REGIÓN PUERTO VARAS</h2>
          <p>PUERTO VARAS, REGION DE LOS LAGOS</p>
        </div>
        <div className="feature">
          <h2>REGIÓN DE LOS LAGOS</h2>
          <p>PUERTO VARAS, REGION DE LOS LAGOS</p>
        </div>
      </section>
      <section className="testimonials">
        <h2>RESEÑAS</h2>
        <div className="testimonial">
          <p>Aaron Valenzuela</p>
          <p>lasblaslabslasblbaslb
            asbaslbalsblasblabsls
            lbalsblasblabsls</p>
          <p>lbalsblasblabsls</p>
        </div>
      </section>
    </div>
  );
};

export default App;