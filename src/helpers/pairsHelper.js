const makePair = (first, second) => (
  new Map([
    ['first', first],
    ['second', second],
  ])
);

const getFirst = (pair) => (pair.get('first'));
const getSecond = (pair) => (pair.get('second'));

export { makePair, getFirst, getSecond };
