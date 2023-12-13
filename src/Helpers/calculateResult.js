import {checkSign} from "./checkSign.js";
import {operation} from "./operation.js";

export const calculateResult = (input, count, setCount, sign, setSign, setInput, decimal, setDecimal, history, setHistory) => {
  const checkSignA = checkSign(input.at(-1));

  if (checkSignA.isSign && checkSignA.sign !== '.') {
    setSign(oldSign => [...oldSign, checkSignA.sign]);
    if (count < 1) {
      setCount(c => c + 1)
    } else {
      const numbers = input.join('').split(sign.at(-1));
      const num2 = numbers[1].split(checkSignA.sign)[0];
      const result = Math.round((parseFloat(operation(parseFloat(numbers[0]), parseFloat(num2), sign.at(-1))) + Number.EPSILON) * 100) / 100;
      const inputCopy = [...input];
      inputCopy.splice((input.length-1),1);
      const history =  inputCopy.join(' ') + ' = ' + result.toString();
      setHistory(h => [...h, history]);
      setCount(0);
      const comp = result.toString().split('.');
      if(comp.length > 1){
        setDecimal(d => {return {d1: 1, d2: 0}});
      }else{
        setDecimal(d => {return {d1: 0, d2: 0}});
      }
      if (checkSignA.sign === '=') {
        setSign('');
        setInput(result.toString().split(''));
      } else {
        setSign(checkSignA.sign);
        setInput((result.toString() + checkSignA.sign).split(''));
      }
    }
  }
}