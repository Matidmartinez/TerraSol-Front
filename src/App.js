import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home';
import {Parcels} from './pages/Parcels';
import {About} from './pages/About';
import {FAQ} from './pages/FAQ'
import {Contact} from './pages/Contact'
import {Footer} from './componentes/Footer'
import logo from './assets/logo.png'

// Componente principal App
const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" />
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
            <Route path="/parcelas" element={<Parcels />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/preguntas-frecuentes" element={<FAQ />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
