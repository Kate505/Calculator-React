import {Box} from "@chakra-ui/react";
import {checkSign} from "../Helpers/checkSign.js";
import {checkActionButtons} from "../Helpers/checkActionButtons.js";

function Buttons({ b, setInput, input, sign, setSign, count, setCount }) {
  const buttonClick = (b, setInput, input, sign, setSign, count, setCount) => {
    console.log('Button: ', b)
    const isSignA = checkSign(input.at(-1)).isSign;
    const checkB = checkSign(b);

    if(checkB.isSign && input.length === 0){
      setInput(oldInput => checkB.isSign && checkB.sign === '=' ? oldInput : '');
    }else{
      if(!checkActionButtons(b,input, setInput, sign, setSign, count, setCount)){
        if(isSignA && checkB.isSign){
          setInput(oldInput => oldInput);
        }else{
          setInput(oldInput => count === 0 && checkB.isSign && checkB.sign === '=' ? oldInput : [...oldInput, b]);
        }
      }
    }
  }

  return (
    <Box w='100%' h='20' alignItems='center' justifyContent='center' color='teal.500'  display='flex' borderWidth={1}
         borderColor='teal.500' _hover={{color: 'white', textColor:'white', bg: 'teal.500'}} borderRadius={5}
         _active={{bg: '#dddfe2', transform: 'scale(0.98)', borderColor: '#bec3c9'}} textStyle={{size: '100px'}}
         _focus={{boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'}}
         onClick={() => buttonClick(b,setInput, input, sign, setSign, count, setCount)}>
      {b}
    </Box>
  );
}

export default Buttons;