const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const normalize = (n1, n2) => {
  const commonDivisor = getGcd(n1, n2);
  return [n1 / commonDivisor, n2 / commonDivisor];
};

const makeRational = (num, denom) => {
  const [normalizeNum, normalizeDenom] = normalize(num, denom);
  return new Map([
    ['num', normalizeNum],
    ['denom', normalizeDenom],
  ]);
};

const getNumer = (rat) => (rat.get('num'));
const getDenom = (rat) => (rat.get('denom'));

const lessCommonDenom = (denom1, denom2) => {
  const iter = (n) => {
    if (n % denom1 === 0 && n % denom2 === 0) {
      return n;
    }

    return iter(n + 1);
  };

  return denom1 > denom2 ? iter(denom2) : iter(denom1);
};

const add = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
    getDenom(rational1) * getDenom(rational2),
  ));

const sub = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
    getDenom(rational1) * getDenom(rational2),
  ));
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
  getGcd,
  normalize,
  lessCommonDenom,
  makeRational,
  getNumer,
  getDenom,
  add,
  sub,
  ratToString,
};
