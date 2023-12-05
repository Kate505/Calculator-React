import {checkSign} from "./checkSign.js";

export const checkActionButtons = (b, input, setInput, sign, setSign, count, setCount) => {
  const checkA = checkSign(input.at(-1));

  switch (b) {
    case 'CE':

      return true;
    case 'C':
      setInput('');
      setSign('');
      setCount(0);
      console.log(input, ' H ',  sign)
      return true;
    case '⚡':

      return true;
    default:
        return false;
  }
};
