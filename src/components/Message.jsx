import React from 'react';

function Message({ mensaje }) {
  // Si no hay mensaje, no renderizamos nada
  if (!mensaje) return null;

  const esCorrecto = mensaje.includes("¡Correcto!");

  return (
    <div style={{ 
      margin: '15px 0', 
      padding: '10px', 
      borderRadius: '4px', 
      backgroundColor: esCorrecto ? '#c6f6d5' : '#feebc8',
      color: esCorrecto ? '#22543d' : '#744210',
      fontWeight: 'bold'
    }}>
      {mensaje}
    </div>
  );
}

export default Message;