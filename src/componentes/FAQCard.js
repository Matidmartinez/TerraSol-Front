import '../styles/FAQCard.css'
import { ReactComponent as CircleButtonPlus } from '../assets/plus-button.svg'
import { ReactComponent as CircleButtonMinus} from '../assets/minus-button.svg'

export const FAQCard = ({ qa, selected, toggle }) => {

    return (
        <div className='FAQCardContainer' key={qa.id}>
        <div className='questionContainer' onClick={() => toggle(qa.id)}>
            <h3 className='question'>{qa.question}</h3>
            {selected === qa.id ? ( //Si selected tiene el id de la tarjeta se mestra el botón menos, sino el mas
                    <CircleButtonMinus className='circleButton' />
                ) : (
                    <CircleButtonPlus className='circleButton' />
                )
            }
        </div>
        <div className={selected === qa.id ? 'answerContainer show' : 'answerContainer'}>
            <p className='answer'>{qa.answer}</p>
        </div>
    </div>
    )
}
