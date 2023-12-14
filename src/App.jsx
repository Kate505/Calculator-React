import React, {useState} from 'react';
import Calculator from "./Components/Calculator.jsx";
import Header from "./Components/Header.jsx";
import {VStack} from "@chakra-ui/react";

function App() {
  const [history, setHistory] = useState('');
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState('');
  return (
    <VStack spacing={1} align='stretch' h='full' w='full'>
      <Header history={history} setHistory={setHistory} setInput={setInput} setCount={setCount} setSign={setSign}/>
      <Calculator history={history} setHistory={setHistory} input={input} setInput={setInput} count={count} setCount={setCount} sign={sign} setSign={setSign}/>
    </VStack>
  );
}

export default App;