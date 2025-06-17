import { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <SecondsCounter seconds={seconds} places={6} />
    </div>
  );
}

export default App;
