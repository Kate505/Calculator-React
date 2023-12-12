import React, {useLayoutEffect} from 'react';
import {Box, Text} from "@chakra-ui/react";
import {calculateResult} from "../Helpers/calculateResult.js";

const Output = ({input, count, setCount, sign, setSign, setInput, decimal, setDecimal, history, setHistory}) => {

  useLayoutEffect(() => {
    calculateResult(input, count, setCount, sign, setSign, setInput, decimal, setDecimal, history, setHistory);
  }, [input]);

  return (
    <Box w='full' h={20} borderWidth={3} mb={10} borderColor='teal' display='flex' alignItems='center'
         justifyContent='right' borderRadius={10}>
      <Text fontSize='3xl' pe={10} align='end' color='teal.500'>{input}</Text>
    </Box>
  );
};

export default Output;