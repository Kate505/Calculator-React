export const checkZero = (b, setInput, input, sign, totalDigits) => {

  if(b === '0' && input.length !== 0 && totalDigits ) {
    const op = input.join('').split(sign.at(-1));
    if (op.length < 2) {
      setZeroInput(op[0].split(''), setInput, b);
    } else {
      setZeroInput(op[1].split(''), setInput, b);
    }
  }

  if(b === '0' && input.length === 0) {
    setInput(oldInput => [...oldInput, b]);
  }
}

const setZeroInput = (num, setInput, b) => {
  if(num.length < 2 && num[0] === '0'){
    setInput(oldInput => oldInput);
  }else{
    setInput(oldInput => [...oldInput, b]);
  }
}