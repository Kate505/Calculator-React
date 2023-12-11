import {checkSign} from "./checkSign.js";

export const clear = (setSign, setCount, input, setInput, sign, decimal, setDecimal) => {
  if(input.length > 0){
    const cadena = input.join('').split(sign.at(-1));
    if(cadena.length === 1){
      clearAll(setSign, setCount, input, setInput, decimal, setDecimal);
    }else {
      let result = '';
      if(cadena[1].length > 0){
        result = cadena[0] + sign.at(-1);
        setInput(result.split(''));
        setSign('');
        setCount(0);
        setDecimal(d => {return {...d, d2:0}});
      }else{
        clearAll(setSign, setCount, input, setInput, decimal, setDecimal);
      }
    }

  }
}
export const clearAll = (setSign, setCount, input, setInput, decimal, setDecimal) => {
  setInput('');
  setSign('');
  setCount(0);
  setDecimal(d => {return{d1: 0, d2:0}});
}


export const deleteOne = (setSign, setCount, input, setInput, sign, decimal, setDecimal) => {
  const checkA = checkSign(input.at(-1));
  const checkB = checkSign(input.at(-2));

  if(input.length > 0) {
    const op = input.join('').split(sign.at(-1));

    if(checkA.isSign){
      input.pop();
      setInput(input => [...input]);
      if(checkA.sign === '.'){
        if(op.length < 2){
          setDecimal(d => {return {d1:0, d2:0}});
        }else{
          setDecimal(d => {return {...d, d2:0}});
        }
      }else{
        setSign('');
        setCount(0);
      }
    }else {
      input.pop();
      setInput(input => [...input]);
    }
    if(checkB.isSign && checkB.sign !== '.'){
      setSign('');
      setCount(0);
    }
  }
}