import React, {useState} from 'react';
import Calculator from "./Components/Calculator.jsx";
import Header from "./Components/Header.jsx";
import {VStack} from "@chakra-ui/react";

function App() {
  const [history, setHistory] = useState('');
  const [input, setInput] = useState('');
  return (
    <VStack spacing={1} align='stretch' h='full' w='full'>
      <Header history={history} setHistory={setHistory} setInput={setInput}/>
      <Calculator history={history} setHistory={setHistory} input={input} setInput={setInput}/>
    </VStack>
  );
}

export default App;