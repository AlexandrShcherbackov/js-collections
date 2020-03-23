import { makePair, getFirst, getSecond } from '../src/helpers/pairsHelper';

describe('abstraction pair data structure', () => {
  test('pair should have first and second elements', () => {
    const pair = makePair(1, 2);
    expect(getFirst(pair)).toBe(1);
    expect(getSecond(pair)).toBe(2);
  });

  test('should be unmutanle', () => {
    const pair = makePair(1, 2);
    pair.first = 10;
    expect(getFirst(pair)).toBe(1);
  });
});
