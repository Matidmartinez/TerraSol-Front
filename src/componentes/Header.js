import React from 'react';
import { CotizarButton } from '../componentes/ButtonContact'
import '../styles/Header.css'


export const Header = ({ text }) => {
    return (
        <>
        <h1 className="titulo-header">{text}</h1>
            <div className='button-container'>
                <CotizarButton />
            </div>
        </>
    )
}