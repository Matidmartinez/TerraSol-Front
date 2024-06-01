import '../styles/FAQCard.css'
import {ReactComponent as CircleButton} from '../assets/plus-button.svg'

export const FAQCard = ({ qa, selected, toggle }) => {

    return (
        <div className='FAQCardContainer' key={qa.id}>
        <div className='questionContainer' onClick={() => toggle(qa.id)}>
            <h3 className='question'>{qa.question}</h3>
            <CircleButton className='circleButton' />
        </div>
        <div className={selected === qa.id ? 'answerContainer show' : 'answerContainer'}>
            <p className='answer'>{qa.answer}</p>
        </div>
    </div>
    )
}
