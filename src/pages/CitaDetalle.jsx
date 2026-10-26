import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CitaDetalle() {
  const { id } = useParams();

  // Simulación de una base de datos local basada en el ID
  const detallesCitas = {
    1: { doctor: 'Dra. María Gómez', especialidad: 'Cardiología', fecha: '2026-06-10', hora: '10:00 AM', consultorio: '204' },
    2: { doctor: 'Dr. Carlos Ruiz', especialidad: 'Pediatría', fecha: '2026-06-12', hora: '11:30 AM', consultorio: '102' },
    3: { doctor: 'Dra. Ana Torres', especialidad: 'Dermatología', fecha: '2026-06-15', hora: '04:00 PM', consultorio: '305' },
  };

  const cita = detallesCitas[id];

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'system-ui, sans-serif', padding: '24px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2>📋 Detalles de la Cita #{id}</h2>
      
      {cita ? (
        <div style={{ lineHeight: '1.8', marginTop: '15px', color: '#334155' }}>
          <p><strong>Doctor/a:</strong> {cita.doctor}</p>
          <p><strong>Especialidad:</strong> {cita.especialidad}</p>
          <p><strong>Fecha:</strong> {cita.fecha}</p>
          <p><strong>Hora:</strong> {cita.hora}</p>
          <p><strong>Consultorio:</strong> {cita.consultorio}</p>
        </div>
      ) : (
        <p style={{ color: '#ef4444', marginTop: '15px' }}>No se encontró ninguna cita registrada con el ID: <strong>{id}</strong></p>
      )}

      <div style={{ marginTop: '25px' }}>
        <Link 
          to="/citas" 
          style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}
        >
          ← Volver al listado de citas
        </Link>
      </div>
    </div>
  );
}