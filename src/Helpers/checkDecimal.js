import {checkSign} from "./checkSign.js";

export const checkDecimal = (b, setInput, input, sign, decimal, setDecimal, totalDigits) => {

  const checkB = checkSign(b);
  if(checkB.sign === '.' && input.length !== 0 && totalDigits){
    const op = input.join('').split(sign.at(-1));
    if(op.length < 2){
      setDecimal((d) => {return {...d, d1: d.d1 + 1}});
      setInput(oldInput => decimal.d1 < 1 ? [...oldInput, b] : oldInput);
    }else{
      setDecimal((d) => {return {...d, d2: d.d2 + 1}});
      setInput(oldInput => decimal.d2 < 1 ? [...oldInput, b] : oldInput);
    }
  }

}