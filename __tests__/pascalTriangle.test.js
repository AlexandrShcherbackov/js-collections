import pascalTriangle from '../src/matematicalAnalisys/pascalTriangle';

test('Pascal\'s Triangle', () => {
  expect(pascalTriangle(0)).toEqual([1]);
  expect(pascalTriangle(1)).toEqual([1, 1]);
  expect(pascalTriangle(2)).toEqual([1, 2, 1]);
  expect(pascalTriangle(3)).toEqual([1, 3, 3, 1]);
  expect(pascalTriangle(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
});
