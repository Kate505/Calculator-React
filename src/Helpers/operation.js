export const operation = (a,b,sign) => {
  switch (sign) {
    case '+':
      return (a + b).toString();
    case '-':
      return (a - b).toString();
    case 'x':
      return (a * b).toString();
    case '/':
      return (a / b).toString();
  }
}