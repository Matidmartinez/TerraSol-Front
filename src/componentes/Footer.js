import React from 'react';
import logo from '../assets/logo.png';
import logofb from '../assets/Facebook icon.png';
import logoig from '../assets/Instagram icon.png';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo de Terrasol" /> 
      </div>
      <div className="footer-address">
        Dirección: Entre Talca y la Región de Los Lagos
      </div>
      <div className="footer-contact">
        <a href="https://wa.me/56950186583" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i> +56 9 50186583 
        </a>
      </div>
      <div className="footer-logos">
        <a 
          href="https://www.facebook.com/tuparcelaenelsurdechile?mibextid=ZbWKwL" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook de Terrasol"
        >
          <img src={logofb} alt="Facebook" />
        </a>
        <a 
          href="https://www.instagram.com/terrasol_parcelas/?igsh=eG51a2w4NGx5ODJu" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram de Terrasol"
        >
          <img src={logoig} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

