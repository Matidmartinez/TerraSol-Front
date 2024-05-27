import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';

// Componentes para las secciones de la aplicación

//const Home = () => (
//  <section className="hero">
//    <img src="https://i.imgur.com/w67fQ4Y.jpg" alt="Hero" />
//   <div className="hero-content">
//      <h1>Conoce la parcela de tus sueños</h1>
//      <p>Cotizar</p>
//      <button>CONOCE NUESTRAS NUEVAS PARCELAS</button>
//    </div>
//    <Title text="CONOCE NUESTRAS PARCELAS" />
//    <div className="parcela-cards">
//      {/* Aquí agregarás los 3 componentes tipo card */}
//      <Card title="Puerto Varas" region="Región de Los Lagos" />
//      <Card title="Duo Puerto Varas" region="Región de Los Lagos" />
//      <Card title="Puerto Varas" region="Región de Los Lagos" />
//    </div>
//    <Title text="RESEÑAS" />
//    <div className="reviews">
//      {/* Aquí agregarás el carrusel con tres testimonios */}
//      <Review testimonial="Testimonio 1" author="Autor 1" />
//    </div>
//  </section>
//);

const Parcelas = () => (
  <section>
    <Title text="Parcelas" />
    <p>Contenido de Parcelas.</p>
  </section>
);

const Nosotros = () => (
  <section>
    <Title text="Nosotros" />
    <p>Contenido de Nosotros.</p>
  </section>
);

const PreguntasFrecuentes = () => (
  <section>
    <Title text="Preguntas Frecuentes" />
    <p>Contenido de Preguntas Frecuentes.</p>
  </section>
);

const Contacto = () => (
  <section>
    <Title text="Contáctenos" />
    <p>Contenido de Contacto.</p>
  </section>
);

// Componente Title
const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
    </div>
  );
};

// Componente Card (placeholder)
const Card = ({ title, region }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{region}</p>
    </div>
  );
};

// Componente Review (placeholder)
const Review = ({ testimonial, author }) => {
  return (
    <div className="review">
      <p>{testimonial}</p>
      <p><strong>{author}</strong></p>
    </div>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="https://i.imgur.com/6sT02j6.png" alt="Terrasol Logo" />
      </div>
      <div className="footer-address">
        Dirección: Entre Talca y la Región de Los Lagos
      </div>
      <div className="footer-contact">
        <a href="https://wa.me/56950186583" target="_blank" rel="noopener noreferrer">
          <a></a> +56 9 50186583
        </a>
      </div>
    </footer>
  );
};

// Componente principal App
const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img src="https://i.imgur.com/6sT02j6.png" alt="Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active" className="nav-link">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/parcelas" activeClassName="active" className="nav-link">Parcelas</NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" activeClassName="active" className="nav-link">Nosotros</NavLink>
              </li>
              <li>
                <NavLink to="/preguntas-frecuentes" activeClassName="active" className="nav-link">Preguntas frecuentes</NavLink>
              </li>
              <li>
                <NavLink to="/contacto" activeClassName="active" className="nav-link">Contáctenos</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/parcelas" element={<Parcelas />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
