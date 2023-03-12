import './App.css';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import freCodeCampLogo from './img/fcc_primary_large.jpg'
import BotonClear from './componentes/BotonClear';
import React, {useState, useEffect} from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState('')

  const agregarInput = val =>{
    setInput(input + val);
  }

  const limpiarPantalla  = () => {
    setInput('');
  }

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }else{
      alert("Por favor ingresa un valor para calcular.")
    }
  }

  useEffect(()=>{},[input])
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freCodeCampLogo} alt='lodo de freeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear limpiarPantalla={limpiarPantalla}>Clear</BotonClear>
        </div>
      </div>  
    </div>
  );
}

 export default App;
