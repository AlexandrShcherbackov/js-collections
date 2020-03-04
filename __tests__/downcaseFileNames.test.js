// @ts-check

import { cloneDeep } from 'lodash';
import { downcaseFileNames } from '../src/helpers/treesHelper';

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
describe('should', () => {
  test('be immutable', () => {
    const original = cloneDeep(tree);
    downcaseFileNames(tree);

    expect(tree).toEqual(original);
  });

  test('downcase file names', () => {
    const actual = downcaseFileNames(tree);
    const expected = {
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
              children: [{ meta: {}, name: 'config.json', type: 'file' }],
              meta: {},
              name: 'CONSUL',
              type: 'directory',
            },
          ],
          meta: {},
          name: 'eTc',
          type: 'directory',
        },
        { meta: {}, name: 'hosts', type: 'file' },
      ],
      meta: {},
      name: '/',
      type: 'directory',
    };

    expect(actual).toEqual(expected);
  });

  test('return full copy', () => {
    const actual = downcaseFileNames(tree);
    const expected = {
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
              children: [{ meta: { }, name: 'config.json', type: 'file' }],
              meta: {},
              name: 'CONSUL',
              type: 'directory',
            },
          ],
          meta: {},
          name: 'eTc',
          type: 'directory',
        },
        { meta: {}, name: 'hosts', type: 'file' },
      ],
      meta: {},
      name: '/',
      type: 'directory',
    };

    expect(actual).toEqual(expected);
  });
});
