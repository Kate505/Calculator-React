import React, {useState} from 'react';
import { Box } from "@chakra-ui/react";
import Keypad from "./Keypad.jsx";
import Output from "./Output.jsx";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState('');
  return (
    <Box h='full' w='full'>
      <Box h='full' w='full' p='10'>
        <Output input={input} count={count} setCount={setCount} sign={sign} setSign={setSign} setInput={setInput}/>
        <Keypad input={input} setInput={setInput} count={count} sign={sign} setSign={setSign} setCount={setCount}/>
      </Box>
    </Box>
  );
};

export default Calculator;
