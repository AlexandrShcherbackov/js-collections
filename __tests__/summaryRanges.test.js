import { summaryRanges } from '../src/helpers/arrayHelper';

test('compare version', () => {
  expect(summaryRanges([])).toEqual([]);
  expect(summaryRanges([1])).toEqual([]);
  expect(summaryRanges([1, 2, 3])).toEqual(['1->3']);
  expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5']);
  expect(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14])).toEqual(['3->5', '8->10']);
  expect(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])).toEqual(['110->112', '-5->-4']);
});
