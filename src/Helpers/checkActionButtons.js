import {checkSign} from "./checkSign.js";

export const checkActionButtons = (b, input, setInput, sign, setSign, count, setCount) => {
  const checkA = checkSign(input.at(-1));

  switch (b) {
    case 'CE':
      if(input.length > 0){
        const cadena = input.join('').split(sign.at(-1));
        let result = '';
        if(cadena[1].length > 0){
          result = cadena[0] + sign.at(-1);
          setInput(result.split(''));
          setSign('');
          setCount(0);
        }else{
          setInput('');
          setSign('');
          setCount(0);
        }
      }
      return true;
    case 'C':
      setInput('');
      setSign('');
      setCount(0);
      return true;
    case '⚡':
      setSign('');
      setCount(0);
      input.pop();
      setInput(input => [...input]);
      console.log('sign: ', sign, ' input: ', input);
      return true;
    default:
        return false;
  }
};
