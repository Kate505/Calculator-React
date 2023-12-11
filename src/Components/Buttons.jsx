import {Box} from "@chakra-ui/react";
import {buttonClick} from "../Helpers/buttonClick.js";

function Buttons({ b, setInput, input, sign, setSign, count, setCount, decimal, setDecimal }) {

  return (
    <Box w='100%' h='20' alignItems='center' justifyContent='center' color='teal.500'  display='flex' borderWidth={1}
         borderColor='teal.500' borderRadius={5}
         _active={{bg: '#dddfe2', transform: 'scale(0.98)', borderColor: '#bec3c9'}} textStyle={{size: '100px'}}
         _focus={{boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'}}
         onClick={() => buttonClick(b,setInput, input, sign, setSign, count, setCount, decimal, setDecimal)}>
      {b}
    </Box>
  );
}

export default Buttons;