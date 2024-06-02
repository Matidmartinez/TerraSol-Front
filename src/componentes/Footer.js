import React from 'react'
import logo from '../assets/logo.png'
import logofb from '../assets/Facebook icon.png'
import logoig from '../assets/Instagram icon.png'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-address">
        Dirección: Entre Talca y la Región de Los Lagos
      </div>
      <div className="footer-contact">
        <a href="https://wa.me/56950186583" target="_blank" rel="noopener noreferrer">
          <a></a> +56 9 50186583
        </a>
      </div>
      <div class="footer-logos">
        <div class="fb-logo-footer">
          <img src={logofb} alt="Logofb" />
        </div>
        <div class="ig-logo-footer">
          <img src={logoig} alt="Logoig" />
        </div>
      </div>
    </footer>
  )
}
