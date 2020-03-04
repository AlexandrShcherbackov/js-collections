import { cloneDeep } from 'lodash';
import { map } from '../src/helpers/treesHelper';

let tree;

beforeEach(() => {
  tree = {
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
});

test('immutable', () => {
  const original = cloneDeep(tree);
  map((n) => ({ ...n, name: n.name.toUpperCase() }), tree);

  expect(tree).toEqual(original);
});

test('map 1', () => {
  const actual = map((n) => ({ ...n, name: n.name.toUpperCase() }), tree);
  const expected = {
    children: [
      {
        children: [
          {
            children: [],
            meta: {},
            name: 'NGINX',
            type: 'directory',
          },
          {
            children: [{ meta: {}, name: 'CONFIG.JSON', type: 'file' }],
            meta: {},
            name: 'CONSUL',
            type: 'directory',
          },
        ],
        meta: {},
        name: 'ETC',
        type: 'directory',
      },
      { meta: {}, name: 'HOSTS', type: 'file' },
    ],
    meta: {},
    name: '/',
    type: 'directory',
  };

  expect(actual).toEqual(expected);
});
