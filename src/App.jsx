import React, {useState} from 'react';
import Calculator from "./Components/Calculator.jsx";
import Header from "./Components/Header.jsx";
import {VStack} from "@chakra-ui/react";

function App() {
  const [history, setHistory] = useState('');
  return (
    <VStack spacing={1} align='stretch' h='full' w='full'>
      <Header history={history}/>
      <Calculator history={history} setHistory={setHistory}/>
    </VStack>
  );
}

export default App;