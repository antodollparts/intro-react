import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '64px', color: '#ef4444', margin: '0 0 10px 0' }}>404</h1>
      <h2 style={{ color: '#1e293b' }}>Página no encontrada</h2>
      <p style={{ color: '#64748b', marginBottom: '25px' }}>
        Lo sentimos, la ruta que estás intentando visitar no existe.
      </p>
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          padding: '10px 20px', 
          backgroundColor: '#2563eb', 
          color: '#fff', 
          textDecoration: 'none', 
          borderRadius: '6px',
          fontWeight: '600'
        }}
      >
        Regresar al Inicio
      </Link>
    </div>
  );
}