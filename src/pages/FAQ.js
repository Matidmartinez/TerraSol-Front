import React, { useState } from 'react';
import { FAQCard } from '../componentes/FAQCard'
import '../styles/FAQ.css'

export const FAQ = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (id) => {
        setSelected(selected === id ? null : id);
    };

    return (
        <main>
            <h1>Preguntas frecuentes</h1>
            <section className='FAQSection'>
                {
                    QAs.map((qa) => (
                        <FAQCard 
                            key={qa.id}
                            qa={qa}
                            selected={selected}
                            toggle={toggle}
                        />
                    ))
                }
            </section>
        </main>
    );
};


const QAs = [
    {
        id: 0,
        question: '¿Qué tipo de parcelas ofrecen?',
        answer: 'Ofrecemos parcelas urbanas y rurales, ideales para construcción de viviendas, inversión o uso agrícola.'
    },
    {
        id: 1,
        question: '¿Cómo puedo comprar una parcela?',
        answer: 'Puedes comprar una parcela contactándonos a través de nuestro formulario de contacto en la web, llamando a nuestro número de atención al cliente, o visitando nuestras oficinas.'
    },
    {
        id: 2,
        question: '¿Puedo visitar la parcela antes de comprarla?',
        answer: 'Sí, coordinamos visitas guiadas a las parcelas para que puedas conocer el terreno antes de tomar una decisión.'
    },
    {
        id: 3,
        question: '¿Las parcelas tienen todos los servicios básicos (agua, luz, alcantarillado)?',
        answer: 'La mayoría de nuestras parcelas urbanas cuentan con todos los servicios básicos. En el caso de las parcelas rurales, algunas pueden requerir la instalación de ciertos servicios.'
    },
    {
        id: 4,
        question: '¿Qué costos adicionales debo considerar al comprar una parcela?',
        answer: 'Además del costo de la parcela, deberás considerar gastos de escrituración, impuestos, y en caso de financiamiento, intereses y comisiones bancarias.'
    },
    {
        id: 5,
        question: '¿Qué tamaño tienen las parcelas?',
        answer: 'Ofrecemos parcelas de diferentes tamaños, que van desde 500 m² hasta varios hectáreas, según tus necesidades y presupuesto.'
    },
    {
        id: 6,
        question: '¿Puedo construir inmediatamente después de comprar la parcela?',
        answer: 'En la mayoría de los casos, sí. Sin embargo, algunas parcelas pueden requerir permisos adicionales o estar sujetas a regulaciones específicas.'
    },
    {
        id: 7,
        question: '¿Qué debo hacer si quiero revender mi parcela en el futuro?',
        answer: 'Puedes revender tu parcela en cualquier momento. Te recomendamos contactarnos para asesorarte sobre el proceso y ayudarte a encontrar un comprador.'
    },
]
