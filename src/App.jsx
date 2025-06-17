import { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const toggleRunning = () => setRunning((r) => !r);
  const resetCounter = () => {
    setSeconds(0);
    setRunning(false);
  };

  return (
    <div>
      <SecondsCounter seconds={seconds} places={6} dimmed={!running} />

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={toggleRunning}
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#222'}
        >
          {running ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={resetCounter}
          style={{ ...buttonStyle, marginLeft: '1rem' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#444'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#222'}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '1rem',
  backgroundColor: '#222',
  color: '#fff',
  border: '1px solid #555',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default App;
