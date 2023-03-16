import { useState } from 'react';
import IncrementButton from './atom/IncrementButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <IncrementButton buttonAction={() => setCount(count + 1)} />
      <div className="App">{count}</div>
    </div>
  );
}

export default App;
