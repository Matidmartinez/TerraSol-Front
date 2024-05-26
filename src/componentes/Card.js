import React from 'react';

function Card() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={require("../images/sample.jpg")} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Nombre-Parcela</h5>
                <p className="card-text">Descripcion-Parcela</p>
                <p>Insertar boton</p>
            </div>
        </div>
    );
}

export default Card;