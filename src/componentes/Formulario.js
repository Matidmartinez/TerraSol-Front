import React, { useState } from 'react';
import '../styles/Contact.css';

export function Formulario() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const validarMail = (email) => {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    };
    const validarNombre = () => {
        const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
        return  re.test(String(firstName).trim());
    };

    const validarApellido = () => {
        const re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
        return  re.test(String(lastName).trim());
    };

    const validarTelefono = () => {
        const re = /^\+?[\d\s\-\(\)]+$/;
        return re.test(String(phone).trim())
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarNombre(firstName)){
            alert("Por favor ingrese su nombre")
            return;
        }
        if(!validarApellido(lastName)){
            alert("Ingrese sus apellidos")
            return;
        }
        if(!validarMail(email)){
            alert("Ingrese una dirección de correo válida")
            return;
        }
        if(!validarTelefono(phone)){
            alert("Ingrese su número de teléfono")
            return;
        }
        if(!message.trim()){
            alert("Ingrese su mensaje por favor.")
        }

        alert("Gracias por contactarnos");

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };


    return (
        <div className="Formulario">
            <h1>Escríbenos</h1>
            <fieldset>
                <form action="#" method="get" onSubmit={handleSubmit}>
                    <label for="firstname">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Ingrese su nombre"
                        required
                    />
                    <label for="lastname">Apellidos</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Ingrese su apellido"
                        required
                    />
                    <label for="email">Correo </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Ingrese su correo"
                        required
                    />
                    <label for="tel">Contacto</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={(e) =>
                            setPhone(e.target.value)
                        }
                        placeholder="Ingrse su número de teléfono"
                        required
                    />

                    <label for="message">Mensaje</label>
                    <textarea
                        className='text-form'
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                        placeholder="Escriba su mensaje"
                        required
                    ></textarea>
                    <button
                        type="submit"
                    >
                        Enviar
                    </button>
                </form>
            </fieldset>
        </div>
    );
}