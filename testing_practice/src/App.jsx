import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My React App</h1>
      <Counter />
      <ParentComp />
    </>
  )
}

export default App
