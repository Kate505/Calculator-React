import React, {useEffect} from 'react';
import {Box, Text} from "@chakra-ui/react";
import {checkSign} from "../Helpers/checkSign.js";
import {operation} from "../Helpers/operation.js";

const Output = ({input, count, setCount, sign, setSign, setInput, decimal, setDecimal}) => {

  const addingSigns = () => {
    const isSignA = checkSign(input.at(-1)).isSign;
    const signA = checkSign(input.at(-1)).sign;

    if (isSignA && signA !== '.') {
      setSign(oldSign => [...oldSign, signA]);
      if (count < 1) {
        setCount(c => c + 1)
      } else {
        const numeros = input.join('').split(sign.at(-1));
        const num2 = numeros[1].split(signA)[0];
        //console.log(numeros[0], ' ', sign.at(-1), ' ', num2);
        const result = operation(parseFloat(numeros[0]), parseFloat(num2), sign.at(-1));
        setCount(0);
        const comp = result.split('.');
        if(comp.length > 1){
          setDecimal(d => {return {d1: 1, d2: 0}});
        }else{
          setDecimal(d => {return {d1: 0, d2: 0}});
        }
        if (signA === '=') {
          setSign('');
          setInput(result.split(''));
        } else {
          setSign(signA);
          setInput((result + signA).split(''));
        }
      }
    }
  }

  useEffect(() => {
    addingSigns();
  }, [input]);

  return (
    <Box w='full' h={20} borderWidth={3} mb={10} borderColor='teal' display='flex' alignItems='center'
         justifyContent='right' borderRadius={10}>
      <Text fontSize='3xl' pe={10} align='end' color='teal.500'>{input}</Text>
    </Box>
  );
};

export default Output;