import Tarjeta from './components/Tarjeta';
import ListaCompras from './components/ListaCompras';
import ContadorTareas from './components/ContadorTareas';
import Planeta from './components/Planeta';
import Game from './components/Game';
import React, { useState, useEffect, useMemo } from 'react';

function App() {

  //estado de nave
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En órbita');
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  // Lista de nombres para ir añadiendo al aterrizar
  const nombresDisponibles = ["Marte", "Kepler-22b", "Pandora", "Gliese-581c", "Tatooine"];

  //efectos
  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      // ... (simulación de vuelo)
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  // Función para manejar el botón de aterrizaje
  const handleAterrizar = () => {
    setEstadoNave("Aterrizando");
    
    // Seleccionar un planeta de la lista según los que ya se han visitado
    const siguientePlaneta = nombresDisponibles[planetasVisitados.length % nombresDisponibles.length];
    
    // Añade el planeta al array
    setPlanetasVisitados((prevPlanetas) => [...prevPlanetas, siguientePlaneta]);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto' }}>
        {/* <Tarjeta /> */}
      {/*<ListaCompras />*/}
      {/*<ContadorTareas />*/}
      {/*<h1>🚀 Explorador</h1>
      
      <div style={{ background: '#f7fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
        <p><strong>Distancia recorrida:</strong> {distancia} km</p>
        <p><strong>Combustible restante:</strong> {combustible}%</p>
        <p style={{ color: '#2b6cb0', fontWeight: 'bold' }}>{mensajeEstado}</p>
      </div>

      <button 
        onClick={handleAterrizar}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#3182ce', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Aterrizar
      </button>

      <div style={{ marginTop: '25px' }}>
        <h3>Bitácora de Planetas:</h3>
        {planetasVisitados.length === 0 ? (
          <p style={{ color: '#718096' }}>Aún no se ha visitado ningún planeta.</p>
        ) : (
          planetasVisitados.map((planeta, index) => (
            <Planeta key={index} nombre={planeta} />
          ))
        )}
      </div>*/}
      <Game />
    </div>
  )
}

export default App
