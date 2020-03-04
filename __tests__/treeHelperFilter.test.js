import { filter } from '../src/helpers/treesHelper';

let tree;

beforeEach(() => {
  tree = {
    children: [
      {
        children: [
          {
            children: [{
              children: [],
              meta: {},
              name: 'conf.d',
              type: 'directory',
            }],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'config.json', type: 'file' }],
            meta: {},
            name: 'consul',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'etc',
        type: 'directory',
      },
      { meta: {}, name: 'hosts', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };
});

test('filter 1', () => {
  const actual = filter((n) => n.type === 'directory', tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [{
              children: [],
              meta: {},
              name: 'conf.d',
              type: 'directory',
            }],
            meta: {},
            name: 'NgiNx',
            type: 'directory',
          },
          {
            children: [],
            meta: {},
            name: 'consul',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'etc',
        type: 'directory',
      },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});

test('filter 2', () => {
  const names = new Set(['/', 'hosts', 'etc', 'consul']);
  const actual = filter((n) => names.has(n.name), tree);

  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'consul',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'etc',
        type: 'directory',
      },
      {
        name: 'hosts',
        meta: {},
        type: 'file',
      },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };
  expect(actual).toEqual(expected);
});
