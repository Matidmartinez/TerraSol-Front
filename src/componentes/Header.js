import React from 'react';
import '../styles/Header.css'


export const Header = ({ text }) => {
    return (
        <h1 className="titulo-header">{text}</h1>
    )
}