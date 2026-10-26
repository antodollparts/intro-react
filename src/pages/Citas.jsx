import React from 'react';
import { Link } from 'react-router-dom';

export default function Citas() {
  const citasLista = [
    { id: 1, doctor: 'Dra. María Gómez', especialidad: 'Cardiología', fecha: '2026-06-10' },
    { id: 2, doctor: 'Dr. Carlos Ruiz', especialidad: 'Pediatría', fecha: '2026-06-12' },
    { id: 3, doctor: 'Dra. Ana Torres', especialidad: 'Dermatología', fecha: '2026-06-15' },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'system-ui, sans-serif', padding: '0 20px' }}>
      <h2>📅 Listado de Citas Médicas</h2>
      <p style={{ color: '#64748b' }}>Selecciona una cita para ver más información:</p>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {citasLista.map((cita) => (
          <li 
            key={cita.id} 
            style={{ 
              marginBottom: '12px', 
              padding: '16px', 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: '8px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}
          >
            <div>
              <strong style={{ fontSize: '16px', color: '#1e293b' }}>{cita.doctor}</strong><br />
              <span style={{ fontSize: '14px', color: '#475569' }}>{cita.especialidad} — 🕒 {cita.fecha}</span>
            </div>
            <Link 
              to={`/cita/${cita.id}`} 
              style={{ 
                padding: '8px 14px', 
                background: '#3b82f6', 
                color: '#fff', 
                textDecoration: 'none', 
                borderRadius: '6px', 
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Ver Detalles
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}