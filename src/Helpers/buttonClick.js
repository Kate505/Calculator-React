import {checkSign} from "./checkSign.js";
import {checkActionButtons} from "./checkActionButtons.js";
import {checkDecimal} from "./checkDecimal.js";
import {checkZero} from "./checkZero.js";


export const buttonClick = (b, setInput, input, sign, setSign, count, setCount, decimal, setDecimal, digits) => {
  const checkA = checkSign(input.at(-1));
  const checkB = checkSign(b);

  if(input.length === 0 && checkB.isSign){
    setInput('');
  }

  checkZero(b, setInput, input, sign, digits);

  if(input.length === 0 && b !== '0' && !checkB.isSign || input.length !== 0 && digits && b !== '0' && checkB.sign !== '.' || input.length !== 0 && b === '='){
    if(!checkActionButtons(b,input, setInput, sign, setSign, count, setCount, decimal, setDecimal)){
      if(checkA.isSign && checkB.isSign){
        if(checkB.sign !== '='){
          input.pop();
          setInput(input => [...input, checkB.sign]);
          sign.pop();
          setSign(sign => [...sign, checkB.sign]);
          setCount(c => c - 1);
        }else{
          setInput(oldInput => oldInput);
        }
      }else{
        setInput(oldInput => count === 0 && checkB.isSign && checkB.sign === '=' ? oldInput : [...oldInput, b]);
      }
    }

  }

  checkDecimal(b, setInput, input, sign, decimal, setDecimal, digits);

  !digits && checkActionButtons(b,input, setInput, sign, setSign, count, setCount, decimal, setDecimal);
}