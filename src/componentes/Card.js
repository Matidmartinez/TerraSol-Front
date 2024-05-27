import React from 'react';
import db from '../db.json';

function Card() {
    let cardArr = db;
    return (
        <div className='row'>
            {cardArr.map((eachCard) => (
                <div className="card-parcelas" style={{ width: "18rem" }}>
                    <img src={eachCard.img_1} className="card-img" alt="imagen" />
                    <div className="card-body">
                        <h5 className="card-title">{eachCard.nombre_parcela}</h5>
                        <p style={{height:'25vh'}} className="card-text">{eachCard.region_parcela}</p>
                    </div>
                    <div className="card-description">
                        <p>{eachCard.descripcion_parcela}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;

{/* <div className="card" style={{ width: "18rem" }}>
                    
                    <div className="card-body">
                        <h5 className="card-title">{eachCard.nombre_parcela}</h5>
                        <p style={{height:'25vh'}} className="card-text">{eachCard.descripcion_parcela}</p>
                        <p>Insertar boton</p>
                    </div>
                </div> */}