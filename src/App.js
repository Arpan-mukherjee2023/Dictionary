import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Dictionary from './Components/Dictionary';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // hooks
  const [dictData, setDictData] = useState(null);
  const [word, setWord] = useState("");


  return (
    <>
    <Navbar />
    <Dictionary dictData = {dictData} setDictData = {setDictData} word={word} setWord = {setWord} />
    </>
  );
}

export default App;
