import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', fontFamily: 'system-ui, sans-serif' }}>
      <h2>🏥 Consulta Médica</h2>
      <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '20px' }}>
        Sistema de control y seguimiento de citas médicas.
      </p>
      <Link 
        to="/citas" 
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#2563eb', 
          color: '#fff', 
          textDecoration: 'none', 
          borderRadius: '8px',
          fontWeight: '600'
        }}
      >
        Ver Citas Médicas
      </Link>
    </div>
  );
}