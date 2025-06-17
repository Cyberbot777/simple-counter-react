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

export default function SecondsCounter({ seconds, places = 6 }) {
  const digits = seconds.toString().padStart(places, '0').split('');

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000',
      padding: '1rem',
      marginTop: '2rem',
    }}>
      <Clock size={40} color="white" style={{ marginRight: '1rem' }} />
      {digits.map((digit, index) => (
        <div key={index} style={boxStyle}>{digit}</div>
      ))}
    </div>
  );
}
