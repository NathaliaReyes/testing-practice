import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import ParentComp from './components/ParentComp';
import Login from './components/Login';

function App() {

  return (
    <>
      <h1>My React App</h1>
      <Login />
      <Counter />
      <ParentComp />
    </>
  )
}

export default App
