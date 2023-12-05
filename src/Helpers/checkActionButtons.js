import {checkSign} from "./checkSign.js";

export const checkActionButtons = (b, input, setInput, sign) => {
  const signA = checkSign(input.at(-1)).sign;
  let numeros = '';
  switch (b) {
    case 'CE':
      if(input.length > 0){
        numeros = input.join('').split(sign.at(-1))[0];
      }
      setInput((numeros + signA).split(''))
      return true;
    case 'C':
      setInput('');
      return true;
    case '⚡':
      input.pop();
      setInput([...input]);
      return true;
    default:
        return false;
  }
};
