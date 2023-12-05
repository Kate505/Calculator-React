export const clear = (setSign, setCount, input, setInput, sign) => {
  if(input.length > 0){
    const cadena = input.join('').split(sign.at(-1));
    if(cadena.length === 1){
      clearAll(setSign, setCount, input, setInput);
    }else {
      let result = '';
      if(cadena[1].length > 0){
        result = cadena[0] + sign.at(-1);
        setInput(result.split(''));
        setSign('');
        setCount(0);
      }else{
        clearAll(setSign, setCount, input, setInput);
      }
    }

  }
}
export const clearAll = (setSign, setCount, input, setInput) => {
  setInput('');
  setSign('');
  setCount(0);
}


export const deleteOne = (setSign, setCount, input, setInput) => {
  setSign('');
  setCount(0);
  if(input.length > 0) {
    input.pop();
    setInput(input => [...input]);
  }
}