import {
  normalize, makeRational, getNumer, getDenom, add, sub, multi, div, ratToString,
} from '../src/matematicalAnalisys/fractions';

describe('normalize', () => {
  test('should work', () => {
    expect(normalize(21, 6)).toEqual([7, 2]);
    expect(normalize(2, 3)).toEqual([2, 3]);
  });
});


describe('rational', () => {
  test('getters', () => {
    const rat1 = makeRational(3, 9);
    expect(getNumer(rat1)).toBe(1);
    expect(getDenom(rat1)).toBe(3);

    const rat3 = makeRational(-4, 16);
    expect(getNumer(rat3)).toBe(-1);
    expect(getDenom(rat3)).toBe(4);
  });

  test('add&sub', () => {
    const rat1 = makeRational(3, 9);
    const rat2 = makeRational(10, 3);
    expect(add(rat1, rat2)).toEqual(makeRational(11, 3));
    expect(sub(rat1, rat2)).toEqual(makeRational(-3, 1));

    const rat4 = makeRational(12, 5);
    const rat3 = makeRational(-4, 16);
    expect(add(rat3, rat4)).toEqual(makeRational(43, 20));
    expect(sub(rat3, rat4)).toEqual(makeRational(-53, 20));

    const rat5 = makeRational(1, 15);
    const rat6 = makeRational(4, 25);
    expect(add(rat5, rat6)).toEqual(makeRational(17, 75));
    expect(sub(rat5, rat6)).toEqual(makeRational(-7, 75));
  });

  test('multi&div', () => {
    const rat1 = makeRational(1, 2);
    const rat2 = makeRational(2, 3);
    expect(multi(rat1, rat2)).toEqual(makeRational(2, 6));

    const rat3 = makeRational(1, 3);
    const rat4 = makeRational(1, 2);
    expect(div(rat3, rat4)).toEqual(makeRational(2, 3));
  });

  test('ratToString', () => {
    const rat1 = makeRational(3, 9);
    const rat3 = makeRational(-4, 16);
    expect(ratToString(rat1)).toBe('1/3');
    expect(ratToString(rat3)).toBe('-1/4');
  });
});
