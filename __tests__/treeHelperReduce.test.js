import { reduce } from '../src/helpers/treesHelper';

test('reduce 1', () => {
  const tree = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'config.jsOn', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'eTc',
        type: 'directory',
      },
      { meta: {}, name: 'hOsts', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  const actual = reduce((acc) => acc + 1, tree, 0);
  expect(actual).toEqual(6);

  const actual2 = reduce((acc, n) => (n.type === 'file' ? acc + 1 : acc), tree, 0);
  expect(actual2).toEqual(2);

  const actual3 = reduce((acc, n) => (n.type === 'directory' ? acc + 1 : acc), tree, 0);
  expect(actual3).toEqual(4);
});
