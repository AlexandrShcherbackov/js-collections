import factorial from './factorial';

const generate = (n) => {
  const recurse = (acc, index) => {
    if (index === n + 1) {
      return acc;
    }

    const newValue = index === 0 || index === n
      ? 1
      : factorial(n) / (factorial(index) * factorial(n - index));
    const newAcc = [].concat(acc, newValue);

    return recurse(newAcc, index + 1);
  };

  return recurse([], 0);
};

export default generate;
