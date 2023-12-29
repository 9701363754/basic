import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name , setName] =useState("sathya")
  const name2="sai"
  return (
    <div className="App">
       <h1>your name is {name}</h1>

       <button onClick={() =>{setName(name2)}}>clike</button>
    </div>
  );
}

export default App;
