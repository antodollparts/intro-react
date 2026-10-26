import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  // Función para generar un número aleatorio entre 1 y 100
  const generarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

  const [numeroSecreto, setNumeroSecreto] = useState(generarNumeroAleatorio);
  const [numeroIngresado, setNumeroIngresado] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [intentos, setIntentos] = useState(0);
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  // Manejar la validación del número ingresado
  const manejarEnvio = (e) => {
    e.preventDefault();
    
    const numero = parseInt(numeroIngresado, 10);
    
    if (isNaN(numero)) {
      setMensaje("Por favor, introduce un número válido.");
      return;
    }

    setIntentos(prev => prev + 1);

    if (numero === numeroSecreto) {
      setMensaje(`¡Correcto! Adivinaste el número en ${intentos + 1} intentos.`);
      setJuegoTerminado(true);
    } else if (numero < numeroSecreto) {
      setMensaje("El número es mayor 📈");
    } else {
      setMensaje("El número es menor 📉");
    }

    setNumeroIngresado(''); // Limpiar input
  };

  // Reiniciar el juego
  const reiniciarJuego = () => {
    setNumeroSecreto(generarNumeroAleatorio());
    setNumeroIngresado('');
    setMensaje('');
    setIntentos(0);
    setJuegoTerminado(false);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #cbd5e0', borderRadius: '8px', background: '#f7fafc' }}>
      <h2>🎮 Adivina el Número</h2>
      <p>He pensado en un número entre 1 y 100. ¡Intenta adivinarlo!</p>
      
      {!juegoTerminado ? (
        <InputNumber 
          valor={numeroIngresado} 
          alCambiar={setNumeroIngresado} 
          alEnviar={manejarEnvio} 
        />
      ) : null}

      <Message mensaje={mensaje} />

      <p style={{ fontSize: '14px', color: '#4a5568' }}>Intentos: <strong>{intentos}</strong></p>

      {juegoTerminado && <RestartButton alReiniciar={reiniciarJuego} />}
    </div>
  );
}

export default Game;