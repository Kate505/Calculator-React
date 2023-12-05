import {checkSign} from "./checkSign.js";
import {clear, clearAll, deleteOne} from "./cleanFunctions.js";

export const checkActionButtons = (b, input, setInput, sign, setSign, count, setCount) => {
  const checkA = checkSign(input.at(-1));

  switch (b) {
    case 'CE':
      clear(setSign, setCount, input, setInput, sign);
      return true;
    case 'C':
      clearAll(setSign, setCount, input, setInput);
      return true;
    case '⚡':
      deleteOne(setSign, setCount, input, setInput);
      return true;
    default:
        return false;
  }
};