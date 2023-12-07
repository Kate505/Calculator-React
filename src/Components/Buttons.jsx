import {Box} from "@chakra-ui/react";
import {checkSign} from "../Helpers/checkSign.js";
import {checkActionButtons} from "../Helpers/checkActionButtons.js";

function Buttons({ b, setInput, input, sign, setSign, count, setCount, decimal, setDecimal }) {
  const buttonClick = (b, setInput, input, sign, setSign, count, setCount) => {

    const isSignA = checkSign(input.at(-1)).isSign;
    const checkB = checkSign(b);

    if(input.length === 0){
      if(checkB.isSign){
        setInput(oldInput => checkB.sign === '=' ? oldInput : '');

      }else{
        if(!checkActionButtons(b,input, setInput, sign, setSign, count, setCount, decimal, setDecimal)){
          if(isSignA && checkB.isSign){
            setInput(oldInput => oldInput);
          }else{
            setInput(oldInput => count === 0 && checkB.isSign && checkB.sign === '=' ? oldInput : [...oldInput, b]);
          }
        }
      }
    }else{
      if(checkB.sign === '.'){
        const op = input.join('').split(sign.at(-1));
        if(op.length < 2){
          setDecimal((d) => {return {...d, d1: d.d1 + 1}});
          setInput(oldInput => decimal.d1 < 1 ? [...oldInput, b] : oldInput);
        }else{
          setDecimal((d) => {return {...d, d2: d.d2 + 1}});
          setInput(oldInput => decimal.d2 < 1 ? [...oldInput, b] : oldInput);
        }
      }else{
        if(!checkActionButtons(b,input, setInput, sign, setSign, count, setCount, decimal, setDecimal)){
          if(isSignA && checkB.isSign){
            setInput(oldInput => oldInput);
          }else{
            setInput(oldInput => count === 0 && checkB.isSign && checkB.sign === '=' ? oldInput : [...oldInput, b]);
          }
        }
      }
    }
  }

  return (
    <Box w='100%' h='20' alignItems='center' justifyContent='center' color='teal.500'  display='flex' borderWidth={1}
         borderColor='teal.500' borderRadius={5}
         _active={{bg: '#dddfe2', transform: 'scale(0.98)', borderColor: '#bec3c9'}} textStyle={{size: '100px'}}
         _focus={{boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'}}
         onClick={() => buttonClick(b,setInput, input, sign, setSign, count, setCount)}>
      {b}
    </Box>
  );
}

export default Buttons;