import React from 'react'

const QAs = [
    {
        question: '¿Qué tipo de parcelas ofrecen?',
        answer: 'Ofrecemos parcelas urbanas y rurales, ideales para construcción de viviendas, inversión o uso agrícola.'
    }, 
    {
        question: '¿Cómo puedo comprar una parcela?',
        answer: 'Puedes comprar una parcela contactándonos a través de nuestro formulario de contacto en la web, llamando a nuestro número de atención al cliente, o visitando nuestras oficinas.'
    },
    {
        question: '¿Puedo visitar la parcela antes de comprarla?',
        answer: 'Sí, coordinamos visitas guiadas a las parcelas para que puedas conocer el terreno antes de tomar una decisión.'
    },
    {
        question: '¿Las parcelas tienen todos los servicios básicos (agua, luz, alcantarillado)?',
        answer: 'La mayoría de nuestras parcelas urbanas cuentan con todos los servicios básicos. En el caso de las parcelas rurales, algunas pueden requerir la instalación de ciertos servicios.'
    },
    {
        question: '¿Qué costos adicionales debo considerar al comprar una parcela?',
        answer: 'Además del costo de la parcela, deberás considerar gastos de escrituración, impuestos, y en caso de financiamiento, intereses y comisiones bancarias.'
    },
    {
        question: '¿Qué tamaño tienen las parcelas?',
        answer: 'Ofrecemos parcelas de diferentes tamaños, que van desde 500 m² hasta varios hectáreas, según tus necesidades y presupuesto.'
    },
    {
        question: '¿Puedo construir inmediatamente después de comprar la parcela?',
        answer: 'En la mayoría de los casos, sí. Sin embargo, algunas parcelas pueden requerir permisos adicionales o estar sujetas a regulaciones específicas.'
    },
    {
        question: '¿Qué debo hacer si quiero revender mi parcela en el futuro?',
        answer: 'Puedes revender tu parcela en cualquier momento. Te recomendamos contactarnos para asesorarte sobre el proceso y ayudarte a encontrar un comprador.'
    },
]

export const FAQCard = () => {
  return (
    <>
        {
            QAs.map((qa) => (
                <div>
                    <h3>{qa.question}</h3>
                    <p>{qa.answer}</p>
                </div>
            ))
        }
    </>
  )
}
