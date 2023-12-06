import {clear, clearAll, deleteOne} from "./cleanFunctions.js";

export const checkActionButtons = (b, input, setInput, sign, setSign, count, setCount, decimal, setDecimal) => {

  switch (b) {
    case 'CE':
      clear(setSign, setCount, input, setInput, sign, decimal, setDecimal);
      return true;
    case 'C':
      clearAll(setSign, setCount, input, setInput, decimal, setDecimal);
      return true;
    case '⚡':
      deleteOne(setSign, setCount, input, setInput, sign, decimal, setDecimal);
      return true;
    default:
        return false;
  }
};