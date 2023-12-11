import {checkSign} from "./checkSign.js";
import {checkActionButtons} from "./checkActionButtons.js";
import {checkDecimal} from "./checkDecimal.js";
import {checkZero} from "./checkZero.js";


export const buttonClick = (b, setInput, input, sign, setSign, count, setCount, decimal, setDecimal) => {

  const isSignA = checkSign(input.at(-1)).isSign;
  const checkB = checkSign(b);

  if(input.length === 0 && checkB.isSign){
    setInput('');
  }

  checkZero(b, setInput, input, sign);

  if(input.length === 0 && b !== '0' && !checkB.isSign || input.length !== 0 && b !== '0' && checkB.sign !== '.'){
    if(!checkActionButtons(b,input, setInput, sign, setSign, count, setCount, decimal, setDecimal)){
      if(isSignA && checkB.isSign){
        setInput(oldInput => oldInput);
      }else{
        setInput(oldInput => count === 0 && checkB.isSign && checkB.sign === '=' ? oldInput : [...oldInput, b]);
      }
    }

  }

  checkDecimal(b, setInput, input, sign, decimal, setDecimal);
}