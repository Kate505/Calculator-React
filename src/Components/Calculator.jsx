import React, {useEffect, useState} from 'react';
import { Box } from "@chakra-ui/react";
import Keypad from "./Keypad.jsx";
import Output from "./Output.jsx";
import {useWindowSize} from "../Hooks/useWindowSize.js";

const Calculator = ({history, setHistory}) => {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [sign, setSign] = useState('');
  const [decimal, setDecimal] = useState({d1: 0, d2:0})
  const {totalDigits, windowSize} = useWindowSize();
  const [digits, setDigits] = useState(input.length < totalDigits);
  const allowInput = (input, totalDigits) => {
    setDigits(input.length < totalDigits);
  }

  useEffect(() => {
    allowInput(input, totalDigits);
  }, [input.length, digits]);

  return (
    <Box h='full' w='full'>
      <Box h='full' w='full' p='10'>
        <Output input={input} count={count} setCount={setCount} sign={sign} setSign={setSign} setInput={setInput} decimal={decimal} setDecimal={setDecimal} history={history} setHistory={setHistory}/>
        <Keypad input={input} setInput={setInput} count={count} sign={sign} setSign={setSign} setCount={setCount} decimal={decimal} setDecimal={setDecimal} digits={digits}/>
      </Box>
    </Box>
  );
};

export default Calculator;
