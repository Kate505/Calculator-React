import { SimpleGrid } from "@chakra-ui/react";
import Buttons from "./Buttons.jsx";

const Keypad = ({input, setInput, count, sign, setSign, setCount, decimal, setDecimal}) => {
  const buttons = ['CE', 'C', '⚡', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '.', '0', '='];

  return (
    <SimpleGrid h="full" w="full" columns={4} gap='6' align="stretch" alignContent="center" justifyContent='center'>
      {
        buttons.map((b) => (
          <Buttons key={b} b={b} setInput={setInput} input={input} count={count} setCount={setCount} sign={sign} setSign={setSign} decimal={decimal} setDecimal={setDecimal}/>
        ))
      }
    </SimpleGrid>
  );
}

export default Keypad;