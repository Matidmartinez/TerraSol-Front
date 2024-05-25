import React from 'react'; //Importa la biblioteca principal de react, se necesita para crear componentes
import ReactDOM from 'react-dom'; //Importa ReactDOM, que es una biblioteca específica para renderizar React en el navegador.
import './index.css'; // Importa el archivo CSS para aplicar estilos globales.
import App from './App'; // Importa el componente principal de la aplicación, que se define en App.js.

ReactDOM.render( //Método de ReactDOM que renderiza el componente especificado (<App />) dentro del elemento del DOM con el id root
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);