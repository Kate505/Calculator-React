import React from 'react';
import Calculator from "./Components/Calculator.jsx";
import Header from "./Components/Header.jsx";
import {Box, VStack} from "@chakra-ui/react";

function App() {
  return (
    <VStack spacing={1} align='stretch' h='full' w='full'>
      <Header/>
      <Calculator/>
    </VStack>
  );
}

export default App;