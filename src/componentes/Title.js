import React from 'react'
// Supports weights 400-900
import '../styles/Title.css'
import '@fontsource-variable/playfair-display';

export const Title = ({text}) => {
  return (
    <div className="titleContainer">
      <h1 className='title'>{text}</h1>
    </div>
  )
}
