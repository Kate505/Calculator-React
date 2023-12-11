import {checkSign} from "./checkSign.js";
import {operation} from "./operation.js";

export const calculateResult = (input, count, setCount, sign, setSign, setInput, decimal, setDecimal) => {
  const checkSignA = checkSign(input.at(-1));

  if (checkSignA.isSign && checkSignA.sign !== '.') {
    setSign(oldSign => [...oldSign, checkSignA.sign]);
    if (count < 1) {
      setCount(c => c + 1)
    } else {
      const numbers = input.join('').split(sign.at(-1));
      const num2 = numbers[1].split(checkSignA.sign)[0];
      const result = operation(parseFloat(numbers[0]), parseFloat(num2), sign.at(-1));
      setCount(0);
      const comp = result.split('.');
      if(comp.length > 1){
        setDecimal(d => {return {d1: 1, d2: 0}});
      }else{
        setDecimal(d => {return {d1: 0, d2: 0}});
      }
      if (checkSignA.sign === '=') {
        setSign('');
        setInput(result.split(''));
      } else {
        setSign(checkSignA.sign);
        setInput((result + checkSignA.sign).split(''));
      }
    }
  }
}