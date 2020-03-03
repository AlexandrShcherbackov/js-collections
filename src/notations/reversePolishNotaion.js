const isOperator = (char) => (typeof char === 'string');
const actions = [
  ['+', (a, b) => (+a + +b)],
  ['-', (a, b) => (+a - +b)],
  ['*', (a, b) => (+a * +b)],
];
const actionsBook = new Map(actions);
const calcInPolishNotation = (sentence) => {
  const reducer = (acc, item) => {
    if (isOperator(item)) {
      const currentAction = actionsBook.get(item);
      const operands = acc.slice().splice(-2, 2);
      const rest = acc.slice().splice(0, acc.length - 2);
      const currentResult = operands.reduce((ac, el) => (currentAction(ac, el)));

      return [].concat(rest, currentResult);
    }

    const newAcc = [].concat(acc, item);
    return newAcc;
  };

  return sentence.reduce(reducer, [])[0];
};

export default calcInPolishNotation;
