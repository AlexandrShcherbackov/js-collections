import factorial from '../src/matematicalAnalisys/factorial';

describe('factorial', () => {
  test('test factorial', () => {
    expect(factorial(3)).toBe(6);
    expect(factorial(6)).toBe(720);
  });
});
