import React, {useState} from 'react';
import { Box } from "@chakra-ui/react";
import Keypad from "./Keypad.jsx";
import Output from "./Output.jsx";

const Calculator = () => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState('');
  const [decimal, setDecimal] = useState({d1: 0, d2:0})
  return (
    <Box h='full' w='full'>
      <Box h='full' w='full' p='10'>
        <Output input={input} count={count} setCount={setCount} sign={sign} setSign={setSign} setInput={setInput} decimal={decimal} setDecimal={setDecimal}/>
        <Keypad input={input} setInput={setInput} count={count} sign={sign} setSign={setSign} setCount={setCount} decimal={decimal} setDecimal={setDecimal}/>
      </Box>
    </Box>
  );
};

export default Calculator;
