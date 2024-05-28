import React from 'react'
import logo from '../assets/logo.png'
import logofb from '../assets/Facebook icon.png'

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
    <div className="fb-logo-footer">
    <img src={logofb} alt="Logofb" />

    </div>
  </footer>
  )
}
