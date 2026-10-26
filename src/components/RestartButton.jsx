import React from 'react';

function RestartButton({ alReiniciar }) {
  return (
    <button 
      onClick={alReiniciar}
      style={{ 
        marginTop: '15px', 
        padding: '8px 15px', 
        backgroundColor: '#e53e3e', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px', 
        cursor: 'pointer',
        fontSize: '14px'
      }}
    >
      Reiniciar Juego
    </button>
  );
}

export default RestartButton;