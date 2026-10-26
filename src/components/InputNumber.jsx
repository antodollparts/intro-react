import React from 'react';

function InputNumber({ valor, alCambiar, alEnviar }) {
  return (
    <form onSubmit={alEnviar} style={{ marginBottom: '15px' }}>
      <input 
        type="number" 
        value={valor} 
        onChange={(e) => alCambiar(e.target.value)} 
        placeholder="Escribe un número"
        min="1"
        max="100"
        style={{ padding: '8px', fontSize: '16px', marginRight: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button 
        type="submit"
        style={{ padding: '8px 15px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
      >
        Adivinar
      </button>
    </form>
  );
}

export default InputNumber;