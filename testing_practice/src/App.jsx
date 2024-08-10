import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <ParentComp />
    </>
  )
}

export default App
