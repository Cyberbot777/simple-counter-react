import React from 'react';
import { Clock } from 'lucide-react';

const boxStyle = {
  background: '#111',
  color: '#fff',
  fontSize: '2.5rem',
  padding: '1rem',
  margin: '0 5px',
  borderRadius: '8px',
  minWidth: '50px',
  textAlign: 'center',
  fontFamily: 'monospace',
};

export default function SecondsCounter({ seconds, places = 6, dimmed = false }) {
  const digits = seconds.toString().padStart(places, '0').split('');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#000',
        padding: '1rem',
        marginTop: '2rem',
        opacity: dimmed ? 0.5 : 1,
        border: '2px solid #555',
        borderRadius: '12px',
        boxShadow: '0 0 10px #000',
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Clock size={40} color="white" style={{ marginRight: '1rem' }} />
      {digits.map((digit, index) => (
        <div key={index} style={boxStyle}>
          {digit}
        </div>
      ))}
    </div>
  );
}
