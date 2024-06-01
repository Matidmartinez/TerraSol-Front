import React from 'react'
import '../styles/FAQCard.css'
import {ReactComponent as CircleButton} from '../assets/plus-button.svg'

export const FAQCard = ({id, question, answer}) => {
    return (
        <div className='FAQCardContainer' key={id}>
            <div className='questionContainer'>
                <h3 className='question'>{question}</h3>
                <CircleButton className='circleButton'/>
            </div>
            <div className='answerContainer'>
                <p className='answer'>{answer}</p>
            </div>
        </div>
    )
}
